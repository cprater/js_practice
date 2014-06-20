function max(num1, num2){
	if( num1 > num2){
		return num1;
	} else {
		return num2;
	}
}

function maxOfThree(num1, num2, num3){
	var nums = [num1, num2, num3];
	return nums.sort().pop();
}


function isVowel(letter){
	var vowels = ["a", "e", "i", "o", "u", "y"];

	for (var i = 0; i < vowels.length; i++){
		if (vowels[i] == letter){
			return true;
		}
	}
	return false;
}

function translate(phrase){
	var letters = phrase.split("");
	for(var i=0; i < letters.length; i++){
		if(isVowel(letters[i]) === true);
		else if(letters[i] == " ");
		else {
			letters[i] = letters[i] + "o" + letters[i];
		}
	}
	return letters.join("");
}


function sum(nums){
	var total = 0;
	for(var i = 0; i < nums.length; i++){
		total += nums[i];
	}
	return total;
}

function multiply(nums){
	var total = 1;
	for(var i = 0; i < nums.length; i++){
		total *= nums[i];
	}
	return total;
}

function reverse(phrase){
	return phrase.split("").reverse().join("");
}

function findLongestWord(words){
	var longest = null;
	words.sort(function(a,b){return a.length - b.length});
	return words.pop();
}

function filterLongerWords(words, max){
	var filteredWords = [];
	for(var i = 0; i < words.length; i++){
		if(words[i].length > max)
			filteredWords.push(words[i]);
	}
	return filteredWords;
}


// RUN BELOW HERE YO
console.log(max(3, 5) == 5);
console.log(maxOfThree(1,3,5) == 5);
console.log(isVowel("e") === true);
console.log(isVowel(" ") === false);
console.log(translate("this is fun") == "tothohisos isos fofunon");
console.log(sum([1,3,5,7]) == 16);
console.log(multiply([1,6,4,2]) == 48);
console.log(reverse("pickle juice") == "eciuj elkcip");
console.log(findLongestWord(["boo", "boob","united states of america", "breasticles", "yo" ]) == "united states of america");
console.log(filterLongerWords(["boo", "boob","united states of america", "breasticles", "yo" ], 5));


