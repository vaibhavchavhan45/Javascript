//reduce : Conventional function
let arr = [1,2,3,4,5]
let result = arr.reduce(function (currentValue,accumulator){
    return currentValue + accumulator
},0)
console.log(result);

let myArr = [5,10,15,20]
let total = myArr.reduce(function(i,j) {
    console.log(`accumulator : ${i} and Current value : ${j}`);
    return i + j
},20)     //Value of accumulator is 20
console.log("total : ",total);


//reduce : Arrow function
let newArr = [10,20,30]
let newResult = newArr.reduce((currentValue,accumulator) => (currentValue + accumulator),0)
console.log(newResult);

let Arr1 = [10,22,13,14]
let newRe = Arr1.reduce( (acc, val) => {
    console.log(`Accumulator : ${acc} and Current Value ${val}`);
    return acc + val;
}, 0)
console.log(newRe);


// Explaination : In reduce method, it has two values current value and another one is accumulator 
// Accumulator holds value which we have provided(like 0) and current value is a value which taken from Array

/*
Short Notes : 
map: Transforms each element and returns a new array.
filter: Selects elements based on a condition and returns a new array.
reduce: Combines all elements into a single result based on an accumulator.
*/