var readline = require("readline-sync");

let rock = 1 ;

let paper = 2;

let scissors = 3;



let wannaPlay = readline.question(" Would you like to play a game of Rock-Paper-Scissors  (yes/no) : ");

let userChoice;
if(wannaPlay == "yes"){
	userChoice = readline.question("Please choose Rock,paper or scissors: ");
} else if(wannaPlay=="no"){
	console.log("You whimp, go home!!");
}
else{
	console.log("Thats not what i ask you");
}

//  lettting the computr know that "rock"( string ) is the same as rock variable which is aslo asign a #.
if (userChoice == "rock"){
 userChoice = rock ;
} else if(userChoice == "paper"){
	userChoice = paper ; 
} else{
userChoice = scissors ;
}

let compChoice ;
	// letting you know what the computer has chose!
if (compChoice == 1 ){
	console.log("the computer chose rock!" );
} else if(compChoice == 2){
	console.log("The computer chose paper!" );
} else{
	console.log("the computer chose scissors");
}

// how you actually win
// if you the computer choose rock
if(compChoice == userChoice){
	console.log("Great minds think alike! It was a TIE ");
} else if(compChoice == 1 && userChoice == paper){
	console.log(" You Fooled me, this time but i'll be back!! ");

} else if (compChoice == 2 && userChoice == scissors){
	console.log(" You Fooled me, this time but i'll be back!! ");
} else if(compChoice == 3 && userChoice == rock){
	console.log(" You Fooled me, this time but i'll be back!! ");
} else{
	console.log("I am Smarter than you,Thats why computers will take over!!!");
}
