const wrongAnswers = [
  {
    id: 500,
    answer:
      "Love is a distraction. And a distracted policeman is an opportunity.",
    isCorrect: false,
  },
  {
    id: 501,
    answer: "No one ever went broke selling weapons.",
    isCorrect: false,
  },
  {
    id: 502,
    answer: "It's good to want things.",
    isCorrect: false,
  },
  {
    id: 503,
    answer: "One man's priceless is another man's worthless.",
    isCorrect: false,
  },
  {
    id: 504,
    answer:
      "Never trust ale from a god-fearing people, or a Starfleet commander that has one of your relatives in jail.",
    isCorrect: false,
  },
  {
    id: 505,
    answer:
      "Every once in a while, declare peace. It confuses the hell out of your enemies.",
    isCorrect: false,
  },
  {
    id: 506,
    answer: "It never hurts to suck up to the boss.",
    isCorrect: false,
  },
  {
    id: 507,
    answer: "Women are the enemy.",
    isCorrect: false,
  },
  {
    id: 508,
    answer: "Strike a blow against exploitation!",
    isCorrect: false,
  },
  {
    id: 509,
    answer: "Food! Dabo! Drinks! Money! Hand, mine - give!",
    isCorrect: false,
  },
  {
    id: 510,
    answer:
      "cillum eu magna sit proident nulla cupidatat ullamco eu aute cillum excepteur sit consectetur quis",
    isCorrect: false,
  },
  {
    id: 511,
    answer:
      "aute ea est in dolor ad aliqua incididunt est adipisicing ad dolor anim amet proident",
    isCorrect: false,
  },
  {
    id: 512,
    answer:
      "ea cillum irure incididunt ullamco elit sunt velit culpa Lorem eu commodo nisi proident minim",
    isCorrect: false,
  },
  {
    id: 513,
    answer:
      "cupidatat irure do id ipsum duis sit enim nostrud qui fugiat ipsum nulla aute ea",
    isCorrect: false,
  },
  {
    id: 514,
    answer:
      "aliquip ex veniam exercitation mollit magna nulla et ullamco commodo aliquip Lorem aliquip consectetur sit",
    isCorrect: false,
  },
  {
    id: 515,
    answer:
      "ipsum qui tempor officia ad nisi anim dolor est cupidatat culpa ex minim mollit proident",
    isCorrect: false,
  },
  {
    id: 516,
    answer:
      "deserunt sint adipisicing aute qui exercitation enim Lorem commodo fugiat ea sint ea officia id",
    isCorrect: false,
  },
  {
    id: 517,
    answer:
      "laborum eu adipisicing est ea officia deserunt occaecat do aute aliqua qui sit nulla dolore",
    isCorrect: false,
  },
  {
    id: 518,
    answer:
      "ullamco quis deserunt excepteur sint enim eiusmod irure eiusmod labore nisi voluptate magna irure veniam",
    isCorrect: false,
  },
  {
    id: 519,
    answer:
      "eiusmod occaecat minim veniam aute dolore aute fugiat fugiat esse excepteur proident velit adipisicing quis",
    isCorrect: false,
  },
  {
    id: 520,
    answer:
      "proident in ad laboris ut consequat cillum culpa pariatur magna ex proident minim proident nulla",
    isCorrect: false,
  },
  {
    id: 521,
    answer:
      "dolore nisi quis amet nostrud esse reprehenderit quis esse ipsum et id ullamco voluptate qui",
    isCorrect: false,
  },
  {
    id: 522,
    answer:
      "officia magna reprehenderit proident qui ex aute cillum voluptate ut est velit pariatur incididunt mollit",
    isCorrect: false,
  },
  {
    id: 523,
    answer:
      "magna ex commodo quis velit minim dolore est incididunt aute veniam labore ad occaecat sint",
    isCorrect: false,
  },
  {
    id: 524,
    answer:
      "ex elit sint occaecat labore Lorem amet esse eiusmod aliqua deserunt laborum magna dolor ex",
    isCorrect: false,
  },
  {
    id: 525,
    answer:
      "Lorem culpa adipisicing proident cillum tempor reprehenderit tempor nostrud tempor eu dolore pariatur sit sint",
    isCorrect: false,
  },
  {
    id: 526,
    answer:
      "aute et commodo in esse voluptate commodo laboris dolor ea veniam irure elit reprehenderit reprehenderit",
    isCorrect: false,
  },
  {
    id: 527,
    answer:
      "mollit irure minim veniam id laborum adipisicing cupidatat laboris ullamco eiusmod Lorem id fugiat consequat",
    isCorrect: false,
  },
  {
    id: 528,
    answer:
      "proident consequat amet dolor consectetur dolore consequat dolore occaecat adipisicing cupidatat id aliquip enim ut",
    isCorrect: false,
  },
  {
    id: 529,
    answer:
      "qui velit sint proident laborum est anim quis in id esse veniam officia irure sit",
    isCorrect: false,
  },
  {
    id: 530,
    answer:
      "laboris labore reprehenderit sint fugiat ad aute enim elit labore duis elit culpa amet nisi",
    isCorrect: false,
  },
  {
    id: 531,
    answer:
      "commodo ullamco occaecat quis et ex quis ex sint adipisicing aute qui incididunt occaecat nostrud",
    isCorrect: false,
  },
  {
    id: 532,
    answer:
      "voluptate enim non irure ullamco quis enim proident culpa dolore est minim velit nisi esse",
    isCorrect: false,
  },
  {
    id: 533,
    answer:
      "esse est minim laboris Lorem exercitation irure consequat dolor et fugiat qui magna aute anim",
    isCorrect: false,
  },
  {
    id: 534,
    answer:
      "deserunt aliquip est sint consectetur consectetur esse occaecat eiusmod mollit labore anim do ullamco exercitation",
    isCorrect: false,
  },
  {
    id: 535,
    answer:
      "nulla eiusmod excepteur labore occaecat incididunt pariatur amet cupidatat sint dolor proident incididunt anim aute",
    isCorrect: false,
  },
  {
    id: 536,
    answer:
      "incididunt quis officia laboris labore duis do nisi exercitation proident eu qui adipisicing et est",
    isCorrect: false,
  },
  {
    id: 537,
    answer:
      "eu ullamco occaecat velit duis esse mollit sint esse esse commodo sit culpa proident labore",
    isCorrect: false,
  },
  {
    id: 538,
    answer:
      "laborum nostrud eu sint non veniam duis occaecat esse quis officia excepteur eiusmod nisi in",
    isCorrect: false,
  },
  {
    id: 539,
    answer:
      "incididunt qui veniam est exercitation reprehenderit enim aliqua ea cillum cupidatat exercitation nostrud sunt laboris",
    isCorrect: false,
  },
  {
    id: 540,
    answer:
      "eiusmod ea excepteur aute labore pariatur pariatur do veniam tempor sunt sit laborum dolor aliqua",
    isCorrect: false,
  },
  {
    id: 541,
    answer:
      "commodo officia consectetur non adipisicing adipisicing elit velit laboris do Lorem duis sunt laboris qui",
    isCorrect: false,
  },
  {
    id: 542,
    answer:
      "esse minim consectetur exercitation in minim sit occaecat officia culpa proident nisi irure nisi laboris",
    isCorrect: false,
  },
  {
    id: 543,
    answer:
      "pariatur consequat nisi do commodo mollit do do amet tempor est cupidatat qui id ad",
    isCorrect: false,
  },
  {
    id: 544,
    answer:
      "qui sit proident ullamco ipsum eiusmod adipisicing sunt ex incididunt amet qui et elit cillum",
    isCorrect: false,
  },
  {
    id: 545,
    answer:
      "incididunt pariatur dolor adipisicing ex exercitation et amet exercitation do exercitation veniam cillum ipsum et",
    isCorrect: false,
  },
  {
    id: 546,
    answer:
      "velit sit laborum fugiat proident et est aliquip commodo amet fugiat mollit sit commodo irure",
    isCorrect: false,
  },
];
export default wrongAnswers;
