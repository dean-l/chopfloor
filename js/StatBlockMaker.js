// Example monster text
const monsterData = `Hydra
Huge Monstrosity, Unaligned
Armor Class 15 (natural armor)
Hit Points 172 (15d12 + 75)
Speed 30 ft., swim 30 ft.
STR
20 (+5)
DEX
12 (+1)
CON
20 (+5)
INT
2 (-4)
WIS
10 (+0)
CHA
7 (-2)
Skills Perception +6
Senses Darkvision 60 ft., Passive Perception 16
Languages --
Challenge 8 (3,900 XP)
Proficiency Bonus +3

Hold Breath. The hydra can hold its breath for 1 hour.

Multiple Heads. The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.

Whenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies.

At the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The hydra regains 10 hit points for each head regrown in this way.

Reactive Heads. For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks.

Wakeful. While the hydra sleeps, at least one of its heads is awake.
Actions

Multiattack. The hydra makes as many bite attacks as it has heads.

Bite. Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10 + 5) piercing damage.

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