//In built methods of number
const score = 30;
console.log(score);

const number = new Number(500);
console.log(number);
console.log(number.toString().length);  //converted to string
console.log(number.toFixed(2));         //convert to decimal

const anotherNumber = new Number (1234.25)
console.log(anotherNumber.toPrecision(4));  //use to roundof the values where decimal is present

const num = 100000000
console.log(num.toLocaleString('en-IN')); //converted to readable rupee system like 10000000 t0 1,00,00,000, //by default in US standards if we want in indian standards then en-IN is used
console.log(num.valueOf());               //return given value
console.log(num.toExponential(5));        //represent in exponential notation

//Maths
const newNumber = new Number (-500.25)   
console.log(Math.abs(newNumber));        //It is absolute value method, which converts -ve to +ve and +ve value remains +ve
console.log(Math.round(newNumber))       //roundof

console.log(Math.ceil(200.1));         
console.log(Math.floor(200.9));        
console.log(Math.min(200.1, 300.2, 340, 5));        //o/p : min value amongst all
console.log(Math.max(200.1, 300.2, 340, 340, 5));  //o/p : max value amongst all

console.log(Math.random());      //this method gives random value in between 0 & 1 like 0.6266896125581365
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10 + 1));

const max = 50;
const min = 40;
console.log(Msth.floor( Math.random() * (max - min + 1) + min) );




