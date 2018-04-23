$(document).ready(function(){
	var startBlend = ["bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr"];
	var midBlend = ["bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr"];
	var endBlend = ["ch", "ck", "gh", "gr", "ng", "ph", "sc", "sh", "sk", "sm", "sp", "st", "th"];
	var vowel = ["a", "e", "i", "o", "u"];
	var consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
	
	printWord(40);
	
	function printWord(words){
		for(var i=0; i<words; i++){
			var wordLen = Math.floor((Math.random() * 6) + 3); // beetween 4 and 14
			console.log("length "+wordLen);
			var word = document.createElement("p");
			word.innerHTML = createWord(wordLen);
			$("#content").append(word);
		}
	}
	
	function createWord(wordLen){
		var word = "";
		var last = "none";
		for(var i=0; i<wordLen; i++){
			switch(last) {
				case "none":
					var first = Math.floor((Math.random() * 3) + 1)
					if(first == 1){
						word += addChar(vowel);
						last = "vowel";
					} else{
						word += addChar(startBlend, consonant);
						last = "consonant";
					}
					break;
				case "consonant":
					word += addChar(vowel);
					last = "vowel";
					break;
				case "vowel":
					if(i == wordLen-1) {
						word += addChar(consonant, endBlend);
						last = "consonant";
					} else {
						word += addChar(consonant, midBlend);
						last = "consonant";
					}
					break;
				
			}
		}
		return word;
	}
	
	function addChar(type1, type2){
		var typeCount = 1;
		var chars = [];
		chars[0] = type1;
		if(type2 != undefined){
			chars[1] = type2;
			typeCount = 2;
		}
		var typeNo = Math.floor((Math.random() * typeCount));
		var charNo = Math.floor((Math.random() * (chars[typeNo].length)));
		return chars[typeNo][charNo];
	}
});