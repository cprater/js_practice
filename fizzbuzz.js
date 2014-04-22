var Test = function(){
	
	var vowels = ["a", "e", "i", "o", "u", "y"];

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

	this.isVowel = function(char){
		for(i = 0; i < vowels.length; i++){
			if(vowels[i] == char)
				return true;
		}
		return false;
	};

	this.translate = function(string){
		var chars = string.split("");
		for(c = 0; c < chars.length; c++){
			if(chars[c] == " ");
			else if (this.isVowel(chars[c]) === false)
				chars[c] = chars[c] + "o" + chars[c];
		}
		return chars.join("");
	};

	this.sum = function(numbers){
		var total = 0;
		for(i = 0; i < numbers.length; i++){
			total += numbers[i];
		}
		return total;
	};

	this.multiply = function(numbers){
		var total = 1;
		for(i = 0; i < numbers.length; i++){
			total *= numbers[i];
		}
		return total;
	};

	this.reverse = function(string){
		return string.split("").reverse().join("");
	};

	this.findLongestWord = function(words){
		sortedWords = words.sort(function(a,b){return a.length - b.length});
		return sortedWords[sortedWords.length - 1];
	};

	this.filterLongWords = function(words, size){
		var longer = [];
		for(i = 0; i < words.length; i++){
			if (words[i].length > size)
				longer.push(words[i]);
		}
		console.log(longer);
	};

	this.charFreq = function(word){
		var freq = {};
		sorted = word.split("");
		for(i = 0; i < sorted.length; i++){
			freq[sorted[i]] = 0;
		}
		for(i = 0; i < sorted.length; i++){
			freq[sorted[i]]++;
		}
		console.log(freq);
	};

};


test = new Test();
console.log(test.max(1,3 == 3));
console.log(test.max(1,-3) == 1);
console.log(test.maxOfThree([3,4,8]) == 8);
console.log(test.maxOfThree([-3,-5,-1]) == -1);
console.log(test.isVowel("e") === true);
console.log(test.isVowel("b") === false);
console.log(test.translate("this is fun") == "tothohisos isos fofunon");
console.log(test.translate("chicken salad") != "tothohisos isos fofunon");
console.log(test.sum([1,2,3,4]) == 10);
console.log(test.sum([3,-3,5,5]) == 10);
console.log(test.multiply([3,4,2]) == 24);
console.log(test.multiply([3,-4,2]) == -24);
console.log(test.reverse("chicken") == "nekcihc");
console.log(test.findLongestWord(["big", "bacon", "it", "cellulartelephonedevice"]) == "cellulartelephonedevice");
console.log(test.filterLongWords(["big", "bacon", "it", "cellulartelephonedevice", "breakfast"], 4) == ['bacon', 'cellulartelephonedevice', 'breakfast']);
console.log(test.charFreq("abbabcbdbabdbdbabababcbcbab") == {"a": 7, "b": 14, "c": 3, "d": 3});
