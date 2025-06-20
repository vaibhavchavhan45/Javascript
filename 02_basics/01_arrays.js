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
console.log(newArr.reverse());   //reverse the given array
console.log(newArr.toSorted());   //sort in ascending order

//join()
const myNewArray = newArr.join()   //convert array(typeof object) to string (typeof string)
console.log(newArr);
console.log(myNewArray);
console.log(typeof myNewArray);


//Slice()
const theNewArray1 = [100,200,300,400,500]
console.log("Array 1 : ", theNewArray1);
const theNewArray2 = theNewArray1.slice(1,4)  //Give part of array from 1 to 3 (1 is inclusive and 4 is exclusive)
console.log("Array 2 : ", theNewArray2);
console.log("Original Array : ", theNewArray1); //original array does not change in any case of slice

let dearArr = [1,2,3,4,5]
let myDearArr = dearArr.slice(2)  //print everything in array starting from index 2
console.log(myDearArr);           
console.log(dearArr);  //this does not change

let thisArr = [1, 2, 3];
let copy = thisArr.slice();  //if we didn't provide argument in slice() it will gives output as whole array(cloning the array)
console.log(copy);  // [1, 2, 3]

let str = "abcdef";
console.log(str.slice(2, 5))  // "cde"

let lastArr = [10, 20, 30, 40, 50];
let newLastArr =  lastArr.slice(-3);  //-3 means 3rd index from end....(Here element 30 at -3 idx)So, print everything in array starting from idx 2 where element 30 is present 
console.log(newLastArr);    // [30, 40, 50]
let finalArr = lastArr.slice(-4, -1);  //Print all elements from -4 means 4th element from last i.e. 20 and -1 means 1 index from last i.e 50 but our last index is excluded in slice i.e started from 20 and stop just before the element 50 
console.log(finalArr);      // [20, 30, 40]
  

//splice(st index, delete count)
const theNewArr1 = [10,20,30,40,50,60,70,80,90,100]
console.log("Array 1 : ", theNewArr1);
const theNewArr2 = theNewArr1.splice(2,3)  //delete 3 elements starting from idx 2 ...splice(st idx, dlt count)
console.log('Array 2 : ', theNewArr2);      //printing the deleted elements from array
console.log("Original Array : ", theNewArr1); //printing everything in the array except the deleted items

//using splice we are making changes in original arr so the whole changes by splice method only shows in original array but we are holding the splice method in another variable so that variable will print only deleted items in every case of splice()
let theArr = [1, 2, 5];
let ans = theArr.splice(2, 0, 3, 4);  // start at index 2, delete 0, insert elements 3 and 4
console.log(ans);           //print the deleted items
console.log(theArr);       // [1, 2, 3, 4, 5]

let theNewArr = [1, 2, 3, 4, 5];
let zArray = theNewArr.splice(1, 2, 'a', 'b', 'c');  // remove 2 elements starting from index 1, insert 'a' and 'b' and 'c' there
console.log(zArray);               //Print deleted items
console.log(theNewArr);           // [1, 'a', 'b','c', 4, 5]

let arr = [1,2,3,4,5]
let arr2 = arr.splice(2)   //delete everything in the array start from idx 2 (index 2 included)
console.log(arr2);         //print the deleted element in above method
console.log(arr);          //printing everything in the array except the deleted items

let onlyArr = [1, 2, 3];
let myOnlyArr = onlyArr.splice(1, 0);  // starting from idx 1 dlt 0 elements i.e. no deletion, no insertion
console.log(myOnlyArr); //Print empty array because nothing is removed/deleted
console.log(onlyArr);  // [1, 2, 3]

let uniqueArr = [10, 20, 30, 40, 50];
let myUniqueArr = uniqueArr.splice(-2, 1);   // remove 1 item from 2nd last element
console.log(myUniqueArr);         //print deleted item
console.log(uniqueArr);          // [10, 20, 30, 50]

//Add elements using splice() without deletion of other elements
const newArray = [10,20,30,40,50]
newArray.splice(2,0,"jan") //add the jan at index 2 without any removel of other elements 0 repressents no removal
console.log(newArray);


//toSpliced()
const months = ["Jan", "Mar", "Apr", "May","june","july","aug","sep"];

const months2 = months.toSpliced(1,0,"feb") //insert feb at index 1 without any deletion (0 represent no deletion)
console.log(months2);

const months3 = months2.toSpliced(2,3)      //delete 3 elements starting from index 2
console.log(months3);

const months4 = months3.toSpliced(2,4,"feb","mar")  //delete 4 ele starting from index 2 and insert feb and mar there
console.log(months4);

let yesIsAtwo = [10, 20, 30, 40];
let yesIsAtwo2 = yesIsAtwo.toSpliced(1, 2, 99, 88);  //dlt 2 ele. starting from idx 1 and insert other given elements there....delete 20,30 and insert 99,88
console.log(yesIsAtwo2);  // [10, 99, 88, 40]
console.log(yesIsAtwo);     // [10, 20, 30, 40] ← unchanged


