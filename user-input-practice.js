// Remember that you can comment parts of your code in and out!
// Try this as you move from question to question below.
  var readline = require("readline-sync");

// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)
var number = readline.question("Please enter a number: ");
 console.log("The square root of " + number + " is " + Math.sqrt(number));

// 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!
var userName = readline.question("Please enter your name: ");
console.log("Your name has " + userName.length +  " letters " );


// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...
var anyWord = readline.question("Please enter any word: ");
console.log(" The word " + anyWord  +  " starts with the letter " +  anyWord.charAt() );


// 4. Ask the user to enter two numbers, and print out "The average of ___ and ___ is ____", but with the blanks filled in.
var twoNumbers = parseFloat(readline.question(" Please enter any number: "));
var twoNumbers2 = parseFloat(readline.question(" Please enter any second number: "));
console.log("The average of " + twoNumbers + " and " + twoNumbers2 +   " is "+ (twoNumbers + twoNumbers2)/2 );