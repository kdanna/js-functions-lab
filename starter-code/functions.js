// Question 1
function maxOfTwoNumbers(num1,num2) {
	if (num1>num2){
		return num1;
	}else if (num2 > num1){
		return num2;
	}else{
		return "tie"
	}
}
//test it
maxOfTwoNumbers(7,8);

// Question 2
function maxOfThree(num1, num2, num3) {
	if(num1 > num2 && num1 > num3){
		return num3;
	} else if(num2 > num1 && num2 > num3){
		return num2;
	}else if (num3 > num1 && num3 > num1){
		return num3;
	}else{
		return "tie";
	}
}
//test it
maxOfThree(1,3,5);


// Question 3
var char = "a";
function isCharacterAVowel() {
	if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
		return "true";
	} else {
		return "false";
	}
}

//test it
isCharacterAVowel(char);

// Question 4
var arrayOfNumbers = [1,2,3,4,5];

function sumArray(nums) {
	var sum = 0;
	for(var i = 0; i < nums.length; i++){
		sum += nums[i];
	}
	return sum;
}

//test it
sumArray(arrayOfNumbers);


// Question 4
var arrayOfNumbers = [1,2,3,4,5];

function multiplyArray(nums) {
	var newNum = 1;
	for(var i = 0; i < nums.length; i++){
		newNum *= nums[i];
	}
	return newNum;
}

//test it
multiplyArray(arrayOfNumbers);


// Question 5
	var numberOfArguments = function(){
  	return arguments.length;
};
//test it
numberofArguments("yes", "no");

// Question 6
var reverseString = function (someString){
  var opposite = " ";
  for(var i = someString.length - 1; i >= 0; i--) {
  	opposite += x[i];
	}
return opposite;
};

//test it

reverseString("hello");

// Question 7
var word = ["hello", "mississippi","hi"];

function findLongestWord (someArray){
var largest = 0;
for (var i = 0; i < someArray.length; i++) {
    if (someArray[i].length > largest) {
    largest = someArray[i].length;
    } 
}
	return largest;
}
//test it
findLongestWord(word);


// Question 8
function filterLongWords () {
  
}


// Bonus 1
function charactersOccurencesCount() {
  
}

