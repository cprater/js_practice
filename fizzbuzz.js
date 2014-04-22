var Test = function(){

	this.max = function(num1, num2){
		if (num1 > num2)
			return num1;
		else
			return num2;
	};

	this.maxOfThree = function(num1, num2, num3){
		var numbers = [num1, num2, num3];
		numbers.sort();
		return numbers[numbers.length -1];
	};

	this.isVowel = function(char){
		var vowels = ["a", "e", "i", "o", "u", "y"];
		for(i = 0; i < vowels.length; i++){
			if(vowels[i] == char)
				return true;
		}
		return false;
	};

	this.translate = function(string) {
		var vowels = ["a", "e", "i", "o", "u", "y"];
		var array = string.split("");

		for(c = 0; c < array.length; c++){
			if(this.isVowel(array[c]));
			else if(array[c] == " ");
			else {
				var letter = array[c];
				array[c] = letter + "o" + letter;
			}
		}
		return array.join("");
	};

	this.sum = function(array){
		var total = 0;
		for(i = 0; i < array.length; i++){
			total += array[i];
		}
		return total;
	};

	this.multiply = function(array){
		var total = 1;
		for(i = 0; i < array.length; i++){
			total *= array[i];
		}
		return total;
	};

	this.reverse = function(string){
		return string.split("").reverse().join("");
	};

	this.findLongestWord = function(array){
		var longest = "";
		for(i = 0; i < array.length; i++){
			if(array[i].length > longest.length)
				longest = array[i];
		}
		return longest.length;
	};

	this.filterLongWords = function(array, max){
		var list = [];
		for(i = 0; i < array.length; i++){
			if(array[i].length > max)
				list.push(array[i]);
		}
		console.log(list);
		return list;
	};

};

var test = new Test();
console.log(test.max(3,7) == 7);
console.log(test.maxOfThree(3,4,8) == 8);
console.log(test.isVowel("e") === true);
console.log(test.isVowel("v") === false);
console.log(test.translate("this is fun") == "tothohisos isos fofunon");
console.log(test.sum([1,2,3,4]) == 10);
console.log(test.multiply([1,2,3,4]) == 24);
console.log(test.reverse("chicken") == "nekcihc");
console.log(test.findLongestWord(["banana", "idb", "chicken", "poop", "francsitnedlfrigetid"]) == 20);
console.log(test.filterLongWords(["banana", "idb", "chicken", "poop", "francsitnedlfrigetid"], 4) == "['banana', 'chicken', 'francsitnedlfrigetid']");












