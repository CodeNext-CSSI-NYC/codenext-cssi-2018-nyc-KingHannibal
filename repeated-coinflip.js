let readline = require("readline-sync");
// Use a for loop to simulate flipping a coin 100 times.
// Think carefully about how you could use Math.random() or random-int to do this.
// (There are several possible answers.)
// Keep track of how many of the flips are heads.
// Print out the total number of flips and the total number of heads at the end.
// How often is it exactly 50/100? Fun fact: this should only happen about 8% of the time.
let randomInt = require("random-int");
  let flip ;
for(let i = 0; i<=100;i++){
	flip = randomInt(1,2);
 	if(flip==1){
 		console.log("Heads");
 	} else{
 		console.log("Tails");
 	}


}