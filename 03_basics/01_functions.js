function myName (){
    console.log("Vaibhav");
    console.log("Vaibhav");
    console.log("Vaibhav");
    console.log("Vaibhav");
    console.log("Vaibhav");
}
myName()

//Add 2 numbers
function Add(number1, number2){
    console.log(number1 + number2);
}
Add(3,4)
Add(3,"4")
Add(3,null)
Add(3,undefined)
Add(3,true)

//Substract
function Sub(number1, number2){
    console.log(number1 - number2);
}
const result = Sub(5,5)
console.log("result : ", result);

//Multiplication
function multi(number1,number2){
    let ans = number1 * number2
    return ans
}
const ans = multi(3,5)
console.log(ans);

//Division
function div(number1, number2){
    return number1 / number2
}
const answer = div(10,2)
console.log(answer);

//User Login
function UserLoggedInMessage(username){
    return `${username} just logged in`
}
console.log(UserLoggedInMessage("Vaibhav"))     //Vaibhav just logged in


function userLoggedIn(username){
    return `${username} just logged in`         //undefined just logged in because arguments not provided only parameters are provided
}
console.log(userLoggedIn())



//Overall user login
function userLogin(username){       //if argument is not provided means username is empty i.e. undefined then if block executes and if argument i.e. username is provided then return ${username} just logged in 
    if(username === undefined){     //OR if(!username)
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
console.log(userLogin())

//Give default values in function
function login(username = "sam"){        //argument is provided then run accordingly
    return `${username} just logged in`  //argument is not provided then "sam" executes
}
console.log(login("VC"))