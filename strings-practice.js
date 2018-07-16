// function makeAbba(a ,b ){
// 	return a + b + b + a ;
// }
// // makeAbba("hi" , "Bye");
// console.log(makeAbba("hi" , "Bye"));


// function comboString(a, b) {
// 	if(a > b){
// 		return b + a + a + a + b ;
// 	} else{
// 		return a + b + b + b + a ;
// 	}

// }

// console.log(comboString("hello" , "hi"));



function lastTwo(str) {

	if(str.length >= 2){
		let firstPart = str.substring(0 , str.length-2);
		let secto = str.charAt(str.length-2);
		let  last  = str.charAt(str.length-1);
		return  firstPart + last + secto;
	}else{
		return str;
	}

}
console.log(lastTwo("hello"));