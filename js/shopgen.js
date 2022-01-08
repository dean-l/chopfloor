import { mItemNameList, itemNameList, aItemNameList, asItemTypeList, amItemTypeList, alItemTypeList, wItemNameList, wItemTypeList } from './itemList'
import { raceNameList, statList, hfRaceNameList, hlRaceNameList, gRaceNameList, eRaceNameList, kRaceNameList, dm1RaceNameList, dm2RaceNameList, df1RaceNameList, df2RaceNameList, dlRaceNameList, lRaceNameList } from './raceList'
import { shopNameList, classNameList, mShopNameList1, mShopNameList2, mShopNameList3, aShopNameList, wShopNameList, tShopNameList } from './nameList'

$(document).ready(function(){
    generate();
    
});

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
                    pohCost = Math.ceil(55 + Math.random()*10);
                    pohNum = Math.ceil(Math.random()*2+2);
                    break;
                case 10:
                    pohCost = Math.ceil(50 + Math.random()*10);
                    pohNum = Math.ceil(Math.random()*4+4);
                    break;
                case 25:
                    pohCost = Math.ceil(45 + Math.random()*10);
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