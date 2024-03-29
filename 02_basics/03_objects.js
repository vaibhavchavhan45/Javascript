//Object literals
const mySymbol = Symbol ("key1") // OR const mySymbl = Symbol()
console.log(mySymbol);   

const newSymbol = Symbol ("key2")

//non-singleton object
const user = {
    name : "vaibhav",
    "full name" : "Vaibhav Chavhan",
    age : 22,
    email : "vaibhav@gmail.com",
    location : "Arni",                                                                                                                                                                                                                                             
    isUserLogin : true,
    lastLogin : ["mon" , "wed"],
    mySymbol : "mykey",
    [newSymbol] : "newkey"
}

//First type to access instances of object (Not frequently use)
console.log(user.lastLogin);

//Second type to access instances of object (Most frequently use)
console.log(user["full name"]);
console.log(user["name"]);

//Processing Symbol in object 

//(INCORRECT METHOD ===> mySymbol(line 14) acting as a normal key not as mySymbol(line 1)) 
console.log(user.mySymbol);
console.log(typeof user.mySymbol);

console.log(user["mySymbol"]);
console.log(typeof user["mySymbol"]); //string 

//CORRECT METHOD ==> [newSymbol] (line 15) acting as a newSymbol(line 4)
console.log(user[newSymbol]);
console.log(typeof user[newSymbol]); //string

//Change the value of key
user.email = "vaibhav@google.in"
//Object.freeze(user)
user.email = "vaibhav@yahoo.in"      //This line not gonna execute because we have freeze the object
console.log(user);


//function
user.greeting = function (){
    console.log("I am vc");
}
console.log(user.greeting());       //function doesn't return explicitely (directly) so we get undefned below o/p

user.greeting = function (){       //[Function (anonymous)] ----> A function which does not have its name
    console.log("I am vc");
}
console.log(user.greeting);


//referring to keys of object
user.greeting2 = function (){
    console.log(`Hey there, My name is ${this.name}`);  //this keyword is for accessing all the properties of name from object (without this keyword we can't access name) 
}
console.log(user.greeting2());

