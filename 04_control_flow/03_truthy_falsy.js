//Falsy values  ==>  false, "", 0, -0, null, undefined, NaN, BigInt 0n,
//Truthy values ==>  true, " ", "0", "-0", [], {}, function(){}


//truthy
const email = "vc@gmail.com"
if (email) {
    console.log("Got email from user");
}
else{
    console.log("Don't have email of user");
}

//falsy
const userEmail = ""
if (userEmail) {
    console.log("Got email from user");
}
else{
    console.log("Don't have email of user");
}

//Check whether array is empty or not
const myArray = []
if(myArray.length === 0){
    console.log("Array is empty");
}

//Check whether object is empty or not
const obj = {}
if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
}

//Sometimes may asked in interview
console.log(false == 0)   //true
console.log(false === 0)  //false
console.log(false == '')  //true
console.log(false === '') //false
console.log('' == 0)      //true
console.log('' === 0)     //false
console.log("" == 0)      //true