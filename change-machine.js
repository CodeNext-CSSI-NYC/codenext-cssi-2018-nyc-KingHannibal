// Author: King Hannibal
var readline = require("readline-sync");

console.log("bLeep blOop! i'm a CHanGE macHINe!");

var userName = readline.question("Please enter your name: ");

console.log("Hello " + userName + "!");

var cents = readline.question(" Please enter cents as a positive integer: ");

console.log(cents + "cents make :");

const quarters = Math.floor(cents / 25);

console.log(" Quarter(s): " + quarters );

const dimes = Math.floor( (cents-(quarters*25) ) / 10);

console.log(" Dimes(s): " + dimes );

const nickels = Math.floor( (cents-((quarters*25)+(dimes*10)) ) / 5);

console.log(" Nickels(s): " + nickels );

const pennies = Math.floor( (cents-((quarters*25)+(dimes*10)+(nickels*5)) ) / 1);

console.log(" Pennies(s): " + pennies );

console.log(" BLOop BleEp! i Hope yOU aRE SATiSfieD wITh thiS SerVicE! ");








