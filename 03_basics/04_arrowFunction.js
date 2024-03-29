console.log(this);   //{}

const user = {
    username : "Vaibhav",
    email : "vc@gmail.com",
    welcomeMessage : function (){
        console.log(`Hello ${this.username}, Welcome to the website!`);  //this keyword is used to refer(access) the current context
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "Vaibhs"
user.welcomeMessage()

//NOTE : Global objects inside the browser is called as Window

//Case 1
function arrow(){
    username : "vc",
    console.log(this.username);    //this keyword cannot able to access function, this keyword is only use for objecs 
    console.log(this);             //this works
}
arrow()                            //undefined

//Case 2
const Func = function (){
    console.log(this);             //this works
    username : "vc"
    console.log(this.username);
}
Func()                             //undefined

//arrow function
const newArrow =  () => {
    console.log(this);            //{}
    username : "vc"
    console.log(this.username);
}
newArrow()                        //undefined

//different Ways to write arrow function
//case 1
const addition =  (num1,num2) => {
    return num1 + num2            //explicit return
}
console.log(addition(45,7));

//case 2
const substract = (num1, num2) => num1 - num2   //implicit return
console.log(substract(10,5));

//case 3
const multi = (num1, num2) =>  (num1 * num2)    //implicit return
console.log(multi(7,45));
//Note : If you use { } then write return keyword, if u use ( ) then there don't write return keyword

//return object
const obj = () =>  ({username : "VC"})
console.log(obj());