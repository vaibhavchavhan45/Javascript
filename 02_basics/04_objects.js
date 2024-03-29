//singleton object
const myObject = new Object ()

//non-singleton object
const nonSingleTonObject = {}

nonSingleTonObject.email = "chavhan@google.com"
nonSingleTonObject.id = "200645BE"
nonSingleTonObject.isLoggedIn = false
console.log(nonSingleTonObject);

const user = {
    email : "vc@gmail.com",
    name : {
        fullname:{
            firstname : "vaibhav",
            lastname : "chavhan"
        }
    }
}
console.log(user.name.fullname.lastname);

//Merging of objects
const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {5 : "e", 6 : "f"}
//const obj4 = Object.assign(obj1,obj2,obj3)    //all objects are getting merge in obj1
const obj4 = Object.assign({},obj1,obj2,obj3)   //all objects are getting merge in empty object{}
console.log(obj4);

//Merging of objects using Spread method
const newObj1 = {1 : "vc", 2 : "ac"}
const newObj2 = {3 : "az", 4 : "cz"}
const newObj3 = {5 : "og", 6 : "bg"}
const newObj = {...newObj1,...newObj2,...newObj3}
console.log(newObj);

//using in case of database
const myUser = [
    {
        10 : "z",
        11 : "y" 
    },
    {
        20 : "x",
        21 : "w"
    },
    {
        30 : "v",
        31 : "u"
    }
]


const myNewObj = {
    email : "ac@gmail.com",
    id : "123ab456",
    name : "vc",
    isLoggedIn : "no"
}
console.log(myNewObj);

console.log(Object.keys(myNewObj));    //Print all the keys(excluded their values) of given object
console.log(Object.values(myNewObj));  //Print all the values (excluded keys) of given object
console.log(Object.entries(myNewObj)); //Print all the keys with theire respective values

console.log(myNewObj.hasOwnProperty("name"));  //To check that key exists in object or not




