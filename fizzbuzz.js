var Test = function(){
	
	this.max = function(num1, num2){
		if (num1 > num2)
			return num1;
		else
			return num2;
	};

	this.maxOfThree = function(numbers){
		numbers.sort(function(a,b){return a - b});
		return numbers[numbers.length - 1];
	};

	this.isVowel = function(letter){
		var vowels = ["a", "e", "i", "o", "u", "y"];
		for (i=0; i < vowels.length; i++){
			if ( vowels[i] == letter)
				return true;
		}
		return false;
	};

	this.translate = function(phrase){
		var letters = phrase.split("");
		for(c = 0; c < letters.length; c++){
			if (letters[c] == " ");
			else if (this.isVowel(letters[c]) === false)
				letters[c] = letters[c] + "o" + letters[c];
		}
		console.log(letters.join(""));
		return letters.join("");
	};

	this.sum = function(numbers){
		var total = 0;
		for (i=0; i < numbers.length; i++){
			total += numbers[i];
		}
		return total;
	};

	this.multiply = function(numbers){
		var total = 1;
		for (i=0; i < numbers.length; i++){
			total *= numbers[i];
		}
		return total;
	};

	this.reverse = function(string){
		return string.split("").reverse().join("");
	};

	this.findLongestWord = function(words){
		var sorted = words.sort(function(a,b){return a.length - b.length});
		return sorted[sorted.length -1];
	};

	this.filterLongWords = function(words, max){
		var longWords = [];
		for (i=0; i < words.length; i++){
			if (words[i].length > max)
				longWords.push(words[i]);
		}
		console.log(longWords);
		return longWords;
	};

	this.charFreq = function(string){
		var freq = {};
		var chars = string.split("");
		for (i=0; i < chars.length; i++){
			freq[chars[i]] = 0;
		}
		for (i=0; i < chars.length; i++){
			freq[chars[i]] ++;
		}
		console.log(freq);
		return freq;
	};
};

test = new Test();
console.log(test.max(2,4) == 4);
console.log(test.max(2,-4) == 2);
console.log(test.maxOfThree([2,3,5]) == 5);
console.log(test.maxOfThree([-2,-3,-5]) == -2);
console.log(test.isVowel("e") === true);
console.log(test.isVowel("b") === false);
console.log(test.translate("this is fun") == "tothohisos isos fofunon");
console.log(test.sum([1,2,3]) == 6);
console.log(test.multiply([1,2,3]) == 6);
console.log(test.reverse("chicken") == "nekcihc");
console.log(test.findLongestWord(["big", "bacon", "bits", "boob"]) == "bacon");
console.log(test.filterLongWords(["big", "bacon", "bits", "boob"], 4) == ["bacon"]);
console.log(test.charFreq("abcddbcaabbdcd") == {"a": 3, "b": 4, "c": 3, "d": 4});






