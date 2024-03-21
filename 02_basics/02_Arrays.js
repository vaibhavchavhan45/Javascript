//push()
const arr1 = ["shery", "carg", "sefex", "snipp"]
const arr2 = ["rohit", "shubh", "naruto", "shaktiman"]
arr1.push(arr2) 
console.log(arr1);        //['shery','carg', 'sefex', 'snipp', ['rohit', 'shubh', 'naruto', 'shaktiman']]
console.log(arr1[4][0]);  //Access the elements

//concat()
const newArr1 = ["shery", "carg", "sefex", "snipp"]
const newArr2 = ["rohit", "shubh", "naruto", "shaktiman"]
const newArr = newArr1.concat(newArr2)
console.log(newArr);

//Spread Method
const myArr1 = ["tony", "jack", "lucifer", "professor"]
const myArr2 = ["batman", "superman", "spiderman", "howkay"]
const myArr3 = ["loki", "hela", "thor","odin", true]
const combine = [...myArr1, ...myArr2, ...myArr3]
console.log(combine);

//flat()
const multiversOfArray = [1, 2, 3, 4, 5, [6, 7, 8], [10 ,20 ,30, [10, 20, [100, 200] ] ] ]
const combined = multiversOfArray.flat(Infinity)  //give output of nested array in a single array
console.log(combined);

/***** Methods of Array *****/

//Array.isArray()
console.log(Array.isArray(combined));    //Use to check given parameter as array or not

//Array.from()
console.log(Array.from("vaibh"));      //creates each and every instance in new array i.e. ["v","a","i","b","h"]

console.log(Array.from({name : "vc"})); //This is a object which is not itterable so o/p  is [] 

console.log(Array.from(Object.entries({name : "vaibhav"}))); //Object.entries() is used to convert object into array including key & value in pair like [["name", "vaibhav"]] and then from() works

//Array.of()
let val1 = 100
let val2 = 500
let val3 = 1000
console.log(Array.of(val1, val2, val3));   //creates new array from arguments

const a = true 
const b = "ash"
const c = null
console.log(Array.of(a,b,c));






