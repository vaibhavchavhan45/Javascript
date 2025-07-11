//Map is used to do the modifications

let arr = [10,20,30,40,50,60,70,80,90]
let result = arr.map((num) => num * 10)     //num means elements of array & multiply each element by 10
console.log(result);


//Chaining
let newArr = [100,200,300,400,500]
let newResult = newArr
                      .map( (key) => key/10 )    //divide by 10
                      .map( (key) => key+1 )     //add 1 to the which we got from upper operation(/10) 
                      .filter((key) => key > 20) //print values greater than 20
console.log(newResult); 

//you can change name of key as num or anything in separate funtions (like key in map, num in filter, i in another map)

