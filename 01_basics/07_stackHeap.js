//Stack memory allocation
let userId = "chavhan@yahoomail.com"
let anotherId = userId;
anotherId = "vaibhav@gmail.com"
console.log(anotherId);
console.log(userId);
/***** userId is a primitive datatype so it is allocated in stack then anotherId also a primitive datatype so it is also allocated in stack, when we assign value of userId to anotherId then the original value of userId not given to anotherId. here, the copy of userid is given to anotherId so,when we make changes in the value of anotherId then there has no change in the value of userId because IN STACK COPY OF ORIGINAL IS PROVIDED *****/


//Heap memory allocation
let obj = {
    name : "Vaibhav",
    Id : "123456",
    profession : "Student"
}

let obj2 = obj
obj2.Id = "456789"

console.log(obj.Id);  
console.log(obj2.Id);
/***** obj is object which is a non-primitive datatype so it is allocated in the Heap,  Here,we assign all values of obj to obj2, In heap always reference is given means original value is given. When we made a change in obj2'Id then it also reflects in obj's Id..IN HEAP ALWAYS REFERENCE(ORIGINAL VALUE) IS PROVIDED NOT COPY *****/