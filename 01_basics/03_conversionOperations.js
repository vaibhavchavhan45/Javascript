let value = "45abc.";
console.log(typeof value); 
console.log(typeof (value) );

let convertInNumber = Number (value)  //Convert given datatype to number datatype
console.log(typeof convertInNumber);
console.log(convertInNumber);         //NaN --> Not a Number



let score = null //& undefined 
console.log(typeof score); 
console.log(typeof (score) );

let convertIntoNumber = Number (score)  //Convert given datatype to number datatype
console.log(typeof convertIntoNumber);
console.log(convertIntoNumber);         //after converting to number the value of null is 0 (zero)    
                                        //and undefined is NaN



/* NOTES  (Values after converting in number) 
"33" ==> 33
"33abc" ==> NaN
null ==> 0
undefined ==> NaN
true ==> 1
false ==> 0 
"Vaibhav" ==> NaN 
*/



let nums = 33;
let convertInString = String (nums);
console.log(convertInString);        //op --> 33 
console.log(typeof convertInString); //String


let val = 1;
let convertToBoolean = Boolean(val)
console.log(convertToBoolean);       //all values are true except zero,undefined and null (zero,undefined and null ==> false)

//link : https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
