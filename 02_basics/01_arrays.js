//Creating an Array
const myArr = [0,1,2,3,4,5]
console.log(myArr);

const myArr2 = [1,2,3,true,"vaibhav"]
console.log(myArr2);

let myArr3 = new Array(0,1,2,false,'vc')
console.log(myArr3);

//Methods of Array
const newArr = [0,1,2,"vc",true,3,4,5]

newArr.push(null)     //Add the given value(parameter) at the end of array
console.log(newArr);

newArr.pop()          //Remove last element from array
console.log(newArr);

newArr.unshift(70)    //Add given value at start of array(at 0th index)
console.log(newArr);

newArr.shift()         //Remove the element of start i.e. 0th index
console.log(newArr);

console.log(newArr.includes(70));  //check whether the given element is present or not (o/p : T or F)
console.log(newArr.indexOf(true)); //check the indexof given element
console.log(newArray.reverse());   //reverse the given array
console.log(newArray.toSorted());   //sort in ascending order

//join()
const myNewArray = newArray.join()   //convert array(typeof object) to string (typeof string)
console.log(newArray);
console.log(myNewArray);
console.log(typeof myNewArray);


//Slice()
const theNewArray1 = [100,200,300,400,500]
console.log("Array 1 : ", theNewArray1);
const theNewArray2 = theNewArray1.slice(1,2)  //Give part of array from 1 to 3 (1 is inclusive and 3 is exclusive)
console.log("Array 2 : ", theNewArray2);
console.log("Original Array : ", theNewArray1); //original array does not change

//splice()
const theNewArr1 = [10,20,30,40,50]
console.log("Array 1 : ", theNewArr1);
const theNewArr2 = theNewArr1.splice(1,3)  //give part of array from index 1 to 3
console.log('Array 2 : ', theNewArr2);
console.log("Original Array : ", theNewArr1); //original array changes(original arr remains as it is except the part of splice)


//Add elements using splice() without deletion of other elements
const newArray = [10,20,30,40,50]
newArray.splice(2,0,"jan") //add the jan at index 2 without any removel of other elements 0 repressents no removal
console.log(newArray);


//toSpliced()
const months = ["Jan", "Mar", "Apr", "May","june","july","aug","sep"];

const months2 = months.toSpliced(1,0,"feb") //insert feb at index 1 without any deletion (o represent no deletion)
console.log(months2);

const months3 = months2.toSpliced(2,3)      //delete 3 elements starting from index 2
console.log(months3);

const months4 = months3.toSpliced(2,4,"feb","mar")  //replace 4 ele starting from index 2 and add feb and mar there
console.log(months4);



