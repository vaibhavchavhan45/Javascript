//for of loop on array
let arr = [100, 200, 300, 400, 500]
for (const i of arr) {
    console.log(`The values in array are : ${i}`);
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