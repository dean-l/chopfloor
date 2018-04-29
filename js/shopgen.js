$(document).ready(function(){
    generate();
    
});

var shopNameList = ["magic", "armour", "weapon", "textile"];
var mShopNameList1 = ["Abracapothecary", "Abrakadabra", "Ace High", "Angels", "Demons", "Arcane Affinities", "Arcane Treasures", "Arcanes", "Augury and Alchemy", "Bona Fida", "Botanica Magica", "Celestial Spells", "Cures and Curses", "Darkness and Lightness", "Demons and Daemons", "Dispel and That Spell", "Doves and Pigeons", "Dragonfire", "Eagle's Eye", "Embers and Ashes", "Faerie Fire", "Fantasma", "Fortunes and Luck", "Genie's Lantern", "Genius in a Bottle", "Ghosts 'n Stuff", "Ghosts and Phantoms", "Gobl-Inn", "Gorgons and Gremlins", "Griffins and Gargoyles", "Heaven's Door", "Hell's Gate", "Herbs and Lotions", "Hexes and Jinxes", "Hocus Pocus", "Hocusses and Pocusses", "Horoscopes and Heroscopes", "Illuminations", "Invisibility and Invincibility", "Ki and Chi", "Nostrum Arcade", "Omnipharmacon", "Orbs and Talismans", "Palindrome", "Pandora", "Pandora's Box", "Pharmagician", "Pixie Dust", "Polymorph", "Portable Potents", "Potions and Cauldrons", "Potions and Lotions", "Rainbows and Sunshine", "Runes and Relics", "Runes and Rods", "Shades and Shadows", "Shifted Polarity", "Siphons and Souls", "Smoke and Mirrors", "Solutions", "Solutions and Answers", "Spellbound", "Spellunking", "Spheres and Orbs", "Sprites and Spirits", "Staves and Stoves", "Sticks and Stones", "Taboos and Voodoos", "Telekinesis and Telepathy", "The Acolyte", "The Alchemist", "The Animorph", "The Arcane Barrier", "The Arcane Gateway", "The Arcane Scroll", "The Archangel", "The Banished Beast", "The Banshee's Scream", "The Belly of the Beast", "The Black Couldron", "The Blink", "The Blissful Blizzard", "The Blood Pact", "The Bloodstone", "The Blue Moon", "The Book of Riddles", "The Bound Tome", "The Bramble Staff", "The Broken Vial", "The Cat In The Hat", "The Champion's Scroll", "The Charm", "The Cloak and Dagger", "The Cloak of Invisibility", "The Companion", "The Cone of Cold", "The Conjured Refreshment", "The Counterspell", "The Crystal Ball", "The Dark Flame", "The Daydream", "The Decoy", "The Devil's Key", "The Dew Drop", "The Double Whammy", "The Dragon Aspect", "The Dragon Dungeon", "The Dragon Seal", "The Dragon Slayer", "The Dragon's Breath", "The Dragonhide", "The Dusty Tome", "The Dwarven Beard", "The Ectoplasm", "The Elder Scroll", "The Elemental Fury", "The Equinox", "The Ethereal", "The Evil Eye", "The Eye of Newt", "The Falling Feather", "The Familiar", "The Faulty Dice", "The Fel Steed", "The Fifth Element", "The Final Form", "The Fireball", "The Flying Carpet", "The Force Field", "The Frosty Finger", "The Giant Gnome", "The Golden Lead", "The Grey Beard", "The Halberdashery", "The Holy Grail", "The Hourglass", "The Illusion", "The Last Spell", "The Laughing Leprichaun", "The Laughing Skull", "The Life Drain", "The Little Bunyip", "The Little Pixie", "The Living Statue", "The Magic Box", "The Magic Dart", "The Magnet", "The Minotaur Maze", "The Mirage", "The Mirror Image", "The Mistletoe", "The Mithril Mantle", "The Mystery", "The Mystic Mythic", "The Nether and Void", "The Nightmare", "The Ninth Life", "The Pegasus", "The Pestle and Mortar", "The Philosopher's Stone", "The Phoenix Feather", "The Plane Walker", "The Portal", "The Prophecy", "The Quiet Ritual", "The Raven's Message", "The Raven's Quill", "The Red Slippers", "The Revelation", "The Ring of Life", "The Risen Phoenix", "The Royal Frog", "The Rune", "The Second Chance", "The Shooting Star", "The Silver Bullet", "The Silver Spoon", "The Siphon", "The Siren's Song", "The Skeleton Closet", "The Sleeping Owl", "The Sleight of Hand", "The Soothsayer", "The Sorcerer's Source", "The Soul Apothecary", "The Soulstone", "The Spell Counter", "The Sphere", "The Spirit Walk", "The Stone in the Sword", "The Summoned Goods", "The Summoning Scroll", "The Sword in the Stone", "The Talisman", "The Tenth Ring", "The Third Wish", "The Time Warp", "The Tinkered Tiara", "The Trick Sleeve", "The Twilight Zone", "The Twinkle Star", "The Twisting Nether", "The Unicorn", "The Unicorn's Horn", "The Vision", "The Voodoo Doll", "The Wand's Want", "The Water Elemental", "The White Beard", "The White Dove", "The Wishbone", "The Witch's Nose", "The Wooden Stake", "The Wyrm and the Worm", "Tinctures 'n Tonics", "Tomes and Tiaras", "Trident Trinity", "Trinkets and Tronkets", "Triton's Tident", "Wizard's Mail"];
var mShopNameList2 = ["Adorable", "Affordable", "Aggressive", "Amazing", "Amusing", "Ancient", "Angry", "Antique", "Awesome", "Awkward", "Baby", "Bathing", "Big", "Bigger", "Bitter", "Ebon", "Bleeding", "Blind", "Blushing", "Brass", "Bright", "Brilliant", "Bronze", "Brown", "Cheap", "Cheating", "Cheering", "Clean", "Clever", "Common", "Corrupt", "Corrupted", "Crafty", "Crazy", "Creeping", "Cuddly", "Curly", "Dancing", "Dapper", "Dark", "Dirty", "Dizzy", "Dreaming", "Eager", "Early", "Elder", "Elegant", "Elementary", "Evil", "Exalted", "Expert", "Fading", "Fair", "Fake", "False", "Famous", "Fancy", "Fantastic", "Fast", "Flimsy", "Fluffy", "Forsaken", "Frozen", "Gentle", "Glass", "Glowing", "Golden", "Graceful", "Greedy", "Green", "Grim", "Grumpy", "Hairy", "Happy", "Haunting", "Heavy", "Hidden", "Huge", "Humble", "Hungry", "Invincible", "Invisible", "Iron", "Jolly", "Kind", "Large", "Last", "Laughing", "Lazy", "Light", "Little", "Lonely", "Loving", "Lucky", "Mad", "Majestic", "Mellow", "Merry", "Naughty", "Needy", "New", "Nutty", "Old", "Phony", "Plain", "Pretty", "Quick", "Quiet", "Rapid", "Rare", "Royal", "Scary", "Screaming", "Second", "Secret", "Serene", "Shady", "Silly", "Silver", "Sleeping", "Small", "Sneaky", "Steel", "Storm", "Striped", "Tall", "Thunder", "Tiny", "Tired", "Weeping", "Wicked", "Wild", "Wise"];
var mShopNameList3 = ["Amulet", "Angel", "Artifact", "Banshee", "Basilisk", "Beacon", "Bigfoot", "Blade", "Book", "Boots", "Branch", "Bunyip", "Cauldron", "Centaur", "Cerberus", "Chimera", "Chupacabra", "Cloak", "Cockatrice", "Codex", "Crown", "Cupid", "Cyclops", "Demon", "Dragon", "Draugr", "Dryad", "Dwarf", "Elemental", "Elf", "Ent", "Fairy", "Faun", "Feathered Serpent", "Focus", "Gargoyle", "Gauntlet", "Genie", "Ghost", "Giant", "Gnome", "Gorgon (Medussa)", "Gremlin", "Griffin", "Grim Reaper", "Hag", "Harpy", "Hellhound", "Hippocampus", "Hippogriff", "Hobbit", "Hobgoblin", "Hourglass", "Human", "Hydra", "Imp", "Incubus/Succubus", "Jackalope", "Key", "Kobold", "Kraken", "Leprechaun", "Lich", "Lute", "Manticore", "Marker", "Mermaid", "Minotaur", "Mummy", "Naga", "Nymph", "Ogre", "Orb", "Pegasus", "Phoenix", "Pixie", "Poltergeist", "Quill", "Ring", "Robe", "Roc", "Rune", "Sandman", "Sasquatch", "Satyr", "Scepter", "Scroll", "Seal", "Shapeshifter", "Shield", "Siren", "Skeleton", "Skull", "Sphere", "Sphinx", "Spriggan", "Sprite", "Staff", "Stone", "Sword", "Talisman", "Tiara", "Tome", "Troll", "Unicorn", "Valkyrie", "Vampire", "Vial", "Wand", "Wendigo", "Werecat", "Werewolf", "White Stag", "Winged Lion", "Winged Unicorn", "Wisp", "Wolpertinger", "World Turtle", "Wraith", "Wyvern", "Yeti", "Zombie"];
var aShopNameList = ["Armoursmith Name 1", "Armoursmith Name 2", "Armoursmith Name 3", "Armoursmith Name 4", "Armoursmith Name 5", "Armoursmith Name 6", "Armoursmith Name 7", "Armoursmith Name 8"];
var wShopNameList = ["Weaponsmith Name 1", "Weaponsmith Name 2", "Weaponsmith Name 3", "Weaponsmith Name 4", "Weaponsmith Name 5", "Weaponsmith Name 6", "Weaponsmith Name 7", "Weaponsmith Name 8"];
var tShopNameList = ["Textile Shop Name 1", "Textile Shop Name 2", "Textile Shop Name 3", "Textile Shop Name 4", "Textile Shop Name 5", "Textile Shop Name 6", "Textile Shop Name 7", "Textile Shop Name 8"];

var raceNameList = ["Human", "Gnome", "Half-elf", "Wood Elf", "High Elf", "Jungle Elf", "Dwarf", "Halfling", "Tiefling", "Half-orc", "Dragomborn"];
var statList = ["Strong", "hardy", "charismatic", "wise", "inteligent", "skilled", "sneaky", "bright", "fast", "lazy", "slow", "Young", "old", "attractive", "bald", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly", "aggressive", "agreeable", "ambitious", "brave", "calm", "delightful", "eager", "faithful", "gentle", "happy", "jolly", "kind", "lively", "nice", "obedient", "polite", "proud", "silly", "thankful", "victorious", "witty", "wonderful", "zealous", "angry", "bewildered", "clumsy", "defeated", "embarrassed", "fierce", "grumpy", "helpless", "itchy", "jealous", "lazy", "mysterious", "nervous", "obnoxious", "panicky", "pitiful", "repulsive", "scary", "thoughtless", "uptight", "worried"];
var hfRaceNameList = ["Eugene", "Herman", "Peter", "Frederick", "Floyd", "Michael", "Ray", "Lewis", "Claude", "Clyde", "Edwin", "Tom", "Martin", "Leonard", "Ben", "Chester", "Edgar", "Jim", "Harvey", "Russell", "Lester", "Clifford", "Luther", "Homer", "Jacob", "Leroy", "Otto", "Guy", "Lloyd", "Anthony", "Jessie", "Hugh", "Ed", "Bernard", "Theodore", "Stanley", "Eddie", "Patrick", "Philip", "Leon", "Archie", "Leslie", "Oliver", "Allen", "Alexander", "Dewey", "Ira", "Everett", "Norman", "Horace", "Victor", "Cecil", "Donald", "Charley", "Milton", "Isaac", "Stephen", "Julius", "August", "Bert", "Alvin", "Sidney", "Percy", "Marion", "Glenn", "Grover", "Warren", "Alex", "Emil", "Earnest", "Mack", "Wesley", "Otis", "Virgil", "Willis", "Melvin", "Kenneth", "Rufus", "Dave", "Dan", "Maurice", "Willard", "Lonnie", "Morris", "Vernon", "Gilbert", "Wallace", "Nathan", "Johnnie", "Jerry", "Wilbur", "Emmett", "Matthew", "Max", "Calvin", "Marvin", "Hubert", "Vincent", "Amos", "Jess", "Rudolph", "Harrison", "Perry", "Franklin", "Sylvester", "Glen", "Mark", "Manuel", "Jose", "Adolph", "Gordon", "Curtis", "Dennis", "Nelson", "Ollie", "Jay", "Marshall", "Elbert", "Felix", "Bennie", "Irving", "Josephine", "Mattie", "Jennie", "Jessie", "Maude", "Alma", "Mae", "Blanche", "Dorothy", "Ada", "Lucy", "Lula", "Mamie", "Fannie", "Stella", "Katherine", "Viola", "Ruby", "Dora", "Maggie", "Nora", "Rosa", "Beatrice", "Ellen", "Sadie", "Marion", "Willie", "Effie", "May", "Beulah", "Pauline", "Nettie", "Susie", "Della", "Marguerite", "Vera", "Daisy", "Lydia", "Virginia", "Olive", "Kathryn", "Evelyn", "Sallie", "Lizzie", "Lottie", "Emily", "Georgia", "Flora", "Nancy", "Katie", "Lucille", "Leona", "Charlotte", "Eleanor", "Hilda", "Theresa", "Ann", "Etta", "Addie", "Caroline", "Ollie", "Anne", "Lola", "Harriet", "Iva", "Bernice", "Henrietta", "Lela", "Jane", "Ora", "Amanda", "Amelia", "Inez", "Rebecca", "Susan", "Mollie", "Nannie", "Goldie", "Estelle", "Loretta", "Nina", "Maud", "Rachel", "Eula", "Matilda", "Eunice", "Lois", "Betty", "Mable", "Estella", "Marjorie", "Sara", "Violet", "Essie", "Amy", "Verna", "Sylvia", "Hannah", "Kate", "Olga", "Rosie", "Genevieve", "Flossie", "Maria", "Alta", "Barbara", "Frieda", "Eliza", "Lulu", "Ola", "Augusta", "Christine", "Sophia", "Belle", "Victoria", "Sophie", "Lucile", "Irma", "Ina", "Jean", "Thelma"];
var hlRaceNameList = ["Abram", "Acton", "Addington", "Adley", "Ainsley", "Ainsworth", "Alby", "Allerton", "Alston", "Altham", "Alton", "Anderton", "Ansley", "Appleton", "Asheton", "Ashley", "Ashton", "Astley", "Atherton", "Atterton", "Axton", "Badger", "Barclay", "Barlow", "Barney", "Barton", "Beckwith", "Benson", "Bentham", "Bentley", "Berkeley", "Beverly", "Bing", "Birkenhead", "Blackwood", "Blakeley", "Blakely", "Blankley", "Blyth", "Blythe", "Bradford", "Bradley", "Bradly", "Bradshaw", "Brady", "Brandon", "Branson", "Braxton", "Breeden", "Brent", "Bristol", "Brixton", "Browning", "Brownrigg", "Budd", "Burton", "Byron", "Camden", "Carlisle", "Carlton", "Carlyle", "Cason", "Charlton", "Chatham", "Chester", "Cholmondeley", "Churchill", "Clapham", "Clare", "Clayden", "Clayton", "Clifford", "Clifton", "Clinton", "Clive", "Colby", "Colton", "Compton", "Coombs", "Copeland", "Cornish", "Cotton", "Crawford", "Cromwell", "Cumberbatch", "Dalton", "Darby", "Darlington", "Davenport", "Dayton", "Deighton", "Denholm", "Digby", "Dryden", "Dudley", "Eastaughffe", "Eastoft", "Easton", "Elton", "Emsworth", "Enfield", "England", "Everleigh", "Everly", "Fawcett", "Fulton", "Garfield", "Garrick", "Gladstone", "Graeme", "Graham", "Gresham", "Hackney", "Hadlee", "Hadleigh", "Hadley", "Hailey", "Hale", "Haley", "Hallewell", "Halsey", "Hamilton", "Hampton", "Harlan", "Harley", "Harlow", "Harrington", "Hartford", "Hastings", "Hayden", "Hayes", "Hayhurst", "Hayley", "Holton", "Home", "Hornsby", "Huckabee", "Huxley", "Kelsey", "Kendal", "Kendall", "Kenley", "Kensley", "Kent", "Kimberley", "Kimberly", "Kinsley", "Kirby", "Lancaster", "Landon", "Langdon", "Langley", "Langston", "Law", "Leighton", "Lester", "Lincoln", "Lindsay", "Lindsey", "Livingstone", "Marlee", "Marleigh", "Marley", "Marlowe", "Marston", "Merton", "Middleton", "Milton", "Mitchell", "Morley", "Morton", "Myerscough", "Nash", "Nibley", "Northcott", "Norton", "Oakes", "Oakley", "Ogden", "Paxton", "Payton", "Perry", "Peyton", "Pickering", "Pinkerton", "Prescott", "Presley", "Preston", "Quinton", "Ramsay", "Ramsey", "Rayden", "Read", "Redfield", "Reed", "Reid", "Remington", "Ridley", "Riley", "RodneyRoscoe", "Rowley", "Royal", "Royston", "Rutherford", "Rutland", "Rylan", "Ryland", "Ryley", "Shelby", "Sheldon", "Shelley", "Shelly", "Sherwood", "Shipley", "Shirley", "Snape", "Snowdon", "Soames", "Southey", "Spalding", "Spaulding", "Springfield", "Stafford", "Stanford", "Stanley", "Stansfield", "Stanton", "Stapleton", "Stratford", "Sutherland", "Sutton", "Sydney", "Tattersall", "Tatum", "Tenley", "Tewksbury", "Thackeray", "Thornton", "Thorpe", "Tickle", "Tindall", "Tinley", "Trollope", "Tyndall", "Upton", "Vance", "Wade", "Wakefield", "Walcott", "Wallace", "Walpole", "Warwick", "Washington", "Webley", "Wedgwood", "Weld", "Wellington", "Wentworth", "Wesley", "Westbrook", "Westcott", "Weston", "Wharton", "Wheatley", "Whitby", "Wilberforce", "Willoughby", "Winchester", "Windsor", "Winterbourne", "Winthrop", "Wordsworth", "Yardley", "Yeardley", "York", "Yorke"];
var gRaceNameList = ["Abdieso", "Abrasha", "Abdiel", "Bahar", "Caspar", "Cy", "Evzen", "Fariel", "Javed", "Kazimir", "Khorshed", "Khortdad", "Rashne", "Roshan", "Sarosh", "Shah", "Shahar", "Siamak", "Syrus", "Xanti", "Xerxes", "Ximun", "Yuriel", "Zalmon", "Zircon", "Zoroaster", "Anezka", "Arezou", "Kira", "Kismet", "Marjeta", "Nadezda", "Nasrin", "Parisa", "Sadira", "Shahnaz", "Shirin", "Soraya", "Vashti", "Viera", "Verushka", "Xantiya", "Yasmin", "Yasmina", "Zenda", "Zerushda", "Zuleika", "Zuriaa", "Zuza", "Zuzana"];
var eRaceNameList = ["Aialon", "Alwinar", "Cassius", "Elarahal", "Eladio", "Jiardem", "Laern", "Lelyrian", "Lephyrr", "Loray", "Sayadar", "Talonien", "Vaerlan", "Allyria", "Ayrdra", "Aylwin", "Deneth", "Elseone", "Etherea", "lstiria", "Karanwyn", "Lavinia", "Leandra", "Levana", "Lieryn", "Ondine", "Orianna", "Ravel", "Sidonie", "Sinariel", "Sydri", "Taris", "Turue", "Vacquiel", "Valendra", "Aelius", "Lantherval", "Lorhalien", "Maldranthe", "Shalbarain", "Sirothian", "Starfeon", "Zolerii", "Ol6rie", "Virion", "Elinde", "Fimion", "Arce", "Parintar", "Nintur", "Tyenganderil", "Telacil", "Sume", "Falandil", "Milmilion", "- Altarinque", "Emirie", "Volmarrion", "Salmo", "Elaminwe", "Teluin", "Vininorne", "Ericuril", "Faranenya", "Anuril", "Anentuile", "Elindasil", "Arumil", "Eandil", "Elandur", "Eanar", "Varendil", "Liremalda", "Sorion", "Nore", "Velie", "Eldimure", "Lurfalion", "Nenya", "Finwe", "Carie", "Uland6re", "Carilinde", "Nende", "Maitamo", "Turaquar", "Aldiramo", "Alarcion", "Alathar", "Ariandar", "Arromar", "Borel", "Bvachan", "Carydion", "Callis", "Cyprian", "Dusan", "Elgoth", "Farlien", "Ferel", "Gaerlan", "lafalior", "Kaelthorn", "Laethan", "Leliar", "Leodor", "Lorak", "Lorifir", "Morian", "Miklos", "Oleran", "Rylef", "Savian", "Seylas", "Tevior", "Veyas", "Aryllan", "Atalya", "Ayrthwil", "Clorinda", "lrva", "Lyfalia", "Milena", "Olethea", "Ronefel", "Shayndel", "Thirya", "Velene", "Venefiq", "Zereni", "Autumnloft", "Balefrost", "Briarfell", "Evenwind", "Graytrails", "· Mooncairn", "Riverwall", "Stormwolf", "Summergale", "Sunshadow", "Woodenhawk", "Hadir", "Belecthan", "Sandir", "Dundor", "Galadilion", "Celegur", "Borongil", "Glonor", "Amrienor", "Andrei", "Thiras", "Athorfin", "Celeval", "llathriel", "Milduin", "Celevorn", "Berethir", "Golfalas", "Andel", "Nirwen", "Nirion", "Gundrel", "Ongor", "Ralfin", "Cindor", "Aragil", "Elevreth", "Ethrion", "Emellion", "Anduin", "Gl6rendil", "Galaduil", "Filrion", "Galathrath", "Merchel", "Belegor", "Andronel", "Aglaril", "Araval", "Galathorn", "Daerondor", "Rimranion", "Duiril", "Endring", "Duinir", "Bregor", "Elweniel", "Angwil", "Thoronor", "Andrilion", "Gelduin", "Ethrond", "Arathor", "Nur", "Fingund", "Mirdor", "Ilathriel"];
var kRaceNameList = eRaceNameList.concat(hfRaceNameList);
var dRaceNameList = ["Agaro", "Aman", "Arval", "Auxlan", "Avamir", "Baelnar", "Balfam", "Bariken", "Borkul", "Darkul", "Dolmen", "Dyrnar", "Erag", "Ezegan", "Ferrek", "Garmul", "Glint", "Ghorvas", "Grimmalk", "Haeltar", "Hagan", "Halagmar", "Halzar", "Hlant", "Korlag", "Krag", "Krim", "Kurman", "Lurtrum", "Malagar", "Mardam", "Maulnar", "Melgar", "Morak", "Orobok", "Radek", "Rogath", "Roken", "Rozag", "Sabakzar", "Sharak", "Smethykk", "Swargar", "Thorbalt", "Thorin", "Tredigar", "Vabul", "Vistrum", "Wolvar", "Beyla", "Fenryl", "Freyde", "Grenenzel", "Krystolari", "Lokara", "Lurka", "Marnia", "Praxana", "Rokel", "Roksana", "Thurlfara", "Vauldra", "Veklani", "Vronwe", "Zebel", "Ambershard", "Barrelhelm", "Copperhearth", "Deepmiddens", "Drakantal", "Evermead", "Garkalan", "Grimtor", "Hackshield", "lrongull", "Markolak", "Ramcrown", "Rockharvest", "Silvertarn", "Skandalor", "Zarkanan"];
var lRaceNameList = ["Arthan", "Bennet", "Bodo", "Carvin", "Chas", "Corby", "Cullen", "Egen", "Ernest", "Falk", "Gedi", "Heron", "Jeryl", "Jet", "Jiri", "Keffen", "Kylem", "Kynt", "Leskyn", "Libo", "Neff", "Orne", "Paddy", "Pipo", "Poe", "Quarrel", "Rabbit", "Rilkin", "Rollo", "Snakebait", "Tarfen", "Titch", "Tuck", "Whim", "Caliope", "Emily", "Holli", "Jinx", "Joy", "Lilac", "Lily", "Minka", "Orchid", "Piper", "Rixi", "Rosabelle", "Sabretha", "Sierra", "Teg", "Tilly", "Tillip", "Toira", "Vexia", "Vil", "Vzani", "Zanthe", "Ziza", "Battlestone", "Blackwater", "Daggersharp", "Deepstrider", "Hollowpot", "Oleander", "Puddle", "Raftmite", "Skiprock", "Silverfin", "Tanglestrand", "Tricker", "Willowrush", "Yellowcrane"];

var classNameList = ["High", "Middle", "Low"];

var itemNameList = ["Scarce", "Available", "Plentiful"];
var mItemNameList = [["Item worth 10gp", 10], ["Item worth 20gp", 20], ["Item worth 30gp", 30], ["Item worth 10gp", 30], ["Item worth 40gp", 40], ["Item worth 50gp", 50], ["Item worth 60gp", 60], ["Item worth 70gp", 70], ["Item worth 70gp", 70], ["Item worth 80gp", 80], ["Item worth 90gp", 90], ["Item worth 100gp", 100], ["Item worth 110gp", 110], ["Item worth 120gp", 120], ["Item worth 130gp", 130], ["Item worth 140gp", 140], ["Item worth 150gp", 150], ["Item worth 160gp", 160], ["Item worth 160gp", 160], ["Item worth 170gp", 170], ["Item worth 180gp", 180], ["Item worth 190gp", 190], ["Item worth 200gp", 200], ["Item worth 210gp", 210], ["Item worth 250gp", 250], ["Item worth 220gp", 220], ["Item worth 230gp", 230], ["Item worth 240gp", 240], ];
var aItemNameList = [["Armour worth 10gp", 10], ["Armour worth 20gp", 20], ["Armour worth 30gp", 30], ["Armour worth 10gp", 30], ["Armour worth 40gp", 40], ["Armour worth 50gp", 50], ["Armour worth 60gp", 60], ["Armour worth 70gp", 70], ["Armour worth 70gp", 70], ["Armour worth 80gp", 80], ["Armour worth 90gp", 90], ["Armour worth 100gp", 100], ["Armour worth 110gp", 110], ["Armour worth 120gp", 120], ["Armour worth 130gp", 130], ["Armour worth 140gp", 140], ["Armour worth 150gp", 150], ["Armour worth 160gp", 160], ["Armour worth 160gp", 160], ["Armour worth 170gp", 170], ["Armour worth 180gp", 180], ["Armour worth 190gp", 190], ["Armour worth 200gp", 200], ["Armour worth 210gp", 210], ["Armour worth 250gp", 250], ["Armour worth 220gp", 220], ["Armour worth 230gp", 230], ["Armour worth 240gp", 240], ];
var aItemTypeList = [["Standard", "No additional benefit", 1], ["Tough", "Resistant to bludgeoning", 1.5], ["Adamantite", "Immune to crit damage", 2.5], ["Red Dragon", "Resistant to fire damage", 5], ["Blue Dragon", "Resistant to cold damage", 5]];
var wItemNameList = [["Weapon worth 10gp", 10], ["Weapon worth 20gp", 20], ["Weapon worth 30gp", 30], ["Weapon worth 10gp", 30], ["Weapon worth 40gp", 40], ["Weapon worth 50gp", 50], ["Weapon worth 60gp", 60], ["Weapon worth 70gp", 70], ["Weapon worth 70gp", 70], ["Weapon worth 80gp", 80], ["Weapon worth 90gp", 90], ["Weapon worth 100gp", 100], ["Weapon worth 110gp", 110], ["Weapon worth 120gp", 120], ["Weapon worth 130gp", 130], ["Weapon worth 140gp", 140], ["Weapon worth 150gp", 150], ["Weapon worth 160gp", 160], ["Weapon worth 160gp", 160], ["Weapon worth 170gp", 170], ["Weapon worth 180gp", 180], ["Weapon worth 190gp", 190], ["Weapon worth 200gp", 200], ["Weapon worth 210gp", 210], ["Weapon worth 250gp", 250], ["Weapon worth 220gp", 220], ["Weapon worth 230gp", 230], ["Weapon worth 240gp", 240], ];
var wItemTypeList = [["Silvered", "Silvered blade", 1.5], ["Standard", "No additional benefit", 1], ["Masterful", "+1 to attack and damage", 5], ["Magnificent", "+2 to attack and damage", 20], ["Mythic", "+3 to attack and damage", 20], ["Adamantine", "Negates non-magic resistances", 3], ["Flame Tounge", "+2d6 fire damage", 10], ];

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
            if (Math.random() > 0.5){
                var fname;
                var name = "(City Name)";
                if (Math.random() > 0.5){
                    fname = $('#pname').text().split(" ");
                    name = randValue(fname);
                } 
                shop = name + "'s " + randValue(mShopNameList1);
            } else {
                shop = "The " + randValue(mShopNameList2) + " " + randValue(mShopNameList3);
            }
            break;
        case 1:
            shop = randValue(aShopNameList);
            break
        case 2:
            shop = randValue(wShopNameList);
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
            fullName = randValue(dRaceNameList) + " " + randValue(dRaceNameList);
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
            count = 15;
            break
        case 2:
            count = 25;
            break;
    }
    var shopClass = Number(document.getElementById('sel3').selectedIndex);
    switch(Number(document.getElementById('sel1').selectedIndex)) {
        case 0:
            var html = '<table class="table"><thead><tr><th scope="col">Item</th><th scope="col">Cost</th></thead><tbody><tr>';
            for (var i = 0; i <= count; i++) {
                var newItem = randValue(mItemNameList);
                html += "<tr><td>" + newItem[0] + "</td><td>" + Math.ceil(newItem[1]+(newItem[1]*0.1*shopClass*Math.random())) + "GP</td></tr>";
            }
            html += '</tbody></table>';
            break;
        case 1:
            var html = '<table class="table"><thead><tr><th scope="col">Armour</th><th scope="col">Attributes</th><th scope="col">Cost</th></thead><tbody><tr>';
            for (var i = 0; i <= count; i++) {
                var newItem = randValue(aItemNameList);
                var newType = randValue(aItemTypeList);
                html += "<tr><td>" + newType[0] + " " + newItem[0] + "</td><td>" + newType[1] + "</td><td>" + newItem[1]*newType[2] + "GP</td></tr>";
            }
            html += '</tbody></table>';
            break;
        case 2:
            var html = '<table class="table"><thead><tr><th scope="col">Weapon</th><th scope="col">Attributes</th><th scope="col">Cost</th></thead><tbody><tr>';
            for (var i = 0; i <= count; i++) {
                var newItem = randValue(wItemNameList);
                var newType = randValue(wItemTypeList);
                html += "<tr><td>" + newType[0] + " " + newItem[0] + "</td><td>" + newType[1] + "</td><td>" + newItem[1]*newType[2] + "GP</td></tr>";
            }
            html += '</tbody></table>';
            break;
        case 2:
        default:
            break;
    }
    console.log(html);
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