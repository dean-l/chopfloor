// Example monster text
const monsterData = `Deathlock
Medium Undead (Warlock), Typically Neutral Evil
Armor Class 12 (15 with mage armor)
Hit Points 36 (8d8)
Speed 30 ft.
STR
11 (+0)
DEX
15 (+2)
CON
10 (+0)
INT
14 (+2)
WIS
12 (+1)
CHA
16 (+3)
Saving Throws INT +4, CHA +5
Skills Arcana +4, History +4
Damage Resistances Necrotic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered
Damage Immunities Poison
Condition Immunities Exhaustion, Poisoned
Senses Darkvision 60 ft., Passive Perception 11
Languages the languages it knew in life
Challenge 4 (1,100 XP)
Proficiency Bonus +2

Turn Resistance. The deathlock has advantage on saving throws against any effect that turns Undead.

Unusual Nature. The deathlock doesn’t require air, food, drink, or sleep.
Actions

Multiattack. The deathlock makes two Deathly Claw or Grave Bolt attacks.

Deathly Claw. Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) necrotic damage.

Grave Bolt. Ranged Spell Attack: +5 to hit, range 120 ft., one target. Hit: 14 (2d10 + 3) necrotic damage.

Spellcasting. The deathlock casts one of the following spells, using Charisma as the spellcasting ability (spell save DC 13):

At will: detect magic, disguise self, mage armor, mage hand

1/day each: dispel magic, hunger of Hadar, invisibility, spider climb

`;

  function generateMarkdownStatBlock(monsterData) {
    let lines = monsterData.split("\n").map((line) => line.trim());
  
    let name = lines[0];
    let type = lines[1];
  
    let abilities = {};

    let actionLines = [];
  
    for (let i = 2; i < lines.length; i++) {
      let line = lines[i];
      let currentLine = [];
      if (line === "") {
        continue;
      }
  
      currentLine = line.split(" ");
  
      switch (currentLine[0]) {
        case "Armor":
          abilities.armorClass = currentLine.slice(2, 99).join(" ");
          break;
  
        case "Hit":
          abilities.hitPoints = currentLine.slice(2, 99).join(" ");
          break;
  
        case "Speed":
          abilities.speed = currentLine.slice(1, 99).join(" ");
          break;
  
        case "STR":
        case "DEX":
        case "CON":
        case "INT":
        case "WIS":
        case "CHA":
          abilities[currentLine[0]] = lines[i+1];
          break;
  
        case "Damage":
          if (currentLine[1] == "Resistances") {
            abilities.damageResistances = currentLine.slice(2, 99).join(" ");
          } else {
            abilities.damageImmunities = currentLine.slice(2, 99).join(" ");
          }
          break;
  
        case "Condition":
          abilities.conditionImmunities = currentLine.slice(2, 99).join(" ");
          break;
  
        case "Senses":
          abilities.senses = currentLine.slice(1, 99).join(" ");
          break;
  
        case "Languages":
          abilities.languages = currentLine.slice(1, 99).join(" ");
          break;
  
        case "Challenge":
          abilities.challenge = currentLine.slice(1, 99).join(" ");
          break;
  
        case "Proficiency":
          abilities.proficiencyBonus = currentLine.slice(2, 99).join(" ");
          break;
        
        case "Saving":
          abilities.savingThrows = currentLine.slice(2, 99).join(" ");
          break;
  
        case "Skills":
          abilities.skills = currentLine.slice(1, 99).join(" ");
          break;

        default:
          if (i>16) {
            if (line.includes(".") && line.indexOf(".") != line.length-1) {
              actionLines.push(line.split("."));
            } else if (line.includes(":") && line.indexOf(":") != line.length-1) {
              actionLines.push(line.split(":"));
            } else {
              actionLines.push(["None", line]);
            }
          }
      }
    }
      
    // Build the Markdown stat block
    let markdown = `{{monster,wide\n`;
    markdown += `## ${name}\n`;

    if (type) {
      markdown += `*${type}*\n`;
    }

    markdown += `___\n`;
    markdown += `**Armor Class** :: ${abilities.armorClass}\n`;
    markdown += `**Hit Points** :: ${abilities.hitPoints}\n`;
    markdown += `**Speed** :: ${abilities.speed}\n`;
    markdown += `___\n`;

    // Ability scores
    markdown += `|STR|DEX|CON|INT|WIS|CHA|\n`;
    markdown += `|:-:|:-:|:-:|:-:|:-:|:-:|\n`;
    markdown += `|${abilities.STR}|${abilities.DEX}|${abilities.CON}|${abilities.INT}|${abilities.WIS}|${abilities.CHA}|\n`;
    markdown += `___\n`;

    if (abilities.savingThrows) {
      markdown += `**Saving Throws** :: ${abilities.savingThrows}\n`;
    }

    if (abilities.skills) {
      markdown += `**Skills** :: ${abilities.skills}\n`;
    }

    if (abilities.damageImmunities) {
      markdown += `**Damage Immunities** :: ${abilities.damageImmunities}\n`;
    }

    if (abilities.damageResistances) {
      markdown += `**Damage Resistances** :: ${abilities.damageResistances}\n`;
    }

    if (abilities.conditionImmunities) {
      markdown += `**Condition Immunities** :: ${abilities.conditionImmunities}\n`;
    }

    if (abilities.senses) {
      markdown += `**Senses** :: ${abilities.senses}\n`;
    }

    if (abilities.languages) {
      markdown += `**Languages** :: ${abilities.languages}\n`;
    }

    if (abilities.challenge) {
      markdown += `**Challenge** :: ${abilities.challenge}\n`;
    }

    if (abilities.proficiencyBonus) {
      markdown += `**Proficiency Bonus** :: ${abilities.proficiencyBonus}\n`;
    }

    markdown += `___\n`;

    actionLines.forEach(actionLine => {
      if (actionLine[0] === "None") {
        if (actionLine[1] === "Actions") {
          markdown += `### Actions\n`;
        } else if (actionLine[1] === "Bonus Actions") {
          markdown += `### Bonus Actions\n`;
        } else if (actionLine[1] === "Reactions") {
          markdown += `### Reactions\n`;
        } else {
          markdown += `${actionLine.splice(1).join(".")}\n`;
        }
      } else {
        markdown += `***${actionLine[0]}*** ${actionLine.splice(1).join(".")}\n`;
      }
      markdown += `:\n`
    });
    markdown += `}}`;

    console.log(markdown);
  }

  generateMarkdownStatBlock(monsterData)