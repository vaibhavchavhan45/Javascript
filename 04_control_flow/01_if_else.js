const temperature = 41
if(temperature < 50){
    console.log("temperature is less than 50");
}
else{
    console.log("temperature is greater than 50");
}

//If we use var this code is executed because var has global scope but if we use let or const then it throw error because they dont hava the scope globally(let const have scope inside that braces)
const total = 500
if(total > 250){
    var power = "fly"
    console.log(`User power : ${power}`);
}
console.log(`User power : ${power}`);

//write multiple statement in if-else with commas
const balance = 10000
if (balance > 500000) console.log("successful"), console.log("balance fetched");
else console.log("unsuccessful"), console.log("balance not fetched");

const score = 99
if (score < 25) {
    console.log("less than 25");
}
else if(score < 50){
    console.log("less than 50");
}
else if(score < 75){
    console.log("less than 75");
}
else{
    console.log("less than 100");
}

//Logical operator
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogleAccount = false
const loggedInFromGmailAccount = true
const OTPfetch = true
if (userLoggedIn && debitCard && OTPfetch && (loggedInFromGoogleAccount || loggedInFromGmailAccount)) {
    console.log("Access to login");
}
else {
    console.log("Login aceess denied");
}