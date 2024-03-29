/*****        IIFE ==> IMMEDIATELY INVOKED FUNCTION EXPRESSION       *****/
    //The function which immediately execute just after the function is IIFE
    //IIFE is used to remove or prevent the pollution of global scope inside IIFE


function normal (){
    console.log("database accessed");
}
normal();

//IIFE function 
(function iife(){
    console.log("server accessed");
})();
//this IIFE function will give error because above function is not ended yet
//to run this IIFE function, the function above IIFE must be terminated   


//named IIFE
(function IIFE(){
    console.log("VC");
})();

//simple IIFE
(() => {
    console.log("database connected");
}) ();

//named IIFE with parameters
(function newIIFE(x,y){
    console.log(x + y);
})(5,6);

//simple IIFE with parameters
((username) => {
    console.log(`Hello ${username}, welcome to website!`);
}) ("Vaibhav Chavhan")