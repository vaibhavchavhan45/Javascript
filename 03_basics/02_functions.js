//rest operator
function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 2000));

//Values in num1 using rest operator (Interview)
function CartPrice(val1, val2, ...num1) {
    return num1
}
console.log(CartPrice(1000, 2000, 3000, 4000));     //1000 is stored in val1, 2000 is stored in val2 and rest of values stored in num1


//Object handeling using function
const user = {
    username: "Vaibhav",
    id: "123vc4567"
}
function handleObject(anyobject) {
    return `My name is ${anyobject.username} and my id is ${anyobject.id}`
}
console.log(handleObject(user));


//Another way of code writing to handle Object in function
function handleObject2(myobject) {
    console.log(`My name is ${myobject.username} and I'm from ${myobject.village}`);
}
handleObject2({
    username: "Vaibhav Chavhan",
    village: "Satara"
})



//Array Handeling in function
myArray = [1, 2, 3, 4, 5, 6, 7]
function returnValue(getArray) {
    return getArray[2]
}
console.log(returnValue(myArray));


//Another way of code writing to handle Array in function
function returnVal(anyArray) {
    return anyArray[0]
}
console.log(returnVal([100, 200, 300, 400]));