const rightAnswers = [
  {
    ruleNumber: 0,
    answer: "What the Nagus wants, we acquire.",
    isCorrect: true,
    source: "ST video game: Star Trek Online",
    id: 0,
  },
  {
    ruleNumber: 1,
    answer: "Once you have their money... you never give it back.",
    isCorrect: true,
    source: 'DS9 episode: "The Nagus"',
    id: 1,
  },
  {
    ruleNumber: 2,
    answer: "The best deal is the one that brings the most profit.",
    isCorrect: true,
    source: "DS9 novel: The 34th Rule",
    id: 2,
  },
  {
    ruleNumber: 2,
    answer: "Money is everything.",
    isCorrect: true,
    source:
      'ST - Strange New Worlds 9 short story: "The Last Tree on Ferenginar: A Ferengi Fable From the Future"',
    id: 3,
  },
  {
    ruleNumber: 3,
    answer: "Never spend more for an acquisition than you have to.",
    isCorrect: true,
    source: 'DS9 episode: "The Maquis, Part II"',
    id: 4,
  },
  {
    ruleNumber: 4,
    answer: "Sedition and treason are always profitable.",
    isCorrect: true,
    source: "ST video game: Star Trek Online",
    id: 5,
  },
  {
    ruleNumber: 5,
    answer: "Always exaggerate your estimates.",
    isCorrect: true,
    source: "SCE eBook: Cold Fusion",
    id: 6,
  },
  {
    ruleNumber: 6,
    answer: "Never allow family to stand in the way of opportunity.",
    isCorrect: true,
    source: 'DS9 episode: "The Nagus"',
    id: 7,
  },
  {
    ruleNumber: 7,
    answer: "Keep your ears open.",
    isCorrect: true,
    source: '"In the Hands of the Prophets" (DS9 episode)',
    id: 8,
  },
  {
    ruleNumber: 8,
    answer: "Small print leads to large risk.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 9,
  },
  {
    ruleNumber: 9,
    answer: "Opportunity plus instinct equals profit.",
    isCorrect: true,
    source: '"The Storyteller" (DS9 episode)',
    id: 10,
  },
  {
    ruleNumber: 10,
    answer: "Greed is eternal.",
    isCorrect: true,
    source: '"Prophet Motive" (DS9 episode)',
    id: 11,
  },
  {
    ruleNumber: 13,
    answer: "Anything worth doing is worth doing for money.",
    isCorrect: true,
    source: "Legends of the Ferengi (DS9 novel)",
    id: 12,
  },
  {
    ruleNumber: 14,
    answer:
      "Sometimes the quickest way to find profits is to let them find you.",
    isCorrect: true,
    source: "Fortune of War (TTN novel)",
    id: 13,
  },
  {
    ruleNumber: 15,
    answer: "Dead men close no deals.",
    isCorrect: true,
    source: "Demons of Air and Darkness (DS9 novel)",
    id: 14,
  },
  {
    ruleNumber: 16,
    answer: "A deal is a deal... until a better one comes along.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 15,
  },
  {
    ruleNumber: 17,
    answer:
      "A contract is a contract is a contract... but only between Ferengi.",
    isCorrect: true,
    source: '"Body Parts" (DS9 episode)',
    id: 16,
  },
  {
    ruleNumber: 18,
    answer: "A Ferengi without profit is no Ferengi at all.",
    isCorrect: true,
    source: '"Heart of Stone" (DS9 episode)',
    id: 17,
  },
  {
    ruleNumber: 19,
    answer: "Satisfaction is not guaranteed.",
    isCorrect: true,
    source: "Legends of the Ferengi (DS9 novel)",
    id: 18,
  },
  {
    ruleNumber: 20,
    answer: "He who dives under the table today lives to profit tomorrow.",
    isCorrect: true,
    source: "Ferenginar: Satisfaction is Not Guaranteed (DS9 novella)",
    id: 19,
  },
  {
    ruleNumber: 21,
    answer: "Never place friendship above profit.",
    isCorrect: true,
    source: '"Rules of Acquisition" (DS9 episode)',
    id: 20,
  },
  {
    ruleNumber: 22,
    answer: "A wise man can hear profit in the wind.",
    isCorrect: true,
    source: '"Rules of Acquisition" (DS9 episode)',
    id: 21,
  },
  {
    ruleNumber: 23,
    answer:
      "Nothing is more important than your health... except for your money.",
    isCorrect: true,
    source: '"Acquisition" (ENT episode)',
    id: 22,
  },
  {
    ruleNumber: 27,
    answer: "There\u0027s nothing more dangerous than an honest businessman.",
    isCorrect: true,
    source: "Legends of the Ferengi (DS9 novel)",
    id: 23,
  },
  {
    ruleNumber: 29,
    answer: "What\u0027s in it for me?",
    isCorrect: true,
    source: "Highest Score (DS9 novel)",
    id: 24,
  },
  {
    ruleNumber: 30,
    answer: "Confidentiality equals profit.",
    isCorrect: true,
    source: "The Badlands, Part IV (DS9 novel)",
    id: 25,
  },
  {
    ruleNumber: 31,
    answer:
      "Never make fun of a Ferengi\u0027s mother. Insult something he cares about instead.",
    isCorrect: true,
    source: '"The Siege" (DS9 episode), Elite Force II',
    id: 26,
  },
  {
    ruleNumber: 33,
    answer: "It never hurts to suck up to the boss.",
    isCorrect: true,
    source: '"Rules of Acquisition" (DS9 episode)',
    id: 27,
  },
  {
    ruleNumber: 34,
    answer: "War is good for business.",
    isCorrect: true,
    source: '"Destiny" (DS9 episode); The 34th Rule (DS9 novel)',
    id: 28,
  },
  {
    ruleNumber: 35,
    answer: "Peace is good for business.",
    isCorrect: true,
    source: '"Destiny" (DS9 episode); The 34th Rule (DS9 novel)',
    id: 29,
  },
  {
    ruleNumber: 37,
    answer: "The early investor reaps the most interest.",
    isCorrect: true,
    source: "ST novella: Reservoir Ferengi",
    id: 30,
  },
  {
    ruleNumber: 39,
    answer: "Don\u0027t tell customers more than they need to know.",
    isCorrect: true,
    source: "Ascendance (DS9 novel)",
    id: 31,
  },
  {
    ruleNumber: 40,
    answer: "She can touch your lobes but never your latinum.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 32,
  },
  {
    ruleNumber: 41,
    answer: "Profit is its own reward.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 33,
  },
  {
    ruleNumber: 43,
    answer: "Feed your greed, but not enough to choke it.",
    isCorrect: true,
    source: "The Buried Age (TNG novel)",
    id: 34,
  },
  {
    ruleNumber: 44,
    answer: "Never confuse wisdom with luck.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 35,
  },
  {
    ruleNumber: 45,
    answer: "Expand or die.",
    isCorrect: true,
    source: '"Acquisition" (ENT episode)',
    id: 36,
  },
  {
    ruleNumber: 47,
    answer: "Don\u0027t trust a man wearing a better suit than your own.",
    isCorrect: true,
    source: '"Rivals" (DS9 episode)',
    id: 37,
  },
  {
    ruleNumber: 48,
    answer: "The bigger the smile, the sharper the knife.",
    isCorrect: true,
    source: '"Rules of Acquisition" (DS9 episode)',
    id: 38,
  },
  {
    ruleNumber: 52,
    answer: "Never ask when you can take.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 39,
  },
  {
    ruleNumber: 53,
    answer: "Never trust anybody taller than you.",
    isCorrect: true,
    source: "Mission Gamma: Twilight (DS9 novel)",
    id: 40,
  },
  {
    ruleNumber: 54,
    answer: "Rate divided by time equals profit.",
    isCorrect: true,
    source: "Raise the Dawn (Typhon Pact novel)",
    id: 41,
  },
  {
    ruleNumber: 55,
    answer: "Take joy from profit, and profit from joy.",
    isCorrect: true,
    source: "Worlds of Deep Space Nine: Bajor: Fragments and Omens (DS9 novel)",
    id: 42,
  },
  {
    ruleNumber: 57,
    answer: "Good customers are as rare as latinum—treasure them.",
    isCorrect: true,
    source: '"Armageddon Game" (DS9 episode)',
    id: 43,
  },
  {
    ruleNumber: 58,
    answer: "There is no substitute for success.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 44,
  },
  {
    ruleNumber: 59,
    answer: "Free advice is seldom cheap.",
    isCorrect: true,
    source: '"Rules of Acquisition" (DS9 episode)',
    id: 45,
  },
  {
    ruleNumber: 60,
    answer: "Keep your lies consistent.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 46,
  },
  {
    ruleNumber: 62,
    answer: "The riskier the road, the greater the profit.",
    isCorrect: true,
    source: '"Rules of Acquisition" (DS9 episode)',
    id: 47,
  },
  {
    ruleNumber: 63,
    answer: "Work is the best therapy-at least for your employees.",
    isCorrect: true,
    source: '"Over a Torrent Sea" (TTN novel)',
    id: 48,
  },
  {
    ruleNumber: 65,
    answer: "Win or lose, there\u0027s always Hupyrian beetle snuff.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 49,
  },
  {
    ruleNumber: 66,
    answer: "Someone\u0027s always got bigger ears.",
    isCorrect: true,
    source: "What Happens Now (Star Trek: The Last Generation #3, TNG comic)",
    id: 50,
  },
  {
    ruleNumber: 68,
    answer: "Risk doesn\u0027t always equal reward.",
    isCorrect: true,
    source: "Star Trek Online",
    id: 51,
  },
  {
    ruleNumber: 69,
    answer: "Ferengi are not responsible for the stupidity of other races.",
    isCorrect: true,
    source: "Balance of Power (TNG novel)",
    id: 52,
  },
  {
    ruleNumber: 74,
    answer: "Knowledge equals profit.",
    isCorrect: true,
    source: '"Inside Man" (VOY episode)',
    id: 53,
  },
  {
    ruleNumber: 75,
    answer: "Home is where the heart is... but the stars are made of latinum.",
    isCorrect: true,
    source: '"Civil Defense" (DS9 episode)',
    id: 54,
  },
  {
    ruleNumber: 76,
    answer:
      "Every once in a while, declare peace. It confuses the hell out of your enemies.",
    isCorrect: true,
    source: '"The Homecoming" (DS9 episode)',
    id: 55,
  },
  {
    ruleNumber: 77,
    answer: "If you break it, I\u0027ll charge you for it!",
    isCorrect: true,
    source: "Star Trek Online",
    id: 56,
  },
  {
    ruleNumber: 79,
    answer: "Beware of the Vulcan greed for knowledge.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 57,
  },
  {
    ruleNumber: 82,
    answer: "The flimsier the product, the higher the price.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 58,
  },
  {
    ruleNumber: 85,
    answer: "Never let the competition know what you\u0027re thinking.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 59,
  },
  {
    ruleNumber: 87,
    answer:
      "Learn the customer\u0027s weaknesses, so that you can better take advantage of him.",
    isCorrect: true,
    source: "Highest Score (DS9 novel)",
    id: 60,
  },
  {
    ruleNumber: 88,
    answer: "It ain\u0027t over \u0027til its over.",
    isCorrect: true,
    source: "Ferenginar: Satisfaction is Not Guaranteed (DS9 novella)",
    id: 61,
  },
  {
    ruleNumber: 88,
    answer: "Vengeance will cost you everything.",
    isCorrect: true,
    source: "The Poisoned Chalice (DS9 novel)",
    id: 62,
  },
  {
    ruleNumber: 89,
    answer:
      "Ask not what your profits can do for you, but what you can do for your profits.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 63,
  },
  {
    ruleNumber: 89,
    answer:
      "It is better to lose some profit and live than lose all profit and die.",
    isCorrect: true,
    source: '"Best Tools Available" (DS9 short story)',
    id: 64,
  },
  {
    ruleNumber: 92,
    answer: "There are many paths to profit.",
    isCorrect: true,
    source: "Highest Score (DS9 novel)",
    id: 65,
  },
  {
    ruleNumber: 94,
    answer: "Females and finances don\u0027t mix.",
    isCorrect: true,
    source: '"Ferengi Love Songs" (DS9 episode)',
    id: 66,
  },
  {
    ruleNumber: 95,
    answer: "Expand or die.",
    isCorrect: true,
    source: '"False Profits" (VOY episode)',
    id: 67,
  },
  {
    ruleNumber: 97,
    answer: "Enough... is never enough.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 68,
  },
  {
    ruleNumber: 98,
    answer: "Every man has his price.",
    isCorrect: true,
    source: '"In the Pale Moonlight" (DS9 episode)',
    id: 69,
  },
  {
    ruleNumber: 98,
    answer: "If you can\u0027t take it with you, don\u0027t go.",
    isCorrect: true,
    source: "I, Q (DS9 novel)",
    id: 70,
  },
  {
    ruleNumber: 99,
    answer: "Trust is the biggest liability of all.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 71,
  },
  {
    ruleNumber: 100,
    answer: "When it\u0027s good for business, tell the truth.",
    isCorrect: true,
    source: "Ascendance (DS9 novel)",
    id: 72,
  },
  {
    ruleNumber: 101,
    answer: "Profit trumps emotion.",
    isCorrect: true,
    source: "The Long Mirage (DS9 novel)",
    id: 73,
  },
  {
    ruleNumber: 102,
    answer: "Nature decays, but latinum lasts forever.",
    isCorrect: true,
    source: '"The Jem\u0027Hadar" (DS9 episode)',
    id: 74,
  },
  {
    ruleNumber: 103,
    answer: "Sleep can interfere with opportunity.",
    isCorrect: true,
    source: '"Rules of Acquisition" (DS9 episode)',
    id: 75,
  },
  {
    ruleNumber: 104,
    answer: "Faith moves mountains... of inventory.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 76,
  },
  {
    ruleNumber: 106,
    answer: "There is no honor in poverty.",
    isCorrect: true,
    source: "Sacraments of Fire (DS9 novel)",
    id: 77,
  },
  {
    ruleNumber: 108,
    answer: "Hope doesn\u0027t keep the lights on.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 78,
  },
  {
    ruleNumber: 108,
    answer: "A woman wearing clothes is like a man without any profits.",
    isCorrect: true,
    source: "DS9 Novel",
    id: 79,
  },
  {
    ruleNumber: 109,
    answer: "Dignity and an empty sack is worth the sack.",
    isCorrect: true,
    source: '"Rivals" (DS9 episode)',
    id: 80,
  },
  {
    ruleNumber: 110,
    answer: "Exploitation begins at home.",
    isCorrect: true,
    source: '"False Profits" (VOY episode)',
    id: 81,
  },
  {
    ruleNumber: 111,
    answer: "Treat people in your debt like family... exploit them.",
    isCorrect: true,
    source: '"Past Tense, Part I" (DS9 episode)',
    id: 82,
  },
  {
    ruleNumber: 112,
    answer: "Never have sex with the boss\u0027 sister.",
    isCorrect: true,
    source: '"Playing God" (DS9 episode)',
    id: 83,
  },
  {
    ruleNumber: 113,
    answer: "Always have sex with the boss.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 84,
  },
  {
    ruleNumber: 117,
    answer: "You can\u0027t free a fish from water.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 85,
  },
  {
    ruleNumber: 121,
    answer: "Everything is for sale, even friendship.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 86,
  },
  {
    ruleNumber: 122,
    answer: "Never sleep with the bosses sister.",
    isCorrect: true,
    source: '"Playing God" (DS9 episode)',
    id: 87,
  },
  {
    ruleNumber: 123,
    answer: "Even a blind man can recognize the glow of Latinum.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 88,
  },
  {
    ruleNumber: 125,
    answer: "You can\u0027t make a deal if you\u0027re dead.",
    isCorrect: true,
    source: '"The Siege of AR-558" (DS9 episode)',
    id: 89,
  },
  {
    ruleNumber: 135,
    answer: "Listen to secrets, but never repeat them.",
    isCorrect: true,
    source: "Ascendance (DS9 novel)",
    id: 90,
  },
  {
    ruleNumber: 139,
    answer: "Wives serve, brothers inherit.",
    isCorrect: true,
    source: '"Necessary Evil" (DS9 episode)',
    id: 91,
  },
  {
    ruleNumber: 141,
    answer: "Only fools pay retail.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 92,
  },
  {
    ruleNumber: 144,
    answer:
      "There\u0027s nothing wrong with charity... as long as it winds up in your pocket.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 93,
  },
  {
    ruleNumber: 147,
    answer: "People love the bartender.",
    isCorrect: true,
    source: "Fearful Symmetry (DS9 novel)",
    id: 94,
  },
  {
    ruleNumber: 151,
    answer: "Even when you\u0027re a customer, sell yourself.",
    isCorrect: true,
    source: "The Long Mirage (DS9 novel)",
    id: 95,
  },
  {
    ruleNumber: 153,
    answer: "Sell the sizzle, not the steak.",
    isCorrect: true,
    source: '"Deep Space Mine" (DS9 comic)',
    id: 96,
  },
  {
    ruleNumber: 162,
    answer: "Even in the worst of times someone turns a profit.",
    isCorrect: true,
    source:
      "The Ferengi Rules of Acquisition (DS9 reference book), DS9 video game: Harbinger",
    id: 97,
  },
  {
    ruleNumber: 168,
    answer: "Whisper your way to success.",
    isCorrect: true,
    source: '"Treachery, Faith, and the Great River" (DS9 episode)',
    id: 98,
  },
  {
    ruleNumber: 177,
    answer: "Know your enemies... but do business with them always.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 99,
  },
  {
    ruleNumber: 181,
    answer: "Not even dishonesty can tarnish the shine of profit.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 100,
  },
  {
    ruleNumber: 183,
    answer: "When life hands you ungaberries, make detergent.",
    isCorrect: true,
    source: "Hollow Men (DS9 novel)",
    id: 101,
  },
  {
    ruleNumber: 184,
    answer:
      "A Ferengi waits to bid until his opponents have exhausted themselves.",
    isCorrect: true,
    source: "Balance of Power (TNG novel)",
    id: 102,
  },
  {
    ruleNumber: 188,
    answer: "Not even dishonesty can tarnish the shine of profit.",
    isCorrect: true,
    source: "Star Trek Online",
    id: 103,
  },
  {
    ruleNumber: 189,
    answer: "Let others keep their reputation. You keep their money.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 104,
  },
  {
    ruleNumber: 190,
    answer: "Hear all, trust nothing.",
    isCorrect: true,
    source: 'DS9 episode: "Call to Arms"',
    id: 105,
  },
  {
    ruleNumber: 192,
    answer:
      "Never cheat a Klingon... unless you\u0027re sure you can get away with it.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 106,
  },
  {
    ruleNumber: 193,
    answer: "Trouble comes in threes.",
    isCorrect: true,
    source: "Star Trek Online",
    id: 107,
  },
  {
    ruleNumber: 193,
    answer: "It\u0027s never too late to fire the staff.",
    isCorrect: true,
    source: "Cathedral (DS9 novel)",
    id: 108,
  },
  {
    ruleNumber: 194,
    answer:
      "It\u0027s always good business to know about new customers before they walk in your door.",
    isCorrect: true,
    source: '"Whispers" (DS9 episode)',
    id: 109,
  },
  {
    ruleNumber: 199,
    answer: "Location, location, location.",
    isCorrect: true,
    source: "The Soul Key (DS9 novel)",
    id: 110,
  },
  {
    ruleNumber: 200,
    answer: "A Ferengi chooses no side but his own.",
    isCorrect: true,
    source: "(DS9 novel: Ferenginar: Satisfaction is Not Guaranteed)",
    id: 111,
  },
  {
    ruleNumber: 202,
    answer: "The justification for profit is profit.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 112,
  },
  {
    ruleNumber: 203,
    answer:
      "New customers are like razor-toothed gree worms. They can be succulent, but sometimes they bite back.",
    isCorrect: true,
    source: 'DS9 episode: "Little Green Men"',
    id: 113,
  },
  {
    ruleNumber: 208,
    answer:
      "Sometimes, the only thing more dangerous than a question is an answer.",
    isCorrect: true,
    source: 'DS9 episode: "Ferengi Love Songs"',
    id: 114,
  },
  {
    ruleNumber: 211,
    answer:
      "Employees are the rungs on the ladder of success. Don\u0027t hesitate to step on them.",
    isCorrect: true,
    source: 'DS9 episode: "Bar Association"',
    id: 115,
  },
  {
    ruleNumber: 212,
    answer: "A good lie is easier to believe than the truth.",
    isCorrect: true,
    source: "Star Trek Online",
    id: 116,
  },
  {
    ruleNumber: 214,
    answer: "Never begin a negotiation on an empty stomach.",
    isCorrect: true,
    source: 'DS9 episode: "The Maquis, Part I"',
    id: 117,
  },
  {
    ruleNumber: 216,
    answer: "Never gamble with a telepath.",
    isCorrect: true,
    source: "DS9 novel: The Laertian Gamble",
    id: 118,
  },
  {
    ruleNumber: 217,
    answer: "Always know what you\u0027re buying.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 119,
  },
  {
    ruleNumber: 217,
    answer: "You can\u0027t free a fish from water.",
    isCorrect: true,
    source: '"Past Tense, Part I" (DS9 episode)',
    id: 120,
  },
  {
    ruleNumber: 218,
    answer: "Sometimes what you get free costs entirely too much.",
    isCorrect: true,
    source: "Baby on Board (DS9 Malibu Comics)",
    id: 121,
  },
  {
    ruleNumber: 219,
    answer: "Possession is eleven-tenths of the law!",
    isCorrect: true,
    source: "TNG novel: Balance of Power",
    id: 122,
  },
  {
    ruleNumber: 223,
    answer: "Beware the man who doesn\u0027t take time for Oo-mox.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 123,
  },
  {
    ruleNumber: 227,
    answer:
      "If that\u0027s what\u0027s written, then that\u0027s what\u0027s written.",
    isCorrect: true,
    source: "Star Trek Online",
    id: 124,
  },
  {
    ruleNumber: 229,
    answer: "Latinum lasts longer than lust.",
    isCorrect: true,
    source: 'DS9 episode: "Ferengi Love Songs"',
    id: 125,
  },
  {
    ruleNumber: 235,
    answer: "Duck; death is tall.",
    isCorrect: true,
    source: "Mission Gamma: Twilight (DS9 novel)",
    id: 126,
  },
  {
    ruleNumber: 236,
    answer: "You can\u0027t buy fate.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 127,
  },
  {
    ruleNumber: 239,
    answer: "Never be afraid to mislabel a product.",
    isCorrect: true,
    source: 'DS9 episode: "Body Parts"',
    id: 128,
  },
  {
    ruleNumber: 240,
    answer: "Time, like latinum, is a highly limited commodity.",
    isCorrect: true,
    source: "Star Trek Online",
    id: 129,
  },
  {
    ruleNumber: 242,
    answer: "More is good... all is better.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 130,
  },
  {
    ruleNumber: 243,
    answer: "Always leave yourself an out.",
    isCorrect: true,
    source: "Sacraments of Fire (DS9 novel)",
    id: 131,
  },
  {
    ruleNumber: 248,
    answer:
      "The definition of insanity is trying the same failed scheme and expecting different results.",
    isCorrect: true,
    source:
      "Department of Temporal Investigations 3: Shield of the Gods (novel) pg 11",
    id: 132,
  },
  {
    ruleNumber: 255,
    answer: "A wife is luxury... a smart accountant a neccessity.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 133,
  },
  {
    ruleNumber: 257,
    answer:
      "When the messenger comes to appropriate your profits, kill the messenger.",
    isCorrect: true,
    source: "False Profits (VOY episode)",
    id: 134,
  },
  {
    ruleNumber: 261,
    answer: "A wealthy man can afford anything except a conscience.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 135,
  },
  {
    ruleNumber: 263,
    answer: "Never allow doubt to tarnish your lust for latinum.",
    isCorrect: true,
    source: 'DS9 episode: "Bar Association"',
    id: 136,
  },
  {
    ruleNumber: 266,
    answer: "When in doubt, lie.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 137,
  },
  {
    ruleNumber: 267,
    answer: "If you believe it, they believe it.",
    isCorrect: true,
    source: "Taking Wing (DS9 novel)",
    id: 138,
  },
  {
    ruleNumber: 272,
    answer: "Always inspect the merchandise before making a deal.",
    isCorrect: true,
    source: "Star Trek Online",
    id: 139,
  },
  {
    ruleNumber: 280,
    answer: "If it ain\u0027t broke, don\u0027t fix it.",
    isCorrect: true,
    source: "DS9 novel: Ferenginar: Satisfaction is Not Guaranteed)",
    id: 140,
  },
  {
    ruleNumber: 284,
    answer: "Deep down, everyone\u0027s a Ferengi.",
    isCorrect: true,
    source: "The Ferengi Rules of Acquisition (DS9 reference book)",
    id: 141,
  },
  {
    ruleNumber: 285,
    answer: "No good deed ever goes unpunished.",
    isCorrect: true,
    source: 'DS9 episode: "The Collaborator"',
    id: 142,
  },
  {
    ruleNumber: 286,
    answer: "When Morn leaves, it\u0027s all over.",
    isCorrect: true,
    source: 'DS9 Episode: "The House of Quark"',
    id: 143,
  },
  {
    ruleNumber: 287,
    answer: "Always get somebody else to do the lifting.",
    isCorrect: true,
    source: '"N-Vector" (DS9 comic)',
    id: 144,
  },
  {
    ruleNumber: 288,
    answer: "Never get into anything that you can\u0027t get out of.",
    isCorrect: true,
    source: '"N-Vector" (DS9 comic)',
    id: 145,
  },
  {
    ruleNumber: 289,
    answer: "A man is only worth the sum of his possessions.",
    isCorrect: true,
    source: '"Acquisition" (ENT episode)',
    id: 146,
  },
  {
    ruleNumber: 290,
    answer: "An angry man is an enemy, and a satisfied man is an ally.",
    isCorrect: true,
    source: "Antimatter (DS9 novel)",
    id: 147,
  },
  {
    ruleNumber: 291,
    answer:
      "The less employees know about the cash flow, the smaller the share they can demand.",
    isCorrect: true,
    source: "Betrayal (DS9 novel)",
    id: 148,
  },
  {
    ruleNumber: 292,
    answer: "Only a fool passes up a business opportunity.",
    isCorrect: true,
    source: '"Elite Force II"',
    id: 149,
  },
  {
    ruleNumber: 293,
    answer: "The more time they take deciding, the more money they will spend.",
    isCorrect: true,
    source: "Stowaways (DS9 novel)",
    id: 150,
  },
  {
    ruleNumber: 294,
    answer: "A bargain usually isn\u0027t.",
    isCorrect: true,
    source: "The Pet (DS9 novel)",
    id: 151,
  },
  {
    ruleNumber: 299,
    answer:
      "Whenever you exploit someone, it never hurts to thank them...That way it\u0027s easier to exploit them the next time.",
    isCorrect: true,
    source: 'Star Trek Voyager "False Profits"',
    id: 152,
  },
  {
    ruleNumber: 431,
    answer: "When the shooting starts, let the mercenaries handle it!",
    isCorrect: true,
    source: 'STO mission: "Echoes of Light"',
    id: 153,
  },
];
export default rightAnswers;
