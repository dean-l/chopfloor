$(document).ready(function(){
	
	function diceTypes(){
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