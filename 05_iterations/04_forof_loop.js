//for of loop on array
let arr = [100, 200, 300, 400, 500]
for (const i of arr) {
    console.log(`The value in array is : ${i}`);
}

//for of loop on string
const str = "Vaibhav Chavhan"
for (const i of str) {
    console.log(i);
}

//for of loop on string
const newStr = "Believe in God"
for (const str of newStr) {
    if(str == " "){
        continue //OR break (break to stop and continue to skip space)
    }
    console.log(str);
}

//map
const myMap = new Map()
myMap.set('IN' , 'INDIA')
myMap.set('AUS' , 'AUSTRALIA')
myMap.set('USA' , 'UNITED STATES OF AMERICA')
myMap.set('IN' , 'INDIANS') //we can't set same value for key in map more than once, it will not run and map knows for its distinst values
console.log(myMap);

for (const key of myMap) {
    console.log(key);
}


//get values with key and value from map
const newMap = new Map()
newMap.set("+91" , "INDIA")
newMap.set("+1" , "AMERICA")
newMap.set("+7" , "RUSSIA")
newMap.set("+54" , "ARGENTINA")
console.log(newMap);

for (const [key , value] of newMap) {
    console.log(key , ' :- ' , value);
}

/* Object is not itterable at any case using for of loop
const obj = {
    player1 : "Rohit",
    player2 : "kul",
    player3 : "jass",
    player4 : "suriya"
}
for (const [game , value] of obj) {
    console.log(game , ' :- ' , value);
}
*/

//for-of loop on objects in array [ {}, {}, {}]
let newArr = [

    {
    languageName : "Javascript",
    extention : ".js"
    },

    {
    languageName : "python",
    extention : ".py"
    },

    {
    languageName : "java",
    extention : ".java"
    }

]

for(let i of newArr){
    console.log(i);                //print all objects in array
    console.log(i.languageName);   //print respective values of key (of objects) in an array
    console.log(i.extention);      //print respective values of key (of objects) in an array
    console.log(`the ext for ${i.languageName} is ${i.extention}`);
}