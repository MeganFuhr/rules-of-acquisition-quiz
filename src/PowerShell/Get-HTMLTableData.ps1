function Get-HTMLTableData {
    #Author: Lee Holmes https://www.leeholmes.com/extracting-tables-from-powershells-invoke-webrequest/
    param(
        [Parameter(Mandatory = $true)]
        [Microsoft.PowerShell.Commands.HtmlWebResponseObject] $WebRequest,
  
        [Parameter(Mandatory = $true)]
        [int] $TableNumber
    )

    ## Extract the tables out of the web request
    $tables = @($WebRequest.ParsedHtml.getElementsByTagName("TABLE"))
    $table = $tables[$TableNumber]
    $titles = @()
    $rows = @($table.Rows)

    ## Go through all of the rows in the table
    foreach ($row in $rows) {
        $cells = @($row.Cells)
   
        ## If we've found a table header, remember its titles
        if ($cells[0].tagName -eq "TH") {
            $titles = @($cells | % { ("" + $_.InnerText).Trim() })
            continue
        }

        ## If we haven't found any table headers, make up names "P1", "P2", etc.
        if (-not $titles) {
            $titles = @(1..($cells.Count + 2) | % { "P$_" })
        }

        ## Now go through the cells in the the row. For each, try to find the
        ## title that represents that column and create a hashtable mapping those
        ## titles to content
        $resultObject = [Ordered] @{}
        for ($counter = 0; $counter -lt $cells.Count; $counter++) {
            $title = $titles[$counter]
            if (-not $title) { continue }  

            $resultObject[$title] = ("" + $cells[$counter].InnerText).Trim()
        }

        ## And finally cast that hashtable to a PSCustomObject
        [PSCustomObject] $resultObject
    }
}

#get the webpage
$res = Invoke-WebRequest "https://memory-beta.fandom.com/wiki/Ferengi_Rules_of_Acquisition"

#update table headers to lowercase
$data = Get-HTMLTableData $res -TableNumber 0 | Select @{ name = "id"; e = { $_.number } }, @{ name = "answer"; e = { $_.rule } }, @{ name = "isCorrect"; e = { $true } }, @{ name = "source"; e = { $_.source } }

$data | ConvertTo-Json | Set-Clipboard

