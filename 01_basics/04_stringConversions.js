let x = 5
console.log(-x);

//Concatinations of two Strings
let str = "vaibhav "
let str1 = "chavhan"
let str3 = str + str1
console.log(str3);

//Basic operations of string
console.log("1" + "1");
console.log(1 + "1");
console.log("1" + 1);
console.log("1" + 1 + 2);  //first value string so it gives output of all other values as string
console.log(1 + 1 + "2");  //first performs operations then concatinate string there


//Type Coercion and Unary Operations 
console.log(+true);     // ** 1 ** ==> convert boolean true to number i.e. 1 then performs operation
//console.log(false+); // ** Error ** because unary operator needs value to its right
console.log(+ "");    // ** 0 **   ==> value of empty string in JS is zero (0) 



