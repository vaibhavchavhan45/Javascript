if(true){
    let a = 5
    const b = 55
    var c = 555
}
console.log(a);    //cannot access without initialization
console.log(b);    //cannot access without initialization
console.log(c);    //555



let a = 10
const b = 20
var c = 30
if(true){
    let a = 100
    const b = 200
    var c = 300
}
console.log(a);     //10
console.log(b);     //20
console.log(c);     //300



function one (){
    const name = "VC"
    function two (){
        let platform = "internet"     //cannot access outside
        console.log(name);            
    }
    console.log(platform);           //error because platform is in block level scope 
    two()
    function three(){
       two()
    }
    three()
}
one()




if(true){
    const username = "Vaibhav"
    if(username === "Vaibhav"){
        let champ = "neeraj"
        console.log(username);
    }
    if(true){
        const write = null
        console.log(champ); //error
    }
    console.log(write);     //error
}

console.log(ez(5));        //we can call function above in global scope and its executes

function ez(num){
    return num + 1
}


console.log(bellow(5));        //we cannot call function above anywhere of that function if that function is stored in variable 
let bellow = function (num){
    return num * 2
}

