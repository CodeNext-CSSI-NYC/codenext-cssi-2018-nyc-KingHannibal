// King Hannibal
var readline = require("readline-sync");

// MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"
function animalSounds(){
	console.log("meow");
}

animalSounds();
// 1b. Call it three times in a row. Run your code to make sure it works.
animalSounds();
animalSounds();
animalSounds();


// 2a. Write (declare) a function that takes one parameter and prints out the square of that number
function squared(num){
	console.log(num * num );
	return num * num;
}

// 2b. Call it three times with three different parameters. Run your code to make sure it works.
squared(2);
squared(50);
squared(3);

// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.
function greaterThan(num1, num2){
	if(num1 == num2){
		console.log(num1 + num2 + " Are equal");
	} else if (num1 > num2){
		console.log(num1 + " is greater than " + num2);
		}
		else{
			console.log( num2 + " is greater than " + num1);
		}

}


// 3b. Call it three times with three different parameters
// Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// Run your code to make sure it works.
greaterThan(12 , 34); 
greaterThan(15 , 5); 
greaterThan(36 , 10); 


// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.
function Hello(name){
 
 return "hello " + name ; 
}

// 4b. Call the function and store the result in a variable. Then, print out that variable.
// Repeat this three times with different names.
 let name = readline.question(" Whats your name ?? : ");
 let greeting = Hello(name);
console.log(greeting);


// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.
function average(twoNumbers , twoNumbers2){
	console.log("The average of " + twoNumbers + " and " + twoNumbers2 +   " is "+ (twoNumbers + twoNumbers2)/2 );
}

average(5,5);




// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?