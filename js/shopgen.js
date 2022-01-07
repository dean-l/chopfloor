$(document).ready(function(){
    generate();
    
});

var shopNameList = ["magic", "armour", "weapon", "textile"];
var mShopNameList1 = ["Abracapothecary", "Abrakadabra", "Ace High", "Angels", "Demons", "Arcane Affinities", "Arcane Treasures", "Arcanes", "Augury and Alchemy", "Bona Fida", "Botanica Magica", "Celestial Spells", "Cures and Curses", "Darkness and Lightness", "Demons and Daemons", "Dispel and That Spell", "Doves and Pigeons", "Dragonfire", "Eagle's Eye", "Embers and Ashes", "Faerie Fire", "Fantasma", "Fortunes and Luck", "Genie's Lantern", "Genius in a Bottle", "Ghosts 'n Stuff", "Ghosts and Phantoms", "Gobl-Inn", "Gorgons and Gremlins", "Griffins and Gargoyles", "Heaven's Door", "Hell's Gate", "Herbs and Lotions", "Hexes and Jinxes", "Hocus Pocus", "Hocusses and Pocusses", "Horoscopes and Heroscopes", "Illuminations", "Invisibility and Invincibility", "Ki and Chi", "Nostrum Arcade", "Omnipharmacon", "Orbs and Talismans", "Palindrome", "Pandora", "Pandora's Box", "Pharmagician", "Pixie Dust", "Polymorph", "Portable Potents", "Potions and Cauldrons", "Potions and Lotions", "Rainbows and Sunshine", "Runes and Relics", "Runes and Rods", "Shades and Shadows", "Shifted Polarity", "Siphons and Souls", "Smoke and Mirrors", "Solutions", "Solutions and Answers", "Spellbound", "Spellunking", "Spheres and Orbs", "Sprites and Spirits", "Staves and Stoves", "Sticks and Stones", "Taboos and Voodoos", "Telekinesis and Telepathy", " Acolyte", " Alchemist", " Animorph", " Arcane Barrier", " Arcane Gateway", " Arcane Scroll", " Archangel", " Banished Beast", " Banshee's Scream", " Belly of the Beast", " Black Couldron", " Blink", " Blissful Blizzard", " Blood Pact", " Bloodstone", " Blue Moon", " Book of Riddles", " Bound Tome", " Bramble Staff", " Broken Vial", " Cat In The Hat", " Champion's Scroll", " Charm", " Cloak and Dagger", " Cloak of Invisibility", " Companion", " Cone of Cold", " Conjured Refreshment", " Counterspell", " Crystal Ball", " Dark Flame", " Daydream", " Decoy", " Devil's Key", " Dew Drop", " Double Whammy", " Dragon Aspect", " Dragon Dungeon", " Dragon Seal", " Dragon Slayer", " Dragon's Breath", " Dragonhide", " Dusty Tome", " Dwarven Beard", " Ectoplasm", " Elder Scroll", " Elemental Fury", " Equinox", " Ethereal", " Evil Eye", " Eye of Newt", " Falling Feather", " Familiar", " Faulty Dice", " Fel Steed", " Fifth Element", " Final Form", " Fireball", " Flying Carpet", " Force Field", " Frosty Finger", " Giant Gnome", " Golden Lead", " Grey Beard", " Halberdashery", " Holy Grail", " Hourglass", " Illusion", " Last Spell", " Laughing Leprichaun", " Laughing Skull", " Life Drain", " Little Bunyip", " Little Pixie", " Living Statue", " Magic Box", " Magic Dart", " Magnet", " Minotaur Maze", " Mirage", " Mirror Image", " Mistletoe", " Mithril Mantle", " Mystery", " Mystic Mythic", " Nether and Void", " Nightmare", " Ninth Life", " Pegasus", " Pestle and Mortar", " Philosopher's Stone", " Phoenix Feather", " Plane Walker", " Portal", " Prophecy", " Quiet Ritual", " Raven's Message", " Raven's Quill", " Red Slippers", " Revelation", " Ring of Life", " Risen Phoenix", " Royal Frog", " Rune", " Second Chance", " Shooting Star", " Silver Bullet", " Silver Spoon", " Siphon", " Siren's Song", " Skeleton Closet", " Sleeping Owl", " Sleight of Hand", " Soothsayer", " Sorcerer's Source", " Soul Apothecary", " Soulstone", " Spell Counter", " Sphere", " Spirit Walk", " Stone in the Sword", " Summoned Goods", " Summoning Scroll", " Sword in the Stone", " Talisman", " Tenth Ring", " Third Wish", " Time Warp", " Tinkered Tiara", " Trick Sleeve", " Twilight Zone", " Twinkle Star", " Twisting Nether", " Unicorn", " Unicorn's Horn", " Vision", " Voodoo Doll", " Wand's Want", " Water Elemental", " White Beard", " White Dove", " Wishbone", " Witch's Nose", " Wooden Stake", " Wyrm and the Worm", "Tinctures 'n Tonics", "Tomes and Tiaras", "Trident Trinity", "Trinkets and Tronkets", "Triton's Tident", "Wizard's Mail"];
var mShopNameList2 = ["Adorable", "Affordable", "Aggressive", "Amazing", "Amusing", "Ancient", "Angry", "Antique", "Awesome", "Awkward", "Baby", "Bathing", "Big", "Bigger", "Bitter", "Ebon", "Bleeding", "Blind", "Blushing", "Brass", "Bright", "Brilliant", "Bronze", "Brown", "Cheap", "Cheating", "Cheering", "Clean", "Clever", "Common", "Corrupt", "Corrupted", "Crafty", "Crazy", "Creeping", "Cuddly", "Curly", "Dancing", "Dapper", "Dark", "Dirty", "Dizzy", "Dreaming", "Eager", "Early", "Elder", "Elegant", "Elementary", "Evil", "Exalted", "Expert", "Fading", "Fair", "Fake", "False", "Famous", "Fancy", "Fantastic", "Fast", "Flimsy", "Fluffy", "Forsaken", "Frozen", "Gentle", "Glass", "Glowing", "Golden", "Graceful", "Greedy", "Green", "Grim", "Grumpy", "Hairy", "Happy", "Haunting", "Heavy", "Hidden", "Huge", "Humble", "Hungry", "Invincible", "Invisible", "Iron", "Jolly", "Kind", "Large", "Last", "Laughing", "Lazy", "Light", "Little", "Lonely", "Loving", "Lucky", "Mad", "Majestic", "Mellow", "Merry", "Naughty", "Needy", "New", "Nutty", "Old", "Phony", "Plain", "Pretty", "Quick", "Quiet", "Rapid", "Rare", "Royal", "Scary", "Screaming", "Second", "Secret", "Serene", "Shady", "Silly", "Silver", "Sleeping", "Small", "Sneaky", "Steel", "Storm", "Striped", "Tall", "Thunder", "Tiny", "Tired", "Weeping", "Wicked", "Wild", "Wise"];
var mShopNameList3 = ["Amulet", "Angel", "Artifact", "Banshee", "Basilisk", "Beacon", "Bigfoot", "Blade", "Book", "Boots", "Branch", "Bunyip", "Cauldron", "Centaur", "Cerberus", "Chimera", "Chupacabra", "Cloak", "Cockatrice", "Codex", "Crown", "Cupid", "Cyclops", "Demon", "Dragon", "Draugr", "Dryad", "Dwarf", "Elemental", "Elf", "Ent", "Fairy", "Faun", "Feathered Serpent", "Focus", "Gargoyle", "Gauntlet", "Genie", "Ghost", "Giant", "Gnome", "Gorgon (Medussa)", "Gremlin", "Griffin", "Grim Reaper", "Hag", "Harpy", "Hellhound", "Hippocampus", "Hippogriff", "Hobbit", "Hobgoblin", "Hourglass", "Human", "Hydra", "Imp", "Incubus/Succubus", "Jackalope", "Key", "Kobold", "Kraken", "Leprechaun", "Lich", "Lute", "Manticore", "Marker", "Mermaid", "Minotaur", "Mummy", "Naga", "Nymph", "Ogre", "Orb", "Pegasus", "Phoenix", "Pixie", "Poltergeist", "Quill", "Ring", "Robe", "Roc", "Rune", "Sandman", "Sasquatch", "Satyr", "Scepter", "Scroll", "Seal", "Shapeshifter", "Shield", "Siren", "Skeleton", "Skull", "Sphere", "Sphinx", "Spriggan", "Sprite", "Staff", "Stone", "Sword", "Talisman", "Tiara", "Tome", "Troll", "Unicorn", "Valkyrie", "Vampire", "Vial", "Wand", "Wendigo", "Werecat", "Werewolf", "White Stag", "Winged Lion", "Winged Unicorn", "Wisp", "Wolpertinger", "World Turtle", "Wraith", "Wyvern", "Yeti", "Zombie"];
var aShopNameList = ["Armoursmith Name 1", "Armoursmith Name 2", "Armoursmith Name 3", "Armoursmith Name 4", "Armoursmith Name 5", "Armoursmith Name 6", "Armoursmith Name 7", "Armoursmith Name 8"];
var wShopNameList = ["A Steel","Adore Ore","Anvil Crafts","Anvil Mastery","Anvil Works","Anything Metal","Arms of Steel","Ball of Fire","Balls of Fire","Baptisms of Fire","Bars of Steel","Beat the Heat","Beats of Fire","Belly Fires","Between Hammer and Anvil","Blackstone Forge","Blazing Blacksmiths","Blazing Glory","Blazing Trails","Bloodbath & Beyond","Blue Blazes","Blue Steel","Breathing Fire","By Hammer and Hand","By Hammer and Tongs","Clamor Glamor","Clamorize","Clink 'n Clank","Clobbering Time","Curious Forge","Dame of Flame","Fame of Flame","Fire & Brimstone","Fire It Up","Flame of Fame","Flux Crux","Flux Deluxe","Forge and Fabricate","Forge away","Forging Ahead","Forging Matters","George's Forge","Gorge 'n Forge","Hammer 'n Anvil","Hammer Clamor","Hammer Down","Hammer Glamor","Hammer Home","Hammer It Hot","Hammer Out","Hammer Time","Hammer and Metal","Hammer and Tongs","Hammer in Hand","He Who Smelt It","Heat Up","Heat of the Moment","Heavy Metal Works","Heavy Metals","Hot Hammer","Hot Hot Hot","Hot Iron","Hot Rod","Hot Spot","Hot Stuff","Hot diggety dog!","Hot diggety!","Hot-Shot","In Flux","Ingot This","Iron Designs","Iron Man","Iron Woman","Iron in the Fire","Ironclad","Just Enough Irons","Like Moths","Making It Hot","Matter of Metal","Metal Accent","Metal Arts","Metal Expertise","Metal Fabrications","Metal Mania","Metal Maniac","Metal Mastery","Metal Pandemonium","Metal Trades","Metal Works","Metallurgy","Metalworks","Metalworks of Art","Mind Over Matter","Mind Over Metal","Mineral Minded","Mineral Works","Mr Smith","Mrs Smith","Nerves of Steel","Nice Ring To It","Ore Decor","Ore Else","Ore Galore","Ore Really","Ore Restore","Ore Store","Parent Rock","Phoenix Fire","Pound World","Real Steel","Ring to It","Rings True","Smelt Art","Smelt My Hearth","Smelt in my Arms","Smelting Pot","Smelts of Heaven","Smelts of Roses","Smite Thee","Smith Thee","Smithen","Smitten","Sparks and Flames","Squeal of Steel","Steel Appeal","Steel Arms","Steel Base","Steel Fabrications","Steel Ideal","Steel Show","Steel Thunder","Steel Wings","Stop! Hammer Time","Striking Hot","Sword in the Forge","Sword in the Stone"," Ancient Anvil"," Blacksmith's Forge"," Clamor Shop"," Clank Tank"," Clinker Shop"," Cobalt Forge"," Eternal Flame"," Fire Spire"," Fire Squire"," Flame Game"," Gorge Forge"," Heat is On"," Hot Forge"," Hot Ticket"," Inferno Forge"," Iron's Hot"," Metal Petal"," Phoenix Forge"," Right Clank"," Smelt Belt"," Smelt Celt"," Smith Myth"," Smithy"," Storm Forge"," Tilted Anvil"," Unbreakable Anvil","The're Be Smoke","True as Steel","Under Construction","While the Iron's Hot","Young Flames"];
var tShopNameList = ["Textile Shop Name 1", "Textile Shop Name 2", "Textile Shop Name 3", "Textile Shop Name 4", "Textile Shop Name 5", "Textile Shop Name 6", "Textile Shop Name 7", "Textile Shop Name 8"];

var raceNameList = ["Human", "Gnome", "Half-elf", "Wood Elf", "High Elf", "Jungle Elf", "Dwarf", "Halfling", "Tiefling", "Half-orc", "Dragomborn"];
var statList = ["Strong", "hardy", "charismatic", "wise", "inteligent", "skilled", "sneaky", "bright", "fast", "lazy", "slow", "Young", "old", "attractive", "bald", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly", "aggressive", "agreeable", "ambitious", "brave", "calm", "delightful", "eager", "faithful", "gentle", "happy", "jolly", "kind", "lively", "nice", "obedient", "polite", "proud", "silly", "thankful", "victorious", "witty", "wonderful", "zealous", "angry", "bewildered", "clumsy", "defeated", "embarrassed", "fierce", "grumpy", "helpless", "itchy", "jealous", "lazy", "mysterious", "nervous", "obnoxious", "panicky", "pitiful", "repulsive", "scary", "thoughtless", "uptight", "worried"];
var hfRaceNameList = ["Eugene", "Herman", "Peter", "Frederick", "Floyd", "Michael", "Ray", "Lewis", "Claude", "Clyde", "Edwin", "Tom", "Martin", "Leonard", "Ben", "Chester", "Edgar", "Jim", "Harvey", "Russell", "Lester", "Clifford", "Luther", "Homer", "Jacob", "Leroy", "Otto", "Guy", "Lloyd", "Anthony", "Jessie", "Hugh", "Ed", "Bernard", "Theodore", "Stanley", "Eddie", "Patrick", "Philip", "Leon", "Archie", "Leslie", "Oliver", "Allen", "Alexander", "Dewey", "Ira", "Everett", "Norman", "Horace", "Victor", "Cecil", "Donald", "Charley", "Milton", "Isaac", "Stephen", "Julius", "August", "Bert", "Alvin", "Sidney", "Percy", "Marion", "Glenn", "Grover", "Warren", "Alex", "Emil", "Earnest", "Mack", "Wesley", "Otis", "Virgil", "Willis", "Melvin", "Kenneth", "Rufus", "Dave", "Dan", "Maurice", "Willard", "Lonnie", "Morris", "Vernon", "Gilbert", "Wallace", "Nathan", "Johnnie", "Jerry", "Wilbur", "Emmett", "Matthew", "Max", "Calvin", "Marvin", "Hubert", "Vincent", "Amos", "Jess", "Rudolph", "Harrison", "Perry", "Franklin", "Sylvester", "Glen", "Mark", "Manuel", "Jose", "Adolph", "Gordon", "Curtis", "Dennis", "Nelson", "Ollie", "Jay", "Marshall", "Elbert", "Felix", "Bennie", "Irving", "Josephine", "Mattie", "Jennie", "Jessie", "Maude", "Alma", "Mae", "Blanche", "Dorothy", "Ada", "Lucy", "Lula", "Mamie", "Fannie", "Stella", "Katherine", "Viola", "Ruby", "Dora", "Maggie", "Nora", "Rosa", "Beatrice", "Ellen", "Sadie", "Marion", "Willie", "Effie", "May", "Beulah", "Pauline", "Nettie", "Susie", "Della", "Marguerite", "Vera", "Daisy", "Lydia", "Virginia", "Olive", "Kathryn", "Evelyn", "Sallie", "Lizzie", "Lottie", "Emily", "Georgia", "Flora", "Nancy", "Katie", "Lucille", "Leona", "Charlotte", "Eleanor", "Hilda", "Theresa", "Ann", "Etta", "Addie", "Caroline", "Ollie", "Anne", "Lola", "Harriet", "Iva", "Bernice", "Henrietta", "Lela", "Jane", "Ora", "Amanda", "Amelia", "Inez", "Rebecca", "Susan", "Mollie", "Nannie", "Goldie", "Estelle", "Loretta", "Nina", "Maud", "Rachel", "Eula", "Matilda", "Eunice", "Lois", "Betty", "Mable", "Estella", "Marjorie", "Sara", "Violet", "Essie", "Amy", "Verna", "Sylvia", "Hannah", "Kate", "Olga", "Rosie", "Genevieve", "Flossie", "Maria", "Alta", "Barbara", "Frieda", "Eliza", "Lulu", "Ola", "Augusta", "Christine", "Sophia", "Belle", "Victoria", "Sophie", "Lucile", "Irma", "Ina", "Jean", "Thelma"];
var hlRaceNameList = ["Abram", "Acton", "Addington", "Adley", "Ainsley", "Ainsworth", "Alby", "Allerton", "Alston", "Altham", "Alton", "Anderton", "Ansley", "Appleton", "Asheton", "Ashley", "Ashton", "Astley", "Atherton", "Atterton", "Axton", "Badger", "Barclay", "Barlow", "Barney", "Barton", "Beckwith", "Benson", "Bentham", "Bentley", "Berkeley", "Beverly", "Bing", "Birkenhead", "Blackwood", "Blakeley", "Blakely", "Blankley", "Blyth", "Blythe", "Bradford", "Bradley", "Bradly", "Bradshaw", "Brady", "Brandon", "Branson", "Braxton", "Breeden", "Brent", "Bristol", "Brixton", "Browning", "Brownrigg", "Budd", "Burton", "Byron", "Camden", "Carlisle", "Carlton", "Carlyle", "Cason", "Charlton", "Chatham", "Chester", "Cholmondeley", "Churchill", "Clapham", "Clare", "Clayden", "Clayton", "Clifford", "Clifton", "Clinton", "Clive", "Colby", "Colton", "Compton", "Coombs", "Copeland", "Cornish", "Cotton", "Crawford", "Cromwell", "Cumberbatch", "Dalton", "Darby", "Darlington", "Davenport", "Dayton", "Deighton", "Denholm", "Digby", "Dryden", "Dudley", "Eastaughffe", "Eastoft", "Easton", "Elton", "Emsworth", "Enfield", "England", "Everleigh", "Everly", "Fawcett", "Fulton", "Garfield", "Garrick", "Gladstone", "Graeme", "Graham", "Gresham", "Hackney", "Hadlee", "Hadleigh", "Hadley", "Hailey", "Hale", "Haley", "Hallewell", "Halsey", "Hamilton", "Hampton", "Harlan", "Harley", "Harlow", "Harrington", "Hartford", "Hastings", "Hayden", "Hayes", "Hayhurst", "Hayley", "Holton", "Home", "Hornsby", "Huckabee", "Huxley", "Kelsey", "Kendal", "Kendall", "Kenley", "Kensley", "Kent", "Kimberley", "Kimberly", "Kinsley", "Kirby", "Lancaster", "Landon", "Langdon", "Langley", "Langston", "Law", "Leighton", "Lester", "Lincoln", "Lindsay", "Lindsey", "Livingstone", "Marlee", "Marleigh", "Marley", "Marlowe", "Marston", "Merton", "Middleton", "Milton", "Mitchell", "Morley", "Morton", "Myerscough", "Nash", "Nibley", "Northcott", "Norton", "Oakes", "Oakley", "Ogden", "Paxton", "Payton", "Perry", "Peyton", "Pickering", "Pinkerton", "Prescott", "Presley", "Preston", "Quinton", "Ramsay", "Ramsey", "Rayden", "Read", "Redfield", "Reed", "Reid", "Remington", "Ridley", "Riley", "RodneyRoscoe", "Rowley", "Royal", "Royston", "Rutherford", "Rutland", "Rylan", "Ryland", "Ryley", "Shelby", "Sheldon", "Shelley", "Shelly", "Sherwood", "Shipley", "Shirley", "Snape", "Snowdon", "Soames", "Southey", "Spalding", "Spaulding", "Springfield", "Stafford", "Stanford", "Stanley", "Stansfield", "Stanton", "Stapleton", "Stratford", "Sutherland", "Sutton", "Sydney", "Tattersall", "Tatum", "Tenley", "Tewksbury", "Thackeray", "Thornton", "Thorpe", "Tickle", "Tindall", "Tinley", "Trollope", "Tyndall", "Upton", "Vance", "Wade", "Wakefield", "Walcott", "Wallace", "Walpole", "Warwick", "Washington", "Webley", "Wedgwood", "Weld", "Wellington", "Wentworth", "Wesley", "Westbrook", "Westcott", "Weston", "Wharton", "Wheatley", "Whitby", "Wilberforce", "Willoughby", "Winchester", "Windsor", "Winterbourne", "Winthrop", "Wordsworth", "Yardley", "Yeardley", "York", "Yorke"];
var gRaceNameList = ["Abdieso", "Abrasha", "Abdiel", "Bahar", "Caspar", "Cy", "Evzen", "Fariel", "Javed", "Kazimir", "Khorshed", "Khortdad", "Rashne", "Roshan", "Sarosh", "Shah", "Shahar", "Siamak", "Syrus", "Xanti", "Xerxes", "Ximun", "Yuriel", "Zalmon", "Zircon", "Zoroaster", "Anezka", "Arezou", "Kira", "Kismet", "Marjeta", "Nadezda", "Nasrin", "Parisa", "Sadira", "Shahnaz", "Shirin", "Soraya", "Vashti", "Viera", "Verushka", "Xantiya", "Yasmin", "Yasmina", "Zenda", "Zerushda", "Zuleika", "Zuriaa", "Zuza", "Zuzana", "Abdulaziz","Abdulghafur","Abdullah","Abdulqhafur","Abubakir","Ali","Alisher","Aminjon","Arslon","Ashur","Ataboy","Aziz","Bakir","Batir","Bekmirza","Dadajon","Davlat","Dehoan","Elyor","Erwat","Fattah","Ghafur","Ghani","Ghulam","Hakim","Hamra","Hasan","Hilol","Holi","Husan","Ilyas","Jora","Jura","Kamol","Karim","Khafiz","Khudayberdi","Kimsan","Kodir","Komil","Latif","Mahkam","Malik","Mamtqul","Mannon","Manzur","Mirzali","Muhiddin","Munavvar","Murtaza","Musa","Muzafar","Nabi","Narzuqul","Nasiv","Niyaz","Nurmat","Omar","Onar","Oqil","Orif","Otkir","Parpi","Pazzaq","Qasim","Qodir","Rahim","Rahmat","Ruslan","Rustam","Saidjahon","Salim","Sandjar","Sattar","Shakir","Sharif","Shavkat","Shodman","Shovruk","Shukrulla","Sodyq","Soli","Sulaymon","Surat","Tahir","Tesha","Timur","Tohta","Toshmat","Toychi","Tursan","Tursun","Ulfat","Umid","Usman","Usmon","Vali","Yarmat","Yoldash","Yulbas","Yunis","Yusuf","Zahid","Zakir","Zarif","Zokirjan","Adalat","Adolat","Anora","Aziza","Bahri","Bassar","Binafsha","Chinara","Dilbar","Diloram","Durdona","Elnura","Faroghat","Faroqhat","Fatima","Fayzikhon","Fazilat","Feruza","Gulchehra","Guldasta","Guli","Gulnara","Gulnora","Habiba","Hadicha","Hahbuba","Hakima","Hamra","Indira","Inoyat","Jamila","Khafiza","Khasiyat","Khayrikhon","Khoslyat","Kimsan","Komila","Latifa","Lola","Ma'rifat","Maghfirat","Malika","Malike","Manzura","Maqsuda","Mariyam","Mastura","Mehri","Mu'tabar","Muhabhat","Mukarrama","Munavvara","Murkhon","Muzayyana","Nafis","Nargiza","Nasiba","Nazira","Nazokat","Nigara","Nozanin","Olma","Ona","Onar","Oqila","Orifa","Oumri","Oundus","Oydin","Ozoda","Parizod","Parizoda","Puzvon","Qumri","Qumrinico","Qundus","Roziya","Sabira","Sadoqat","Salima","Sallma","Salomat","Sanobar","Shahlo","Shahnoza","Shakar","Shakarkhan","Shamsigul","Sharifa","Soliya","Tahmina","Tohta","Toti","Turdlya","Tursan","Tursunoy","Ulfat","Umida","Vasila","Yelena","Yulduz","Zahida","Zamira","Zarifa","Zarina","Zebi","Zulayho","Zulfiya"];
var eRaceNameList = ["Aialon", "Alwinar", "Cassius", "Elarahal", "Eladio", "Jiardem", "Laern", "Lelyrian", "Lephyrr", "Loray", "Sayadar", "Talonien", "Vaerlan", "Allyria", "Ayrdra", "Aylwin", "Deneth", "Elseone", "Etherea", "lstiria", "Karanwyn", "Lavinia", "Leandra", "Levana", "Lieryn", "Ondine", "Orianna", "Ravel", "Sidonie", "Sinariel", "Sydri", "Taris", "Turue", "Vacquiel", "Valendra", "Aelius", "Lantherval", "Lorhalien", "Maldranthe", "Shalbarain", "Sirothian", "Starfeon", "Zolerii", "Ol6rie", "Virion", "Elinde", "Fimion", "Arce", "Parintar", "Nintur", "Tyenganderil", "Telacil", "Sume", "Falandil", "Milmilion", "- Altarinque", "Emirie", "Volmarrion", "Salmo", "Elaminwe", "Teluin", "Vininorne", "Ericuril", "Faranenya", "Anuril", "Anentuile", "Elindasil", "Arumil", "Eandil", "Elandur", "Eanar", "Varendil", "Liremalda", "Sorion", "Nore", "Velie", "Eldimure", "Lurfalion", "Nenya", "Finwe", "Carie", "Uland6re", "Carilinde", "Nende", "Maitamo", "Turaquar", "Aldiramo", "Alarcion", "Alathar", "Ariandar", "Arromar", "Borel", "Bvachan", "Carydion", "Callis", "Cyprian", "Dusan", "Elgoth", "Farlien", "Ferel", "Gaerlan", "lafalior", "Kaelthorn", "Laethan", "Leliar", "Leodor", "Lorak", "Lorifir", "Morian", "Miklos", "Oleran", "Rylef", "Savian", "Seylas", "Tevior", "Veyas", "Aryllan", "Atalya", "Ayrthwil", "Clorinda", "lrva", "Lyfalia", "Milena", "Olethea", "Ronefel", "Shayndel", "Thirya", "Velene", "Venefiq", "Zereni", "Autumnloft", "Balefrost", "Briarfell", "Evenwind", "Graytrails", "· Mooncairn", "Riverwall", "Stormwolf", "Summergale", "Sunshadow", "Woodenhawk", "Hadir", "Belecthan", "Sandir", "Dundor", "Galadilion", "Celegur", "Borongil", "Glonor", "Amrienor", "Andrei", "Thiras", "Athorfin", "Celeval", "llathriel", "Milduin", "Celevorn", "Berethir", "Golfalas", "Andel", "Nirwen", "Nirion", "Gundrel", "Ongor", "Ralfin", "Cindor", "Aragil", "Elevreth", "Ethrion", "Emellion", "Anduin", "Gl6rendil", "Galaduil", "Filrion", "Galathrath", "Merchel", "Belegor", "Andronel", "Aglaril", "Araval", "Galathorn", "Daerondor", "Rimranion", "Duiril", "Endring", "Duinir", "Bregor", "Elweniel", "Angwil", "Thoronor", "Andrilion", "Gelduin", "Ethrond", "Arathor", "Nur", "Fingund", "Mirdor", "Ilathriel"];
var kRaceNameList = eRaceNameList.concat(hfRaceNameList);
var dm1RaceNameList = ["Ad","Am","Arm","Baer","Daer","Bal","Ban","Bar","Bel","Ben","Ber","Bhal","Bhar","Bhel","Bram","Bran","Brom","Brum","Bun","Dal","Dar","Dol","Dul","Eb","Em","Erm","Far","Gal","Gar","Ger","Gim","Gral","Gram","Gran","Grem","Gren","Gril","Gry","Gul","Har","Hjal","Hjol","Hjul","Hor","Hul","Hur","Kar","Khar","Kram","Krom","Krum","Mag","Mal","Mel","Mor","Muir","Mur","Rag","Ran","Reg","Rot","Thal","Thar","Thel","Ther","Tho","Thor","Thul","Thur","Thy","Tor","Ty","Um","Urm","Von"];
var dm2RaceNameList = ["adin","bek","brek","dahr","dain","dal","dan","dar","dek","dir","dohr","dor","drak","dram","dren","drom","drum","drus","duhr","dur","dus","garn","gram","gran","grim","grom","gron","grum","grun","gurn","gus","iggs","kahm","kam","kohm","kom","kuhm","kum","kyl","man","mand","mar","mek","miir","min","mir","mond","mor","mun","mund","mur","mus","myl","myr","nam","nar","nik","nir","nom","num","nur","nus","nyl","rak","ram","ren","rig","rigg","rik","rim","rom","ron","rum","rus","ryl","tharm","tharn","thran","thrum","thrun"];
var df1RaceNameList = ["An","Ar","Baer","Bar","Bel","Belle","Bon","Bonn","Braen","Bral","Bralle","Bran","Bren","Bret","Bril","Brille","Brol","Bron","Brul","Bryl","Brylle","Bryn","Bryt","Byl","Bylle","Daer","Dear","Dim","Ed","Ein","El","Gem","Ger","Gwan","Gwen","Gwin","Gwyn","Gym","Ing","Jen","Jenn","Jin","Jyn","Kait","Kar","Kat","Kath","Ket","Las","Lass","Les","Less","Lyes","Lys","Lyss","Maer","Maev","Mar","Mis","Mist","Myr","Mys","Myst","Naer","Nal","Nas","Nass","Nes","Nis","Nys","Raen","Ran","Red","Reyn","Run","Ryn","Sar","Sol","Tas","Taz","Tis","Tish","Tiz","Tor","Tys","Tysh"];
var df2RaceNameList = ["belle","bera","delle","deth","dielle","dille","dish","dora","dryn","dyl","giel","glia","glian","gwyn","la","leen","leil","len","lin","linn","lyl","lyn","lynn","ma","mera","mora","mura","myl","myla","nan","nar","nas","nera","nia","nip","nis","niss","nora","nura","nyl","nys","nyss","ra","ras","res","ri","ria","rielle","rin","ris","ros","ryl","ryn","sael","selle","sora","syl","thel","thiel","tin","tyn","va","van","via","vian","waen","win","wyn","wynn"];
var dlRaceNameList = ["Agaro", "Aman", "Arval", "Auxlan", "Avamir", "Baelnar", "Balfam", "Bariken", "Borkul", "Darkul", "Dolmen", "Dyrnar", "Erag", "Ezegan", "Ferrek", "Garmul", "Glint", "Ghorvas", "Grimmalk", "Haeltar", "Hagan", "Halagmar", "Halzar", "Hlant", "Korlag", "Krag", "Krim", "Kurman", "Lurtrum", "Malagar", "Mardam", "Maulnar", "Melgar", "Morak", "Orobok", "Radek", "Rogath", "Roken", "Rozag", "Sabakzar", "Sharak", "Smethykk", "Swargar", "Thorbalt", "Thorin", "Tredigar", "Vabul", "Vistrum", "Wolvar", "Beyla", "Fenryl", "Freyde", "Grenenzel", "Krystolari", "Lokara", "Lurka", "Marnia", "Praxana", "Rokel", "Roksana", "Thurlfara", "Vauldra", "Veklani", "Vronwe", "Zebel", "Ambershard", "Barrelhelm", "Copperhearth", "Deepmiddens", "Drakantal", "Evermead", "Garkalan", "Grimtor", "Hackshield", "lrongull", "Markolak", "Ramcrown", "Rockharvest", "Silvertarn", "Skandalor", "Zarkanan", ];
var lRaceNameList = ["Arthan", "Bennet", "Bodo", "Carvin", "Chas", "Corby", "Cullen", "Egen", "Ernest", "Falk", "Gedi", "Heron", "Jeryl", "Jet", "Jiri", "Keffen", "Kylem", "Kynt", "Leskyn", "Libo", "Neff", "Orne", "Paddy", "Pipo", "Poe", "Quarrel", "Rabbit", "Rilkin", "Rollo", "Snakebait", "Tarfen", "Titch", "Tuck", "Whim", "Caliope", "Emily", "Holli", "Jinx", "Joy", "Lilac", "Lily", "Minka", "Orchid", "Piper", "Rixi", "Rosabelle", "Sabretha", "Sierra", "Teg", "Tilly", "Tillip", "Toira", "Vexia", "Vil", "Vzani", "Zanthe", "Ziza", "Battlestone", "Blackwater", "Daggersharp", "Deepstrider", "Hollowpot", "Oleander", "Puddle", "Raftmite", "Skiprock", "Silverfin", "Tanglestrand", "Tricker", "Willowrush", "Yellowcrane"];

var classNameList = ["High", "Middle", "Low"];

var itemNameList = ["Scarce", "Available", "Plentiful"];
var mItemNameList = [["Potion of climbing", "Common"], ["Potion of healing", "Common"], ["Spell scroll - 1st level", "Common"], ["Spell scroll - Cantrip", "Common"], ["Adamantine armor", "Uncommon"], ["Alchemy jug", "Uncommon"], ["Ammunition +1", "Uncommon"], ["Amulet of proof against", "Uncommon"], ["detection and location", "Uncommon"], ["Bag of holding", "Uncommon"], ["Bag of tricks", "Uncommon"], ["Boots of elvenkind", "Uncommon"], ["Boots of striding and springing", "Uncommon"], ["Boots of the winterlands", "Uncommon"], ["Bracers of archery", "Uncommon"], ["Brooch of shielding", "Uncommon"], ["Broom of flying", "Uncommon"], ["Cap of water breathing", "Uncommon"], ["Circlet of blasting", "Uncommon"], ["Cloak of elvenkind", "Uncommon"], ["Cloak of protection", "Uncommon"], ["Cloak of the manta ray", "Uncommon"], ["Decanter of endless water", "Uncommon"], ["Deck of illusions", "Uncommon"], ["Driftglobe", "Uncommon"], ["Dust of disappearance", "Uncommon"], ["Dust of dryness", "Uncommon"], ["Dust of sneezing and choking", "Uncommon"], ["Elemental gem", "Uncommon"], ["Eversmoking bottle", "Uncommon"], ["Eyes of charming", "Uncommon"], ["Eyes of minute seeing", "Uncommon"], ["Eyes of the eagle", "Uncommon"], ["Figurine of wondrous power - Silver raven", "Uncommon"], ["Gauntlets of ogre power", "Uncommon"], ["Gem of brightness", "Uncommon"], ["Gloves of missile snaring", "Uncommon"], ["Gloves of swimming and climbing", "Uncommon"], ["Gloves of thievery", "Uncommon"], ["Goggles of night", "Uncommon"], ["Hat of disguise", "Uncommon"], ["Headband of intellect", "Uncommon"], ["Helm of comprehending languages", "Uncommon"], ["Helm of telepathy", "Uncommon"], ["Immovable rod", "Uncommon"], ["Instrument of the bard - Doss lute", "Uncommon"], ["Instrument of the bard - Fochlucan bandore", "Uncommon"], ["Instrument of the bard - Mac-Fuirmidh cittern", "Uncommon"], ["Javelin of lightning", "Uncommon"], ["Keoghtom’s ointment", "Uncommon"], ["Lantern of revealing", "Uncommon"], ["Mariner’s armor", "Uncommon"], ["Medallion of thoughts", "Uncommon"], ["Mithral armor", "Uncommon"], ["Necklace of adaptation", "Uncommon"], ["Oil of slipperiness", "Uncommon"], ["Pearl of power", "Uncommon"], ["Periapt of health", "Uncommon"], ["Periapt of wound closure", "Uncommon"], ["Philter of love", "Uncommon"], ["Pipes of haunting", "Uncommon"], ["Pipes of the sewers", "Uncommon"], ["Potion of animal friendship", "Uncommon"], ["Potion of fire breath", "Uncommon"], ["Potion of giant strength - Hill giant", "Uncommon"], ["Potion of greater healing", "Uncommon"], ["Potion of growth", "Uncommon"], ["Potion of poison", "Uncommon"], ["Potion of resistance", "Uncommon"], ["Potion of water breathing", "Uncommon"], ["Quiver of Ehlonna", "Uncommon"], ["Ring of jumping", "Uncommon"], ["Ring of mind shielding", "Uncommon"], ["Ring of swimming", "Uncommon"], ["Ring of warmth", "Uncommon"], ["Ring of water walking", "Uncommon"], ["Robe of useful items", "Uncommon"], ["Rod of the pact keeper +1", "Uncommon"], ["Rope of climbing", "Uncommon"], ["Saddle of the cavalier", "Uncommon"], ["Sending stones", "Uncommon"], ["Sentinel shield", "Uncommon"], ["Shield +1", "Uncommon"], ["Slippers of spider climbing", "Uncommon"], ["Spell scroll - 2nd level", "Uncommon"], ["Spell scroll - 3rd level", "Uncommon"], ["Staff of the adder", "Uncommon"], ["Staff of the python", "Uncommon"], ["Stone of good luck - Luckstone", "Uncommon"], ["Sword of vengeance", "Uncommon"], ["Trident of fish command", "Uncommon"], ["Wand of magic detection", "Uncommon"], ["Wand of magic missiles", "Uncommon"], ["Wand of secrets", "Uncommon"], ["Wand of the war mage +1", "Uncommon"], ["Wand of web", "Uncommon"], ["Weapon +1", "Uncommon"], ["Weapon of warning", "Uncommon"], ["Wind fan", "Uncommon"], ["Winged boots", "Uncommon"], ["Ammunition +2", "Rare"], ["Amulet of health", "Rare"], ["Armor +1", "Rare"], ["Armor of resistance", "Rare"], ["Armor of vulnerability", "Rare"], ["Arrow-catching shield", "Rare"], ["Bag of beans", "Rare"], ["Bead of force", "Rare"], ["Belt of dwarvenkind", "Rare"], ["Belt of giant strength - Hill giant", "Rare"], ["Berserker axe", "Rare"], ["Boots of levitation", "Rare"], ["Boots of speed", "Rare"], ["Bowl of commanding water elementals", "Rare"], ["Bracers of defense", "Rare"], ["Brazier of commanding fire elementals", "Rare"], ["Cape of the mountebank", "Rare"], ["Censer of controlling air elementals", "Rare"], ["Chime of opening", "Rare"], ["Cloak of displacement", "Rare"], ["Cloak of the bat", "Rare"], ["Cube of force", "Rare"], ["Daern's instant fortress", "Rare"], ["Dagger of venom", "Rare"], ["Dimensional shackles", "Rare"], ["Dragon slayer", "Rare"], ["Elixir of health", "Rare"], ["Elven chain", "Rare"], ["Figurine of wondrous power - Bronze griffon", "Rare"], ["Figurine of wondrous power - Ebony fly", "Rare"], ["Figurine of wondrous power - Golden lions", "Rare"], ["Figurine of wondrous power - Ivory goats", "Rare"], ["Figurine of wondrous power - Marble elephant", "Rare"], ["Figurine of wondrous power - Onyx dog", "Rare"], ["Figurine of wondrous power - Serpentine owl", "Rare"], ["Flame tongue", "Rare"], ["Folding boat", "Rare"], ["Gem of seeing", "Rare"], ["Giant slayer", "Rare"], ["Glamoured studded leather", "Rare"], ["Helm of teleportation", "Rare"], ["Heward’s handy haversack", "Rare"], ["Horn of blasting", "Rare"], ["Horn of valhalla - Silver or brass", "Rare"], ["Horseshoes of speed", "Rare"], ["Instrument of the bard - Canaith mandolin", "Rare"], ["Instrument of the bard  - Cli lyre", "Rare"], ["Ioun stone - Awareness", "Rare"], ["Ioun stone - Protection", "Rare"], ["Ioun stone - Reserve", "Rare"], ["Ioun stone - Sustenance", "Rare"], ["Iron bands of bilarro", "Rare"], ["Mace of disruption", "Rare"], ["Mace of smiting", "Rare"], ["Mace of terror", "Rare"], ["Mantle of spell resistance", "Rare"], ["Necklace of fireballs", "Rare"], ["Necklace of prayer beads", "Rare"], ["Oil of etherealness", "Rare"], ["Periapt of proof against poison", "Rare"], ["Portable hole", "Rare"], ["Potion of clairvoyance", "Rare"], ["Potion of diminution", "Rare"], ["Potion of gaseous form", "Rare"], ["Potion of giant strength - Fire giant", "Rare"], ["Potion of giant strength - Frost or stone giant", "Rare"], ["Potion of heroism", "Rare"], ["Potion of invulnerability", "Rare"], ["Potion of mind reading", "Rare"], ["Potion of superior healing", "Rare"], ["Quaal’s feather token", "Rare"], ["Ring of animal influence", "Rare"], ["Ring of evasion", "Rare"], ["Ring of feather falling", "Rare"], ["Ring of free action", "Rare"], ["Ring of protection", "Rare"], ["Ring of resistance", "Rare"], ["Ring of spell storing", "Rare"], ["Ring of the ram", "Rare"], ["Ring of x-ray vision", "Rare"], ["Robe of eyes", "Rare"], ["Rod of rulership", "Rare"], ["Rod of the pact keeper +2", "Rare"], ["Rope of entanglement", "Rare"], ["Scroll of protection", "Rare"], ["Shield +2", "Rare"], ["Shield of missile attraction", "Rare"], ["Spell scroll - 4th level", "Rare"], ["Spell scroll - 5th level", "Rare"], ["Staff of charming", "Rare"], ["Staff of healing", "Rare"], ["Staff of swarming insects", "Rare"], ["Staff of the woodlands", "Rare"], ["Staff of withering", "Rare"], ["Stone of controlling earth elementals", "Rare"], ["Sun blade", "Rare"], ["Sword of life stealing", "Rare"], ["Sword of wounding", "Rare"], ["Tentacle rod", "Rare"], ["Vicious weapon", "Rare"], ["Wand of binding", "Rare"], ["Wand of enemy detection", "Rare"], ["Wand of fear", "Rare"], ["Wand of fireballs", "Rare"], ["Wand of lightning bolts", "Rare"], ["Wand of paralysis", "Rare"], ["Wand of the war mage +2", "Rare"], ["Wand of wonder", "Rare"], ["Weapon +2", "Rare"], ["Wings of flying", "Rare"],["Ammunition +3", "Very Rare"], ["Amulet of the planes", "Very Rare"], ["Animated shield", "Very Rare"], ["Armor +2", "Very Rare"], ["Arrow of slaying", "Very Rare"], ["Bag of devouring", "Very Rare"], ["Belt of giant strength - Fire giant", "Very Rare"], ["Belt of giant strength - Frost or stone giant", "Very Rare"], ["Candle of invocation", "Very Rare"], ["Carpet of flying", "Very Rare"], ["Cloak of arachnida", "Very Rare"], ["Crystal ball", "Very Rare"], ["Dancing sword", "Very Rare"], ["Demon armor", "Very Rare"], ["Dragon scale mail", "Very Rare"], ["Dwarven plate", "Very Rare"], ["Dwarven thrower", "Very Rare"], ["Efreeti bottle", "Very Rare"], ["Figurine of wondrous power - Obsidian steed", "Very Rare"], ["Frost brand", "Very Rare"], ["Helm of brilliance", "Very Rare"], ["Horn of valhalla - Bronze", "Very Rare"], ["Horseshoes of a zephyr", "Very Rare"], ["Instrument of the bard - Anstruth harp", "Very Rare"], ["Ioun stone - Absorption", "Very Rare"], ["Ioun stone - Agility", "Very Rare"], ["Ioun stone - Fortitude", "Very Rare"], ["Ioun stone - Insight", "Very Rare"], ["Ioun stone - Intellect", "Very Rare"], ["Ioun stone - Leadership", "Very Rare"], ["Ioun stone - Strength", "Very Rare"], ["Manual of bodily health", "Very Rare"], ["Manual of gainful exercise", "Very Rare"], ["Manual of golems", "Very Rare"], ["Manual of quickness of action", "Very Rare"], ["Mirror of life trapping", "Very Rare"], ["Nine lives stealer", "Very Rare"], ["Nolzur’s marvelous pigments", "Very Rare"], ["Oathbow", "Very Rare"], ["Oil of sharpness", "Very Rare"], ["Potion of flying", "Very Rare"], ["Potion of giant strength - Cloud giant", "Very Rare"], ["Potion of invisibility", "Very Rare"], ["Potion of longevity", "Very Rare"], ["Potion of speed", "Very Rare"], ["Potion of supreme healing", "Very Rare"], ["Potion of vitality", "Very Rare"], ["Ring of regeneration", "Very Rare"], ["Ring of shooting stars", "Very Rare"], ["Ring of telekinesis", "Very Rare"], ["Robe of scintillating colors", "Very Rare"], ["Robe of stars", "Very Rare"], ["Rod of absorption", "Very Rare"], ["Rod of alertness", "Rare"], ["Rod of security", "Very Rare"],["Rod of the pact keeper +3", "Very Rare"], ["Scimitar of speed", "Very Rare"], ["Shield +3", "Very Rare"], ["Spell scroll - 6th level", "Very Rare"], ["Spell scroll - 7th level", "Very Rare"], ["Spell scroll - 8th level", "Very Rare"], ["Spellguard shield", "Very Rare"], ["Staff of fire", "Very Rare"], ["Staff of frost", "Very Rare"], ["Staff of power", "Very Rare"], ["Staff of striking", "Very Rare"], ["Staff of thunder and lightning", "Very Rare"], ["Sword of sharpness", "Very Rare"], ["Tome of clear thought", "Very Rare"], ["Tome of leadership and influence", "Very Rare"], ["Tome of understanding", "Very Rare"], ["Wand of polymorph", "Very Rare"], ["Wand of the war mage +3", "Very Rare"], ["Weapon +3", "Very Rare"],
                     
["Apparatus of Kwalish", "Legendary"], ["Armor +3", "Legendary"], ["Armor of invulnerability", "Legendary"], ["Belt of giant strength - Cloud giant", "Legendary"], ["Belt of giant strength - Storm giant", "Legendary"], ["Cloak of invisibility", "Legendary"], ["Crystal ball", "Legendary"], ["Cubic gate", "Legendary"], ["Deck of many things", "Legendary"], ["Defender", "Legendary"], ["Efreeti chain", "Legendary"], ["Hammer of thunderbolts", "Legendary"], ["Holy avenger", "Legendary"], ["Horn of valhalla - Iron", "Legendary"], ["Instrument of the bard - Ollamh harp", "Legendary"], ["Ioun stone - Greater absorption", "Legendary"], ["Ioun stone - Mastery", "Legendary"], ["Ioun stone - Regeneration", "Legendary"], ["Iron flask", "Legendary"], ["Luck blade", "Legendary"], ["Plate armor of etherealness", "Legendary"], ["Potion of giant strength - Storm giant", "Legendary"], ["Ring of djinni summoning", "Legendary"], ["Ring of elemental command", "Legendary"], ["Ring of invisibility", "Legendary"], ["Ring of spell turning", "Legendary"], ["Ring of three wishes", "Legendary"], ["Robe of the archmagi", "Legendary"], ["Rod of lordly might", "Legendary"], ["Rod of resurrection", "Legendary"], ["Scarab of protection", "Legendary"], ["Sovereign glue", "Legendary"], ["Spell scroll - 9th level", "Legendary"], ["Sphere of annihilation", "Legendary"], ["Staff of the magi", "Legendary"], ["Sword of answering", "Legendary"], ["Talisman of pure good", "Legendary"], ["Talisman of the sphere", "Legendary"], ["Talisman of ultimate evil", "Legendary"], ["Tome of the stilled tongue", "Legendary"], ["Universal solvent", "Legendary"], ["Vorpal sword", "Legendary"], ["Well of many worlds", "Legendary"]
                     
];
var aItemNameList = [["Padded", "Light", 6, "11 + Dex modifier", "Standard"], ["Leather", "Light", 10, "11 + Dex modifier", "Leather"], ["Studded leather", "Light", 45, "12 + Dexmodifier", "Leather"], ["Hide", "Medium", 10, "12 + Dex modifier (max 2)", "Leather"], ["Chainshirt", "Medium", 50, "13 + Dex modifier (max 2)", "Metal"], ["Scalemail", "Medium", 50, "14 + Dex modifier (max 2)", "Metal"], ["Breastplate", "Medium", 400, "14 + Dex modifier (max 2)", "Metal"], ["Halfplate", "Medium", 750, "15 + Dex modifier (max 2)", "Metal"], ["Ringmail", "Heavy", 30, "14 AC", "Metal"], ["Chainmail", "Heavy", 70, "16 AC", "Metal"], ["Splint", "Heavy", 200, "17 AC", "Metal"], ["Plate", "Heavy", 1500, "18 AC", "Metal"], ["Shield", "Shield", 10, "+2 AC", "Metal"], ["Hide Shield", "Shield", 10, "+1 AC", "Metal"]];
    
var asItemTypeList = [["Standard", "No additional benefit", 1], ["Tough", "Resistant to bludgeoning", 1.5]];

var amItemTypeList = [["Standard", "No additional benefit", 1], ["Adamantite", "Immune to crit damage", 2.5]];

var alItemTypeList = [["Standard", "No additional benefit", 1], ["Red Dragon", "Resistant to fire damage", 5], ["Blue Dragon", "Resistant to cold damage", 5]];


var wItemNameList = [
    
["Club", 0.1 , "1d4 bludgeoning", "2 lb.", "Light"], ["Dagger", 2 , "1d4 piercing", "1 lb.", "Finesse, light, thrown (range 20/60)"], ["Greatclub", 0.2 , "1d8 bludgeoning", "10 lb.", "Two-handed"], ["Handaxe", 5 , "1d6 slashing", "2 lb.", "Light, thrown (range 20/60)"], ["Javelin", 0.5 , "1d6 piercing", "2 lb.", "Thrown (range 30/120)"], ["Light hammer", 2 , "1d4 bludgeoning", "2 lb.", "Light, thrown (range 20/60)"], ["Mace", 5 , "1d6 bludgeoning", "4 lb.", "-"], ["Quarterstaff", 0.2 , "1d6 bludgeoning", "4 lb.", "Versatile (1d8)"], ["Sickle", 1 , "1d4 slashing", "2 lb.", "Light"], ["Spear", 1 , "1d6 piercing", "3 lb.", "Thrown (range 20/60), versatile (1d8)"], ["Crossbow, light", 25 , "1d8 piercing", "5 lb.", "Ammunition (range 80/320), loading, two-handed"], ["Dart", 0.05, "1d4 piercing", "1/4 lb.", "Finesse, thrown (range 20/60)"], ["Shortbow", 25 , "1d6 piercing", "2 lb.", "Ammunition (range 80/320), two-handed"], ["Sling", 0.1 , "1d4 bludgeoning", "-", "Ammunition (range 30/120)"], ["Battleaxe", 10 , "1d8 slashing", "4 lb.", "Versatile (1d10)"], ["Flail", 10 , "1d8 bludgeoning", "2 lb.", "-"], ["Glaive", 20 , "1d10 slashing", "6 lb.", "Heavy, reach, two-handed"], ["Greataxe", 30 , "1d12 slashing", "7 lb.", "Heavy, two-handed"], ["Greatsword", 50 , "2d6 slashing", "6 lb.", "Heavy, two-handed"], ["Halberd", 20 , "1d10 slashing", "6 lb.", "Heavy, reach, two-handed"], ["Lance", 10 , "1d12 piercing", "6 lb.", "Reach, special"], ["Longsword", 15 , "1d8 slashing", "3 lb.", "Versatile (1d10)"], ["Maul", 10 , "2d6 bludgeoning", "10 lb.", "Heavy, two-handed"], ["Morningstar", 15 , "1d8 piercing", "4 lb.", "-"], ["Pike", 5 , "1d10 piercing", "18 lb.", "Heavy, reach, two-handed"], ["Rapier", 25 , "1d8 piercing", "2 lb.", "Finesse"], ["Scimitar", 25 , "1d6 slashing", "3 lb.", "Finesse, light"], ["Shortsword", 10 , "1d6 piercing", "2 lb.", "Finesse, light"], ["Trident", 5 , "1d6 piercing", "4 lb.", "Thrown (range 20/60), versatile (1d8)"], ["War pick", 5 , "1d8 piercing", "2 lb.", "-"], ["Warhammer", 15 , "1d8 bludgeoning", "2 lb.", "Versatile (1d10"], ["Whip", 2 , "1d4 slashing", "3 lb.", "Finesse, reach"], ["Blowgun", 10 , "1 piercing", "1 lb.", "Ammunition (range 25/100), loading"], ["Crossbow, hand", 75 , "1d6 piercing", "3 lb.", "Ammunition (range 30/120), light, loading"], ["Crossbow, heavy", 50 , "1d10 piercing", "18 lb.", "Ammunition (range 100/400), heavy, loading, two-handed"], ["Longbow", 50 , "1d8 piercing", "2 lb.", "Ammunition (range 150/600), heavy, two-handed"], ["Net", 1 , "-", "3 lb.", "Special, thrown (range 5/15)"]];
    
var wItemTypeList = [["Silvered", "Silvered blade/ammunotion", 1.5], ["Standard", "No additional benefit", 1], ["Masterful", "+1 to attack and damage", 5], ["Magnificent", "+2 to attack and damage", 20], ["Mythic", "+3 to attack and damage", 100], ["Adamantine", "Negates non-magic resistances", 3], ["Flame Tounge", "+2d6 fire damage", 10], ];

function randomise() {
    $('#result').empty();
    $("#result").append("<div id='shop'></div><div id='race'></div><div id='items'></div>");
    randomRace();
    randomShop();
    var ri = randIndex(classNameList);
    document.getElementById('sel3').selectedIndex = ri;
    randomItem();
}

function generate() {
    $('#result').empty();
    $("#result").append("<div id='shop'></div><div id='race'></div><div id='items'></div>");
    generateRace();
    generateShop();
    generateItems();
}


function generateShop() {
    $("#shop").empty();
    var shop;
    switch(Number(document.getElementById('sel1').selectedIndex)) {
        case 0:
            if (Math.random() > 0.3){
                var fname;
                var name = "(City Name) ";
                if (Math.random() > 0.3){
                    fname = $('#pname').text().split(" ");
                    name = randValue(fname) + "'s ";
                    console.log(name);
                } else if (Math.random() > 0.5) {
                    name = "The ";
                }
                shop = name + randValue(mShopNameList1);
            } else {
                shop = "The " + randValue(mShopNameList2) + " " + randValue(mShopNameList3);
            }
            break;
        case 1:
            shop = randValue(aShopNameList);
            break
        case 2:
            var fname;
            var name = "(City Name) ";
            if (Math.random() > 0.3){
                fname = $('#pname').text().split(" ");
                name = randValue(fname) + "'s ";
                console.log(name);
            } else if (Math.random() > 0.5) {
                name = "The ";
            }
            shop = name + randValue(wShopNameList);
            break;
        case 3:
            shop = randValue(tShopNameList);
            break;
    }
    var html = "<h2>" + shop + "</h2>";
    $("#shop").append(html);
}

function generateRace() {
    $("#race").empty();
    var fullName;
    switch(Number(document.getElementById('sel2').selectedIndex)) {
        case 0:
            fullName = randValue(hfRaceNameList) + " " + randValue(hlRaceNameList);
            break;
        case 1:
            fullName = randValue(gRaceNameList);
            break
        case 2:
            fullName = randValue(kRaceNameList);
            break;
        case 3:
        case 4:
        case 5:
            fullName = randValue(eRaceNameList);
            break;
        case 6:
            if (Math.random() > 0.5) {
                fullName = randValue(dm1RaceNameList) + randValue(dm2RaceNameList) + " " + randValue(dlRaceNameList);
            } else {
                fullName = randValue(df1RaceNameList) + randValue(df2RaceNameList) + " " + randValue(dlRaceNameList);
            }
            break;
        case 7:
            fullName = randValue(lRaceNameList);
            break;
        default:
            fullName = randValue(hfRaceNameList) + " " + randValue(hlRaceNameList);
    }
    var years = Math.floor(Math.random()*40)+1;
    if(years > 20){
        years = Math.floor(Math.random()*40)+1;
        if(years > 10){
        years = Math.floor(Math.random()*40)+1;
    }
    }
    var html = "<p>A " + $('#sel3 option:selected').text() + " class establishment run by <span id='pname'>" + fullName + "</span>, a " + randValue(statList) + " and " + randValue(statList) + " " + $('#sel2 option:selected').text() + ", for " + years + " years</p>";
    $("#race").append(html);
}

function generateItems() {
    $("#items").empty();
    var count;
    switch(Number(document.getElementById('sel4').selectedIndex)) {
        case 0:
            count = 5;
            break;
        case 1:
            count = 10;
            break
        case 2:
            count = 25;
            break;
    }
    var shopClass = Number(document.getElementById('sel3').selectedIndex);
    switch(Number(document.getElementById('sel1').selectedIndex)) {
        case 0:
            var itemCost = 50;
            var html = '<table class="table"><thead><tr><th scope="col">Item</th><th scope="col">Rarity</th><th scope="col">Cost</th></thead><tbody><tr>';
            var pohCost;
            var pohNum;
            switch(count) {
                case 5:
                    pohCost = Math.ceil(60 + Math.random()*20);
                    pohNum = Math.ceil(Math.random()*2+2);
                    break;
                case 10:
                    pohCost = Math.ceil(50 + Math.random()*20);
                    pohNum = Math.ceil(Math.random()*4+4);
                    break;
                case 25:
                    pohCost = Math.ceil(40 + Math.random()*20);
                    pohNum = Math.ceil(Math.random()*8+8);
                    break;
            }
            html += "<tr><td>" + pohNum + " x " + mItemNameList[1][0] + "</td><td>" + mItemNameList[1][1] + "</td><td>" + pohCost + " GP each</td></tr>";
            for (var i = 0; i < count; i++) {
                var newItem = randValue(mItemNameList);
                if(newItem[1] != "Uncommon"){
                    newItem = randValue(mItemNameList);
                    if(newItem[1] != "Uncommon" || newItem[1] != "Rare"){
                        newItem = randValue(mItemNameList);
                    }                 
                }
                switch(newItem[1]){
                    case "Common":
                        itemCost = '50 - 100GP';
                        break;
                    case "Uncommon":
                        itemCost = '100 - 500GP';
                        break;
                    case "Rare":
                        itemCost = '500 - 5000GP';
                        break;
                    case "Very Rare":
                        itemCost = '5000 - 50000GP';
                        break;
                    case "Legendary":
                        itemCost = '50000GP+';
                        break;
                    }
                //var calcCost = parseFloat(((itemCost*0.8) + (Math.random()*itemCost*0.4)).toPrecision(2));

                html += "<tr><td>" + newItem[0] + "</td><td>" + newItem[1] + "</td><td>" + itemCost + "</td></tr>";
            }
            html += '</tbody></table>';
            break;
        case 1:
            var html = '<table class="table"><thead><tr><th scope="col">Armour</th><th scope="col">Type</th><th scope="col">Attributes</th><th scope="col">Cost</th></thead><tbody><tr>';
            var armourType;
            for (var i = 0; i <= count; i++) {
                var newItem = randValue(aItemNameList);
                switch(newItem[4]){
                    case "Standard":
                        armourType = asItemTypeList;
                        break;
                    case "Metal":
                        armourType = amItemTypeList;
                        break;
                    case "Leather":
                        armourType = alItemTypeList;
                        break;
                    }
                var newType = randValue(armourType);
                html += "<tr><td>" + newType[0] + " " + newItem[0] + "</td><td>" + newType[1] + "</td><td>" + newItem[3] + "</td><td>" + newItem[2]*newType[2] + " GP</td></tr>";
            }
            html += '</tbody></table>';
            break;
        case 2:
            var html = '<table class="table"><thead><tr><th scope="col">Weapon</th><th scope="col">Attributes</th><th scope="col">Properties</th><th scope="col">Damage</th><th scope="col">Weight</th><th scope="col">Cost</th></thead><tbody><tr>';
            for (var i = 0; i <= count; i++) {
                var newItem = randValue(wItemNameList);
                var newType = randValue(wItemTypeList);
                if(newType[0]!="Standard" || newType[0]=="Mythic" || newType[0]=="Magnificent"){
                    newType = randValue(wItemTypeList);
                    if(newType[0]=="Mythic" || newType[0]=="Magnificent"){
                        newType = randValue(wItemTypeList);
                    }
                }
                var cost = newItem[1]*newType[2];
                var itemVal;
                console.log(cost);
                if(cost < 1){
                    cost = cost*10;
                    if(cost < 1){
                        cost = cost*10;
                        itemVal = Math.ceil(cost) + " CP"
                    } else {
                        itemVal = Math.ceil(cost) + " SP"
                    }                   
                } else {
                    itemVal = Math.ceil(cost) + " GP"
                }
                html += "<tr><td>" + newType[0] + " " + newItem[0] + "</td><td>" + newType[1] + "</td><td>" + newItem[4] + "</td><td>" + newItem[2] + "</td><td>" + newItem[3] + "</td><td>" + itemVal + "</td></tr>";
            }
            html += '</tbody></table>';
            break;
        default:
            break;
    }
    $("#items").append(html);
}

function randomShop() {
    var ri = randIndex(shopNameList);
    document.getElementById('sel1').selectedIndex = ri;
    generateShop();
    generateItems();
}

function randomRace() {
    var ri = randIndex(raceNameList);
    document.getElementById('sel2').selectedIndex = ri;
    generateRace();
}

function randomClass() {
    var ri = randIndex(classNameList);
    document.getElementById('sel3').selectedIndex = ri;
    generateItems();
}

function randomItem() {
    var ri = randIndex(itemNameList);
    document.getElementById('sel4').selectedIndex = ri;
    generateItems();
}

function randValue(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function randIndex(list) {
    return Math.floor(Math.random()*list.length);
}