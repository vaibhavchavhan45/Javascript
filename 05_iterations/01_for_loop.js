for (let i = 1; i <= 50; i++) {
    let element = i
    if (i == 45) {
        console.log("45 is my number");
    }
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
        console.log(`Outer loop i : ${i}`);
    for (let j = 1; j <=5 ; j++) {
        console.log(`Inner loop value j: ${j} and inner loop ${i}`); 
    }
}

for (let i = 1; i <=10 ; i++) {
    console.log(`Outer loop i : ${i}`);
    for (let j =1; j <=10; j++) {
        console.log(i + ' * ' + j + ' = '  + (i * j)); 
    }  
}


//loop on array
const myArr = [10, 20, 30, 40, 50]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}

const arr = ["Vaibhav", "Chavhan", "from", "Satara"]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}


//break keyword
for (let i = 1; i <=20; i++) {
    if(i == 5) {
        console.log("5 detected!");
        break;
    }
    console.log(i); 
}

//continue keyword
for(let i = 1; i<=10; i++){
    if(i == 1){
        console.log("1 detected!");
        continue;
    }
    console.log(i);       //when continue appears it skip 1 print statement and rest of code run as it is
}