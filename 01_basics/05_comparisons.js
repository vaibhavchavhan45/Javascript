//Basic operations
let a = 5;
let b = 7;
console.log(a>b);
console.log(90 > 100);
console.log(100 < 200);
console.log(100 == 200);

//Conversions of different datatypes
console.log("5" > 4);   //true
console.log("5" > 5);   //false
console.log(5 >= "5");  //true
console.log("5" == 5);  //true

//Comparison of null and 0
console.log(null > 0);  //false because during comparison null converted to 0 so 0 > 0 is FALSE
console.log(null < 0);  //false because during comparison null converted to 0 so 0 < 0 is FALSE
console.log(null == 0); //false because null represents the absence of a value only in ==, while 0 is a numeric value.
console.log(null >= 0); //true because here null converted to 0 in >= operator
//*******In JS both == and >= works differently******* */

//Comparison of undefined and 0
console.log(undefined > 0);   
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined == 0);
//*****value for undefined is NaN thatswhy comparison of NaN and any other numeric values is FALSE*****

//Some other comparisons
console.log(true == 1);         //true
console.log(true == null);      //false
console.log(true == undefined); //false
console.log(null == undefined); //TRUE because JS has a special case called "loose equality" or "abstract equality" where null is considered equal to undefined.

//Comparisons with ===
console.log("45" === 45); //FALSE because === checks datatypes as well as values
console.log(null === undefined); //false because datatype is different

