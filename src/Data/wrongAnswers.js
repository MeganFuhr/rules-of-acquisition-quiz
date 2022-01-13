const wrongAnswers = [
  {
    id: 0,
    answer:
      "laboris dolore aliquip velit mollit enim veniam incididunt proident voluptate tempor minim ut ipsum amet",
    isCorrect: false,
  },
  {
    id: 1,
    answer:
      "anim laborum officia sit proident aliqua nulla voluptate deserunt cupidatat id anim fugiat amet laborum",
    isCorrect: false,
  },
  {
    id: 2,
    answer:
      "cillum duis ex sit dolore quis sit deserunt esse non ut consequat aliquip et veniam",
    isCorrect: false,
  },
  {
    id: 3,
    answer:
      "et qui veniam id qui consequat elit dolore anim aliqua amet magna amet amet reprehenderit",
    isCorrect: false,
  },
  {
    id: 4,
    answer:
      "dolor aute proident ipsum laborum qui commodo voluptate eu nisi Lorem fugiat aliquip nisi occaecat",
    isCorrect: false,
  },
  {
    id: 5,
    answer:
      "ullamco Lorem anim elit reprehenderit id ipsum quis sunt dolore Lorem sit velit nulla adipisicing",
    isCorrect: false,
  },
  {
    id: 6,
    answer:
      "sit quis velit non in aliquip enim exercitation elit nisi est pariatur veniam aliquip nulla",
    isCorrect: false,
  },
  {
    id: 7,
    answer:
      "cupidatat irure esse Lorem ad sunt deserunt eu irure reprehenderit ea voluptate consectetur dolor in",
    isCorrect: false,
  },
  {
    id: 8,
    answer:
      "ut quis excepteur in consequat minim cupidatat sit sit officia dolore nisi sunt eiusmod velit",
    isCorrect: false,
  },
  {
    id: 9,
    answer:
      "incididunt anim veniam velit occaecat incididunt consectetur do esse culpa excepteur laborum nisi dolore dolore",
    isCorrect: false,
  },
  {
    id: 10,
    answer:
      "incididunt sint pariatur nostrud elit anim quis sit ut laboris ad anim ex anim veniam",
    isCorrect: false,
  },
  {
    id: 11,
    answer:
      "sit commodo tempor laborum nulla velit nisi id laborum veniam in fugiat incididunt ipsum reprehenderit",
    isCorrect: false,
  },
  {
    id: 12,
    answer:
      "cupidatat fugiat reprehenderit ea exercitation labore quis dolore magna sit sit aliqua laboris et occaecat",
    isCorrect: false,
  },
  {
    id: 13,
    answer:
      "tempor commodo labore Lorem sint deserunt veniam irure cillum aliqua do ex exercitation qui consequat",
    isCorrect: false,
  },
  {
    id: 14,
    answer:
      "minim exercitation aliquip velit Lorem officia ex fugiat do consequat adipisicing est ipsum id dolore",
    isCorrect: false,
  },
  {
    id: 15,
    answer:
      "aute aliquip ex fugiat exercitation nulla id do elit aliqua commodo laborum dolor commodo id",
    isCorrect: false,
  },
  {
    id: 16,
    answer:
      "laborum labore laboris ullamco sint aliqua eu adipisicing ad Lorem irure fugiat anim culpa cupidatat",
    isCorrect: false,
  },
  {
    id: 17,
    answer:
      "irure aute nostrud esse et consequat elit Lorem aliquip voluptate qui aute incididunt cupidatat elit",
    isCorrect: false,
  },
  {
    id: 18,
    answer:
      "deserunt nulla reprehenderit consectetur duis veniam laborum et qui esse eu ad tempor esse excepteur",
    isCorrect: false,
  },
  {
    id: 19,
    answer:
      "magna reprehenderit aliqua enim exercitation ullamco proident fugiat ad occaecat dolor laboris tempor sint ad",
    isCorrect: false,
  },
  {
    id: 20,
    answer:
      "ut Lorem commodo aute sit exercitation tempor aute ea eiusmod amet fugiat quis cillum in",
    isCorrect: false,
  },
  {
    id: 21,
    answer:
      "ipsum laboris minim sunt dolore qui cillum proident aute et tempor ullamco eu voluptate aliqua",
    isCorrect: false,
  },
  {
    id: 22,
    answer:
      "id cillum cupidatat id labore duis sunt laborum nisi ad id voluptate et dolore laboris",
    isCorrect: false,
  },
  {
    id: 23,
    answer:
      "do dolore in pariatur sit proident culpa non consectetur irure eu reprehenderit magna quis fugiat",
    isCorrect: false,
  },
  {
    id: 24,
    answer:
      "non proident proident deserunt proident aliqua minim ex Lorem fugiat et reprehenderit esse sint reprehenderit",
    isCorrect: false,
  },
  {
    id: 25,
    answer:
      "irure Lorem labore dolor occaecat consectetur in esse incididunt esse anim ut nostrud sint anim",
    isCorrect: false,
  },
  {
    id: 26,
    answer:
      "magna id aliquip anim id dolore nulla dolor magna commodo amet consectetur ad dolore dolor",
    isCorrect: false,
  },
  {
    id: 27,
    answer:
      "voluptate fugiat id elit ipsum exercitation tempor proident voluptate laborum laboris exercitation adipisicing mollit non",
    isCorrect: false,
  },
  {
    id: 28,
    answer:
      "ipsum nulla cupidatat ut ut qui mollit non consectetur ipsum dolor in in nisi esse",
    isCorrect: false,
  },
  {
    id: 29,
    answer:
      "velit ea quis incididunt exercitation sit excepteur aliquip labore consequat nisi ipsum pariatur eiusmod et",
    isCorrect: false,
  },
  {
    id: 30,
    answer:
      "duis nisi magna officia eu reprehenderit adipisicing esse consectetur minim veniam Lorem qui dolor cillum",
    isCorrect: false,
  },
  {
    id: 31,
    answer:
      "ipsum in magna pariatur laboris quis qui labore anim id ea sit nostrud fugiat cillum",
    isCorrect: false,
  },
  {
    id: 32,
    answer:
      "laborum culpa ex sit magna nisi nisi elit ea quis irure cupidatat id sint adipisicing",
    isCorrect: false,
  },
  {
    id: 33,
    answer:
      "nostrud nisi irure et exercitation culpa adipisicing non sint laboris et velit eiusmod tempor laborum",
    isCorrect: false,
  },
  {
    id: 34,
    answer:
      "excepteur labore elit consequat consequat incididunt sit aute qui irure tempor qui minim magna laborum",
    isCorrect: false,
  },
  {
    id: 35,
    answer:
      "anim eiusmod ullamco dolore sit amet veniam consectetur sint et sint eiusmod dolore fugiat mollit",
    isCorrect: false,
  },
  {
    id: 36,
    answer:
      "laboris dolore culpa nostrud officia ea dolor mollit sunt enim nisi cupidatat nisi magna in",
    isCorrect: false,
  },
  {
    id: 37,
    answer:
      "nostrud nulla eiusmod incididunt commodo ullamco eu in do magna sint deserunt mollit ullamco in",
    isCorrect: false,
  },
  {
    id: 38,
    answer:
      "in nulla quis Lorem est deserunt laboris sunt amet velit esse duis ullamco esse non",
    isCorrect: false,
  },
  {
    id: 39,
    answer:
      "culpa adipisicing sit ipsum ex mollit sit in voluptate magna exercitation tempor aute anim non",
    isCorrect: false,
  },
  {
    id: 40,
    answer:
      "consequat nisi minim aute amet fugiat labore non cupidatat deserunt excepteur mollit anim occaecat nulla",
    isCorrect: false,
  },
  {
    id: 41,
    answer:
      "reprehenderit commodo est et quis occaecat veniam fugiat in labore in consequat sint culpa dolore",
    isCorrect: false,
  },
  {
    id: 42,
    answer:
      "proident qui eu dolor adipisicing labore ex non veniam consequat aliqua est officia adipisicing velit",
    isCorrect: false,
  },
  {
    id: 43,
    answer:
      "ullamco Lorem amet deserunt irure cillum anim laboris velit eiusmod anim elit exercitation cupidatat mollit",
    isCorrect: false,
  },
  {
    id: 44,
    answer:
      "veniam do ipsum duis velit veniam sunt deserunt consequat dolore cillum enim consequat minim Lorem",
    isCorrect: false,
  },
  {
    id: 45,
    answer:
      "magna minim commodo aliquip incididunt tempor amet aliquip cupidatat voluptate nulla sunt consequat dolor magna",
    isCorrect: false,
  },
  {
    id: 46,
    answer:
      "fugiat ullamco ut in est non elit et consequat ut incididunt proident deserunt est dolor",
    isCorrect: false,
  },
  {
    id: 47,
    answer:
      "enim cillum ut mollit ut aliquip dolor esse do eiusmod eu reprehenderit enim ex ex",
    isCorrect: false,
  },
  {
    id: 48,
    answer:
      "excepteur culpa sint non esse dolore excepteur sit est anim aliqua mollit dolore reprehenderit ea",
    isCorrect: false,
  },
  {
    id: 49,
    answer:
      "labore consequat amet enim pariatur labore aute elit veniam commodo ullamco esse elit excepteur ad",
    isCorrect: false,
  },
  {
    id: 50,
    answer:
      "do non reprehenderit ullamco nulla ullamco labore labore non est magna ipsum dolor est anim",
    isCorrect: false,
  },
  {
    id: 51,
    answer:
      "reprehenderit excepteur commodo do non aliquip et proident ut consequat irure consectetur proident aute ullamco",
    isCorrect: false,
  },
  {
    id: 52,
    answer:
      "dolore aute mollit enim minim magna cupidatat in reprehenderit magna et occaecat Lorem eiusmod esse",
    isCorrect: false,
  },
  {
    id: 53,
    answer:
      "qui incididunt anim ut officia aute eu nostrud veniam mollit reprehenderit consequat non Lorem veniam",
    isCorrect: false,
  },
  {
    id: 54,
    answer:
      "aliquip nulla do esse laborum dolore cillum commodo duis deserunt consectetur magna quis exercitation duis",
    isCorrect: false,
  },
  {
    id: 55,
    answer:
      "et incididunt consequat voluptate exercitation officia aute cupidatat laboris labore dolor amet adipisicing amet pariatur",
    isCorrect: false,
  },
  {
    id: 56,
    answer:
      "aute Lorem esse et excepteur dolore minim magna consequat officia consectetur magna velit laborum cupidatat",
    isCorrect: false,
  },
  {
    id: 57,
    answer:
      "veniam nisi qui labore nostrud ea enim qui dolore deserunt laborum culpa dolor reprehenderit ex",
    isCorrect: false,
  },
  {
    id: 58,
    answer:
      "occaecat magna reprehenderit quis consectetur cupidatat reprehenderit esse deserunt tempor cillum mollit id anim dolor",
    isCorrect: false,
  },
  {
    id: 59,
    answer:
      "nisi id Lorem veniam ut qui occaecat excepteur ea eiusmod eiusmod pariatur minim do commodo",
    isCorrect: false,
  },
  {
    id: 60,
    answer:
      "consequat amet est est mollit ipsum mollit excepteur in mollit deserunt ipsum commodo mollit exercitation",
    isCorrect: false,
  },
  {
    id: 61,
    answer:
      "esse enim consequat tempor aliqua ad commodo veniam esse enim qui proident incididunt aliqua ex",
    isCorrect: false,
  },
  {
    id: 62,
    answer:
      "ipsum eu non Lorem do enim dolor exercitation et nisi cupidatat Lorem culpa irure veniam",
    isCorrect: false,
  },
  {
    id: 63,
    answer:
      "est enim ullamco anim cillum ex adipisicing fugiat voluptate commodo excepteur esse magna anim adipisicing",
    isCorrect: false,
  },
  {
    id: 64,
    answer:
      "cillum esse fugiat non laborum non eiusmod ex id occaecat ea aute aliqua sunt magna",
    isCorrect: false,
  },
  {
    id: 65,
    answer:
      "labore dolor ad irure incididunt incididunt dolor aute dolor ex nulla et sit et sunt",
    isCorrect: false,
  },
  {
    id: 66,
    answer:
      "do veniam velit mollit non commodo qui do tempor ullamco exercitation cillum ipsum aliquip amet",
    isCorrect: false,
  },
  {
    id: 67,
    answer:
      "aute est nostrud elit laborum aliquip ex non quis aute adipisicing veniam cupidatat esse laboris",
    isCorrect: false,
  },
  {
    id: 68,
    answer:
      "non commodo excepteur nostrud nisi culpa nisi amet consequat mollit minim ad amet est adipisicing",
    isCorrect: false,
  },
  {
    id: 69,
    answer:
      "excepteur cillum esse sint esse consectetur ut pariatur commodo aute voluptate dolore magna officia laborum",
    isCorrect: false,
  },
  {
    id: 70,
    answer:
      "enim velit enim labore consequat Lorem nulla exercitation nulla ad labore amet elit consectetur velit",
    isCorrect: false,
  },
  {
    id: 71,
    answer:
      "labore commodo veniam pariatur aliquip officia sit culpa sint excepteur irure labore minim cupidatat ipsum",
    isCorrect: false,
  },
  {
    id: 72,
    answer:
      "minim adipisicing dolore eu irure consequat aliqua quis veniam laboris nisi officia labore velit elit",
    isCorrect: false,
  },
  {
    id: 73,
    answer:
      "sint aute ad commodo duis fugiat sint commodo occaecat elit incididunt occaecat velit laboris aliqua",
    isCorrect: false,
  },
  {
    id: 74,
    answer:
      "irure duis qui voluptate quis culpa aliqua occaecat sint ut culpa nisi nostrud et ad",
    isCorrect: false,
  },
  {
    id: 75,
    answer:
      "cillum officia laborum magna voluptate enim pariatur exercitation mollit nisi culpa in magna ex duis",
    isCorrect: false,
  },
  {
    id: 76,
    answer:
      "exercitation dolor sunt irure mollit quis eu aliquip magna sint tempor esse quis veniam ex",
    isCorrect: false,
  },
  {
    id: 77,
    answer:
      "cupidatat reprehenderit ipsum eu proident sint et aute duis dolor consectetur ullamco ut sint eu",
    isCorrect: false,
  },
  {
    id: 78,
    answer:
      "exercitation minim in cupidatat velit pariatur esse velit aliqua et cupidatat in quis incididunt eiusmod",
    isCorrect: false,
  },
  {
    id: 79,
    answer:
      "reprehenderit voluptate exercitation excepteur sit magna esse irure consectetur labore Lorem sit nostrud officia ea",
    isCorrect: false,
  },
  {
    id: 80,
    answer:
      "dolor nulla culpa ipsum ullamco nostrud culpa esse in est eiusmod nulla pariatur elit officia",
    isCorrect: false,
  },
  {
    id: 81,
    answer:
      "officia ex voluptate consectetur amet laboris nostrud sint in sint reprehenderit ullamco ex adipisicing dolore",
    isCorrect: false,
  },
  {
    id: 82,
    answer:
      "exercitation reprehenderit labore cupidatat id sunt consectetur ullamco culpa tempor occaecat culpa adipisicing eu commodo",
    isCorrect: false,
  },
  {
    id: 83,
    answer:
      "esse id dolor voluptate eiusmod occaecat incididunt sunt est sunt eu aliqua proident tempor labore",
    isCorrect: false,
  },
  {
    id: 84,
    answer:
      "veniam aute labore fugiat sint reprehenderit mollit eu adipisicing duis dolore mollit sunt occaecat sunt",
    isCorrect: false,
  },
  {
    id: 85,
    answer:
      "mollit proident adipisicing esse velit elit quis ex veniam exercitation dolor aute dolore sit ad",
    isCorrect: false,
  },
  {
    id: 86,
    answer:
      "do Lorem consequat nostrud mollit officia incididunt dolore dolore irure dolore ad esse commodo est",
    isCorrect: false,
  },
  {
    id: 87,
    answer:
      "magna ex quis reprehenderit qui occaecat dolor sunt anim sint sit enim nostrud veniam Lorem",
    isCorrect: false,
  },
  {
    id: 88,
    answer:
      "velit nostrud do mollit proident nulla sit laborum deserunt dolore consectetur occaecat qui ipsum commodo",
    isCorrect: false,
  },
  {
    id: 89,
    answer:
      "adipisicing consequat veniam tempor enim aute ea sint pariatur eiusmod Lorem labore et duis duis",
    isCorrect: false,
  },
  {
    id: 90,
    answer:
      "velit aute anim veniam consequat et ipsum labore enim occaecat sit ut ad consequat aliqua",
    isCorrect: false,
  },
  {
    id: 91,
    answer:
      "labore anim irure dolor labore irure incididunt dolore reprehenderit esse duis sunt nulla occaecat consectetur",
    isCorrect: false,
  },
  {
    id: 92,
    answer:
      "esse irure laborum do consequat consectetur consequat ullamco velit sit reprehenderit consequat quis non incididunt",
    isCorrect: false,
  },
  {
    id: 93,
    answer:
      "cupidatat laboris nulla qui laboris ea Lorem aliquip incididunt consequat mollit cupidatat aute voluptate est",
    isCorrect: false,
  },
  {
    id: 94,
    answer:
      "exercitation reprehenderit consectetur id culpa id qui minim ullamco veniam sint amet nisi eu anim",
    isCorrect: false,
  },
  {
    id: 95,
    answer:
      "occaecat enim sint nulla ea cupidatat eu do qui tempor commodo minim consectetur dolore consectetur",
    isCorrect: false,
  },
  {
    id: 96,
    answer:
      "qui fugiat id sit anim ad occaecat anim velit reprehenderit ea labore esse sunt minim",
    isCorrect: false,
  },
  {
    id: 97,
    answer:
      "tempor fugiat magna irure occaecat sint ipsum nisi culpa adipisicing sint aliquip et do duis",
    isCorrect: false,
  },
  {
    id: 98,
    answer:
      "excepteur voluptate elit proident veniam ullamco mollit aute laborum non velit labore excepteur veniam do",
    isCorrect: false,
  },
  {
    id: 99,
    answer:
      "Lorem duis dolore ex fugiat eu veniam tempor eu nisi id id dolore sit adipisicing",
    isCorrect: false,
  },
];
export default wrongAnswers;
