import { raceNameList, statList, hfRaceNameList, hlRaceNameList, gRaceNameList, eRaceNameList, kRaceNameList, dm1RaceNameList, dm2RaceNameList, df1RaceNameList, df2RaceNameList, dlRaceNameList, lRaceNameList } from './raceList.js'
import { monsterListQuater, monsterListHalf, monsterList1, monsterList2, monsterList3, monsterList4, monsterList5 } from './monsterList.js'
import { stuffList, tItemNameList, mcItemNameList, muItemNameList, wItemNameList } from './itemList.js'
import { plotHookLocations, plotHookReasons } from './hookList.js'
import { placeListStart, placeListEnd, placeIndustry } from './placeList.js'

$(document).ready(function(){
    randomise()
});

var title;
var plotHook;
var setting;
var npc;
var monster1;
var monster2;
var words;

var startWord = ["b", "br", "c", "d", "dr", "g", "gh", "gr", "k", "kr", "m", "n", "ph", "q", "qh", "qr", "r", "t", "th", "v", "x", "z", "", "", "", "", "", "", "", "b", "c", "ch", "d", "dh", "f", "g", "h", "kh", "l", "m", "n", "ph", "q", "qh", "r", "rh", "s", "sh", "t", "th", "v", "w", "x", "z", "", "", "", "", "", "", "", "", "", "", "", "b", "c", "d", "dh", "g", "k", "l", "m", "n", "ph", "q", "qh", "r", "s", "t", "th", "v", "x", "z", "", "", "", "", "", "", "", "", "", "", "", ""];
var midWord1 = ["a", "e", "u", "i", "o", "a", "e", "u", "i", "o", "y"];
var midWord2 = ["d", "g", "h", "k", "l", "m", "n", "r", "s", "t", "v", "x", "z", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var endWord = ["agi", "aldir", "aos", "arus", "borh", "bris", "bium", "bus", "dall", "dar", "darr", "des", "dis", "dite", "dohr", "don", "dos", "dros", "dum", "dur", "emis", "enar", "esis", "eus", "eyar", "eyr", "her", "ion", "ione", "ius", "jun", "ldir", "lios", "lo", "lous", "mes", "mir", "mjir", "mos", "mus", "nia", "lotl", "zotz", "zotl", "nir", "nos", "nas", "ohr", "orr", "rasil", "reus", "ros", "ruer", "rus", "ses", "stus", "tar", "tarr", "teus", "thar", "ther", "tia", "ton", "thos", "tyx", "ysus", "ra", "ara", "ella", "elia", "nja", "yja", "ulla", "la", "na", "ana", "otz", "otl", "neas", "phine", "tris", "gyn", "syn", "dite", "ena", "hena", "tia", "anke", "mera", "nera", "soi", "heia", "mis", "thys", "asis", "one", "dione", "dona", "ona", "phion", "trix", "tix", "lene", "lena", "phy", "tune", "va", "una", "tuna", "arae", "aris", "ris", "tia", "rena", "raura", "dea", "enta", "dia", "ta", "ais", "aldin", "anh", "ara", "arin", "aris", "as", "asis", "bin", "bris", "dall", "des", "dis", "dite", "don", "dos", "ean", "en", "erin", "esis", "eyar", "gen", "her", "ias", "ien", "ies", "ion", "lan", "lin", "lir", "los", "mis", "mos", "nas", "nir", "nos", "ohr", "one", "otl", "phin", "ren", "ris", "ros", "ses", "sin", "sus", "syn", "tar", "teus", "tia", "tin", "tis", "ton", "tos", "tris", "vian", "zotl"];

function randomise() {
    $('#gameTitle').empty();
    $('#plotHook').empty();
    $('#setting').empty();
    $('#people').empty();
    $('#encounter1').empty();
    $('#encounter2').empty();
    $('#words').empty();
    plotHook = randomPlotHook();
    setting = randomPlace();
    npc = randomNPC();
    monster1 = randomEasyEncounter();
    monster2 = randomHardEncounter();
    words = randomWords();
    title = generateTitle(monster2, npc);
}
window.randomise = randomise;

function exportGame() {
    var elHtml = document.getElementById('game').innerHTML;
    var link = document.createElement('a');

    link.setAttribute('download', title.replaceAll(" ", "_").toLowerCase() + '_game_gen.html');
    link.setAttribute('href', 'data:'+'text/html'+';charset=utf-8,'+encodeURIComponent(elHtml));
    link.click();
}
window.exportGame = exportGame;

function randomPlotHook () {
    var hook = '<p>You are all...</p><h5>' + randValue(plotHookLocations) + ' ' + randValue(plotHookReasons) + '</h5>';
    $("#plotHook").append(hook);
    return hook;
}

function randomPlace() {
    var place = '<p>Near the town of...</p><h5>' + randValue(placeListStart) + randValue(placeListEnd) + ', known for ' + randValue(placeIndustry) + ' and ' + randValue(placeIndustry);
    $("#setting").append(place);
    return place;
}

function randomNPC() {
    var race = randIndex(raceNameList);
    var fullName;
    switch(Number(race)) {
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
    var html = '<p>There we meet...</p><h5>' + fullName + ", a " + randValue(statList) + " and " + randValue(statList) + ' ' + raceNameList[race] + "</h5>";
    html = html.concat("<h6>Other NPC's: " + randValue(hlRaceNameList) + ", " + randValue(hfRaceNameList) + ", " + randValue(eRaceNameList) + ", " + randValue(dlRaceNameList) + ", " + randValue(lRaceNameList) + ", ");
    $("#people").append(html);
    return fullName;
}

function randomEasyEncounter() {
    var type = randValue(['quarter', 'half', '1', '2'])
    var monster;
    var html;
    switch(type) {
        case 'quarter':
            monster = randValue(monsterListQuater);
            html = '<h5>' + Math.floor(Math.random()*4+4) + 'x <a href="https://www.dndbeyond.com/monsters/' + monster.replace(/ /g, "-") + '" target="_blank">' + monster + '</a> (CR 1/4)</h5>';
            break;
        case 'half':
            monster = randValue(monsterListHalf);
            html = '<h5>' + Math.floor(Math.random()*4+2) + 'x <a href="https://www.dndbeyond.com/monsters/' + monster.replace(/ /g, "-") + '" target="_blank">' + monster + '</a> (CR 1/2)</h5>';
            break;
        case '1':
            monster = randValue(monsterList1);
            html = '<h5>' + Math.floor(Math.random()*3+1) + 'x <a href="https://www.dndbeyond.com/monsters/' + monster.replace(/ /g, "-") + '" target="_blank">' + monster + '</a> (CR 1)</h5>';
            break;
        case '2':
            monster = randValue(monsterList2);
            html = '<h5>2x <a href="https://www.dndbeyond.com/monsters/' + monster.replace(/ /g, "-") + '" target="_blank">' + monster + '</a> (CR 2)</h5>';
            break;
    }
    var treasure = randValue(mcItemNameList)[0];
    var stuff = randValue(stuffList);
    html = html.concat('<p>Treasure: ');
    html = html.concat('<a href="https://www.dndbeyond.com/search?q=' + treasure + '" target="_blank">' + treasure + '</a>, ');
    html = html.concat('<a href="https://www.dndbeyond.com/search?q=' + stuff + '" target="_blank">' + stuff + '</a>, ');
    // gold
    // html = html.concat((Math.floor(Math.random()*12)+4) +' gp</p>');
    // item
    html = html.concat(randValue(tItemNameList) + '</p>');
    $("#encounter1").append(html);
    return monster;
}

function randomHardEncounter() {
    var type = randValue(['3', '3x2', '4', '5'])
    var monster;
    var html;
    switch(type) {
        case '3':
            monster = randValue(monsterList3);
            var html = '<h5>1x <a href="https://www.dndbeyond.com/monsters/' + monster.replace(/ /g, "-") + '" target="_blank">' + monster + '</a> (CR 3)</h5>';
            break;
        case '3x2':
            monster = randValue(monsterList3);
            var html = '<h5>2x <a href="https://www.dndbeyond.com/monsters/' + monster.replace(/ /g, "-") + '" target="_blank">' + monster + '</a> (CR 3, Downscale)</h5>';
            break;
        case '4':
            monster = randValue(monsterList4);
            var html = '<h5>1x <a href="https://www.dndbeyond.com/monsters/' + monster.replace(/ /g, "-") + '" target="_blank">' + monster + '</a> (CR 4)</h5>';
            break;
        case '5':
            monster = randValue(monsterList5);
            var html = '<h5>1x <a href="https://www.dndbeyond.com/monsters/' + monster.replace(/ /g, "-") + '" target="_blank">' + monster + '</a> (CR 5, Downscale)</h5>';
            break;
    }
    var treasure = randValue(muItemNameList)[0];
    var weapon = randValue(wItemNameList)[0];
    html = html.concat('<p>Treasure: ');
    html = html.concat('<a href="https://www.dndbeyond.com/search?q=' + treasure + '" target="_blank">' + treasure + '</a>, ');
    html = html.concat('<a href="https://www.dndbeyond.com/search?q=' + weapon + '" target="_blank">' + weapon + '</a>, ');
    // gold
    // html = html.concat((Math.floor(Math.random()*30)+7) +' gp</p>');
    // item
    html = html.concat(randValue(tItemNameList) + ', ' + randValue(tItemNameList) + '</p>');
    $("#encounter2").append(html);
    return monster;
}

function randomWords() {
    var wordString = '<p>' + createWord() + ', ' + createWord() + ', ' + createWord() + ', ' + createWord() + '</p>';
    $("#words").append(wordString);
    $("#words").css("textTransform", "capitalize");
    return wordString;
}

function createWord(){
    if (Math.random()*2 >= 1) {
        return randValue(startWord) + randValue(midWord1) + randValue(midWord2) + randValue(endWord);
    } else {
        if (Math.random()*2 >= 1) {
            return randValue(startWord) + randValue(midWord1) + randValue(midWord2) + randValue(midWord1) + randValue(endWord);
        } else {
            return randValue(startWord) + randValue(midWord1) + randValue(midWord2) + randValue(midWord1) + randValue(midWord2) + randValue(endWord);
        }
    }
}

function generateTitle(monster, npc) {
    var titles = [
        `Howls at Night`,
        `The High Cliffs`,
        `Down into the Deep`,

        `Attack of the ${monster}`,
        `${monster} Ambush`,
        `${monster} Rampage`,
        `Into the ${monster} Nest`,
        `The ${monster} Hideout`,

        `${npc}'s Dilemma`,
        `${npc}'s Job`,
        `${npc}'s Hunt`,
    ];
    var selectedTitle = titles[Math.floor(Math.random() * titles.length)];
    $("#gameTitle").append('<h1>' + selectedTitle + '</h1>');
    return selectedTitle;
}

function newEncounter(encounterId) {
    switch (encounterId) {
        case "plotHook":
            $('#plotHook').empty();
            var plotHook = randomPlotHook();
            break;
        case "setting":
            $('#setting').empty();
            var setting = randomPlace();
            break;
        case "people":
            $('#people').empty();
            var npc = randomNPC();
            break;
        case "encounter1":
            $('#encounter1').empty();
            var monster = randomEasyEncounter();
            break;
        case "encounter2":
            $('#encounter2').empty();
            var monster = randomHardEncounter();
            break;
        case "words":
        default:
            $('#words').empty();
            var words = randomWords();
            break;
    }
}
window.newEncounter = newEncounter;

function randValue(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function randIndex(list) {
    return Math.floor(Math.random()*list.length);
}
