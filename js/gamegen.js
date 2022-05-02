import { raceNameList, statList, hfRaceNameList, hlRaceNameList, gRaceNameList, eRaceNameList, kRaceNameList, dm1RaceNameList, dm2RaceNameList, df1RaceNameList, df2RaceNameList, dlRaceNameList, lRaceNameList } from './raceList.js'
import { monsterListQuater, monsterListHalf, monsterList1, monsterList2, monsterList3, monsterList4, monsterList5 } from './monsterList.js'

$(document).ready(function(){
    randomise()
});

function randomise() {
    $('#encounter1').empty();
    $('#encounter2').empty();
    $('#encounter3').empty();
    $('#gameTitle').empty();
    var monster1 = randomEasyEncounter();
    var npc = randomNPC();
    var monster2 = randomHardEncounter();
    generateTitle(monster2, npc);
}
window.randomise = randomise;

function exportGame() {
    var elHtml = document.getElementById('game').innerHTML;
    var link = document.createElement('a');

    link.setAttribute('download', 'game_generator.html');
    link.setAttribute('href', 'data:'+'text/html'+';charset=utf-8,'+encodeURIComponent(elHtml));
    link.click();
}
window.exportGame = exportGame;


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
    var html = '<h5>Name: ' + fullName + "</h5><h5>Race: " + raceNameList[race] + "</h5><h5>Temperament: " + randValue(statList) + " and " + randValue(statList) + "</h5>";
    $("#encounter2").append(html);
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
    $("#encounter3").append(html);
    return monster;
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
    $("#gameTitle").append('<h1>'+titles[Math.floor(Math.random() * titles.length)]+'</h1>');
}

function newEncounter(encounterId) {
    switch (encounterId) {
        case "encounter1":
            $('#encounter1').empty();
            var monster = randomEasyEncounter();
            break;
        case "encounter2":
            $('#encounter2').empty();
            var npc = randomNPC();
            break;
        case "encounter3":
        default:
            $('#encounter3').empty();
            var monster = randomHardEncounter();
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