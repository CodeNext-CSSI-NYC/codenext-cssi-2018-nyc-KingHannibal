let result ;

let randomVal;

var readline = require("readline-sync"); 

randomVal = Math.random();

if(randomVal< 0.5){
	result = "heads";
}
else{
	result  = "tails";
}
var perdiction = readline.question("Please choose head or tails: ");

if(perdiction == result){
	console.log( result, " Great job " + perdiction + " was correct ");
}
else{
	console.log( result,  "sorry " + perdiction + " was incorrect " );
}