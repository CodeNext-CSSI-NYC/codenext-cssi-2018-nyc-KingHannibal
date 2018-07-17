// // 1. Create an object called myObj with the following key-value pairs:
// // a -> 23
// // b -> 12
// // c -> 3
// let myObj={a:23 , b:12 ,c:3};
// // After you create this object, add the key value pair d -> 14 to the object
//  myObj["d"]= 14;
// // Print out the object to make sure it looks like you expect
// console.log(myObj);
// // Change the value associated with the key b from 12 to 19 
// myObj["b"]=19;
// console.log(myObj);
// // Create an array called myObjKeys that contains the keys from this object using Object.keys()
// let myObjKeys = Object.keys(myObj); 
// // Print it out to make sure it looks right
// console.log(myObjKeys);
// // Create an array called myObjValues that contains the values from this object using Object.values()
// let myObjValues = Object.values(myObj);
// // Print it out to make sure it looks right
// console.log(myObjValues);
// // Print out the value associated with the key "a" using both styles of accessing object values.
// console.log(myObj["a"]);
// // Make sure you know how to use both of them.
// // console.log(myObj.keys("a"));


// // 2. Create an object that contains any key-value pairs you want.
// let kingObject ={name : "KING", age: 15, height:"five feet"};
// // Print it out, make sure it looks right.
// console.log(kingObject);
// // Delete one of the key-value pairs.
// delete kingObject.height;
// console.log(kingObject);

// // Add a new one.
// kingObject["shirt"]= "gray" ;
// console.log(kingObject);
// // Change the value associated with one of the existing keys.
// kingObject["shirt"]= "gray and black";
// // Print it out again. Does it look as you expected?
// console.log(kingObject);
// // Store one of the values from the object into a variable called myVal.
// let myVal = kingObject["age"];
// // Print out another value from the object.
// console.log(kingObject["shirt"]);
// // The purpose of the previous two things is to make sure you know both ways to

// // access values in objects using keys. Make sure you can do both.



// 3. Write a function that takes a string as input and returns an object
// whose key-value pairs are counts of the number of times each letter appears.
// function letterCount(str) {
// 	let object = {};

// 	for (let i = 0; i < str.length; i++) {
// 		let darnation = str[i];
// 		if (object[darnation] == undefined) {
// 			object[darnation] = 1;
// 		} else {
// 			object[darnation]++;
// 		}
// 	}
// 	console.log(object);
// }
// letterCount("supercalifragilisticexpialidocious");
// let darnation = Object.keys(letterCounter);
// console.log(darnation);

// for (let i = 0; i < darnation.length; i++) {
//   let letter = darnation[i];
//   let count = letterCounter[letter];
//   console.log("The letter " + letter + " appeared " + count + " times");
// }

// For example, letterCount("mississippi") would return something like:
// {
//   m: 1,
//   i: 4,
//   s: 4,
//   p: 2
// }
// Hint: Loop through str. For each letter, check if it already exists in obj as a property.
// You can check to see if a certain key already exists in an object using
// obj.hasOwnProperty(key). It returns true or false depending on whether it exists.
// If it doesn't, you should set the value to 1. If it does, hmmmmm, what should you do?



// 4. Write a function that takes a string as input and returns a different string
// that contains each letter in the original string exactly once.
function eachLetterOnce(str) {
	let thisObject = {};
	for (let i = 0; i < str.length; i++) {
		let one = str[i];
		if(thisObject[one]==undefined){
			thisObject[one] = one;
			console.log(thisObject[one]);
		} 
	}
}
console.log(eachLetterOnce("supercalifragilisticexpialidocious"));

// So eachLetterOnce("mississippi") would return "misp" (letters may be in another order).
// Hint: Use an object to keep track of what letters appear in the word. You can
// set obj[letter] = true for each letter you come across.
// At the end, get the keys of that object (which is an array) and use join
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
// to create a string.



// // 5. Write a function that takes one parameter, an object, and prints out a line
// // like the followng for every key-value pair in the object:
// // "The key ___ has a value of ___"
 function printKeysAndValues(obj) {


}
// }
// // Hint: You will need to get the array of keys, and use a for loop to go through all of the keys.
// // Hint2: Inside the for loop, you will need to use the index to access the key,
// // and then you will need to use the key to access the corresponding value.
















