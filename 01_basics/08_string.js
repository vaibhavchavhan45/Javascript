//Old Method (Valid but Outdated)
const name = "My name is Vaibhav"
const age = " I'm 22 yrs old"
console.log(name + age + " Pesrsuing B.E.");

//Modern Method (String interpolation)
const myName = "Vaibhav"
const myTown = "Arni"
console.log(`My name is ${myName} and I am from ${myTown}`);

//Another way to declare string in the form of onject
const gameName = new String('vaibhav-c');
console.log(gameName);

console.log(gameName[2]);              //If we give out of boundary value then o/p will be undefined
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('c'));   //character which is not present in string then it will gives o/p as -1 means FALSE
console.log(gameName.charAt(0));
console.log(gameName.substring(0,4)); //substring does not include last value takes 1 value before it i.e. 0 to 4 means it will take from 0 to 3 

let anotherName = gameName.slice(-5, 7) //-ve value means start from right and positive means from left
console.log(anotherName);               //..So, -5 to 7 means it comes 6 places(0 indexing) from right and 7 means 8 value from left and print value in between them

const newString = "     vaibhav     "
console.log(newString);
console.log(newString.trim());        //Remove spaces of both sides in o/p

let url = "https://vaibhav.com/vaibhav%20chavhan"
console.log(url.replace( '%20', '-')); //replace first parameter with second
console.log(url.includes('vaibhav')); //It check whether vaibhav is present or not if present then TRUE if not then o/p is FALSE

const str = "vaibhav-chavhan-45"    
console.log(str.split('-'));        //on the basis of parameter method splits variable value in array type e.g. ['a', 'abc', '123']
console.log(str.anchor('vaibhav')); //write o/p in the foem of html <a> tag
console.log(str.at(5));             //same as charAt
console.log(str.big());             //gives o/p in <big> tag of html (parameter not required)
console.log(str.blink());           //gives o/p in <blink> tag of html (parameter not required)
console.log(str.bold());            //gives o/p in <b> means bold tag of html (parameter not required)
console.log(str.charCodeAt(0));     //gives unicode values somewhat like ASCII(most of ascii and unicode values are same)
console.log(str.codePointAt(5));    //unicode of given index

const firstStr = "vaibhav"
const secondStr = "chavhan"
console.log(firstStr.concat(secondStr)); //combines both string
console.log(firstStr.endsWith('v'));    //check given string ends with provided parameter or Not.



