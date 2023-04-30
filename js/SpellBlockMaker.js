// Example monster text
const spellData = `Ice Storm
Level
4th
Casting Time
1 Action
Range/Area
300 ft (20 ft *)
Components
V, S, M *
Duration
Instantaneous
School
Evocation
Attack/Save
DEX Save
Damage/Effect
Bludgeoning (...)

A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one.

Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn.

At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th.
* - (a pinch of dust and a few drops of water) 
`;

  function generateMarkdownSpellBlock(spellData) {
    let lines = spellData.split("\n").map((line) => line.trim());
  
    let spell = {};
    spell.name = lines[0];
    spell.level = lines[2];
    spell.castingTime = lines[4];
    spell.range = lines[6];
    spell.components = lines[8].split("*")[0].trim();
    spell.duration = lines[10];
    spell.school = lines[12];
    spell.save = lines[14];
    spell.damage = lines[16];
    for (let i = 17; i < lines.length; i++) {
        spell.text += `${lines[i]}\n`;
    }
    if (lines[lines.length-2].includes("*")) {
        spell.material = lines[lines.length-2].split("*")[1].split("-")[1].trim();
    } else {
        spell.material = "";
    }
      
    // Build the Markdown stat block
    let markdown = `#### ${spell.name}\n`;

      markdown += `*${spell.level}-level ${spell.school}*\n`;

    markdown += `\n`;
    markdown += `**Casting Time:** :: ${spell.castingTime}\n`;
    markdown += `**Range:** :: ${spell.range}\n`;
    markdown += `**Components:** :: ${spell.components} ${spell.material}\n`;
    markdown += `**Duration:** :: ${spell.duration}\n`;
    markdown += `\n`;

    // Spell Text
    markdown += `${spell.text}`;

    console.log(markdown);
  }

  generateMarkdownSpellBlock(spellData)