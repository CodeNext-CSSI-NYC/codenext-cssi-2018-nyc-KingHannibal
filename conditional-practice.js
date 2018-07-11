var min = 0;

var max =  11;
var readline = require("readline-sync");

var randomInt = require('random-int');

var ourNum = randomInt(min, max);

var userNum = readline.question("Please guess a number from 1 to 10: ");

if(userNum == ourNum) {
  console.log("You guessed it! Lucky!");
}

else{
	console.log("Better luck next time");
}


 if(userNum > max){
 	console.log(" Sorry , your number " + userNum + " is to high " );
 }
if( userNum < min){
	console.log(" Sorry , your number " + userNum + " is to low " );
}


