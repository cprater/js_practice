Array.prototype.sortIntegersAsc = function(){
	return this.sort(function(a,b){return a - b})
};

Array.prototype.includes = function(element){
	for (i=0; i < this.length; i++){
		if(this[i] == element)
			return true;
	}
	return false;
};

Array.prototype.sum = function(){
	total = 0;
	for(i = 0; i < this.length; i++){
		total += this[i];
	}
	return total;
};

Array.prototype.multiply = function(){
	total = 1;
	for(i = 0; i < this.length; i++){
		total *= this[i];
	}
	return total;
};

Array.prototype.sortByLengthAsc = function(){
	return this.sort(function(a,b){return a.length - b.length});
};

String.prototype.isAVowel = function(){
	v = ["a", "e", "i", "o", "u"];
	return v.includes(this);
};

//^^^^^^Them prototypes sooon^^^^^^^^
//vvvvvvThem functions sonvvvvvvvvv

var Test = function(){

	this.max = function(num1, num2){
		if (num1 > num2)
			return num1;
		else
			return num2;
	};

	this.maxOfThree = function(numbers){
		return numbers.sortIntegersAsc().pop();
	};

	this.isVowel = function(letter){
		return letter.isAVowel();
	};

	this.translate = function(phrase){
		var letters = phrase.split("");
		for(c=0; c < letters.length; c++){
			if(letters[c] == " ");
			else if (letters[c].isAVowel() === false)
				letters[c] = letters[c] + "o" + letters[c];
		}
		return letters.join("");
	};

	this.reverse = function(phrase){
		return phrase.split("").reverse().join("");
	};

	this.findLongestWord = function(words){
		return words.sortByLengthAsc().pop();
	};

	this.filterLongWords = function(words, max){
		console.log(words.filter(function(x){return x.length > max}));
	};

	this.charFreq = function(phrase){
		freq ={};
		letters = phrase.split("");
		for(i = 0; i < letters.length; i++){
			if(letters[i] in freq)
				freq[letters[i]] ++;
			else
				freq[letters[i]] = 1;
		}
		console.log(freq);
	};

};


test = new Test();
console.log(test.max(1,3) ==  3);
console.log(test.max(-1,-3) == -1);
console.log(test.maxOfThree([2,4,5]) == 5);
console.log(test.maxOfThree([-2,-4,-5]) == -2);
console.log(test.isVowel("e") ===  true);
console.log(test.isVowel("b") === false);
console.log(test.translate("this is fun") == "tothohisos isos fofunon");
console.log([1,2,3].sum() == 6);
console.log([1,2,3].multiply() == 6);
console.log(test.reverse("bacon bits") == "stib nocab");
console.log(test.findLongestWord(["chicken", "nuggets", "sucka", "boob", "testicles"]) == "testicles");
console.log(test.filterLongWords(["chicken", "nuggets", "sucka", "boob", "testicles"], 5) == ["chicken", "nuggets", "testicles"]);
console.log(test.charFreq("aabbddssccc") == {"a":2, "b":2, "d":2, "s": 2,"c": 3});






