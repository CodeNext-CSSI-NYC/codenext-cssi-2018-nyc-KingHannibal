// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.

// 1. Ask the user for a number and print whether it is positive or negative or zero.
var readline = require("readline-sync");
var userNum = readline.question("Please enter a number: ");
if ( userNum > 0){
	 console.log(userNum + " is a positive number ");
}
else{
	console.log(userNum + " is a negative number ");
}
// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
var num1 = readline.question("Please enter a number: ");
var num2 = readline.question("and another: ");
var num3 = readline.question("and another: ");
 console.log(" the largest number enter is "+ Math.max(num1 , num2 , num3 ) );

// 3. Ask the user for a number and print whether it is odd or even

var eoro = readline.question("Please enter a number: ");
if(eoro % 2 == 0){
	console.log(eoro + " is even ");
}
else{
	console.log(eoro + " is odd ");
}
// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant
var letter = readline.question("Please enter a letter: ");
if ( letter == "a" || letter == "e" || letter== "i" ||letter=="o" || letter=="u" ){
	console.log(letter + " is a vowel ");
}
else{
	console.log(letter + " consonant ");
}
// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)
var year = readline.question("Please enter a year: ");
if(year % 4 ==0){
	console.log(year + " is a leap year ");
}
// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.
var citizen = readline.question("Have you been a citizen for over 9 years? Please enter yes or no!: ");
if(citizen == yes)
// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.