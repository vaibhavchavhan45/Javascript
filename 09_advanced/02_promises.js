const PromiseOne = new Promise(function(resolve, reject){
    setTimeout(function (){
        console.log("Async function is working"); 
        resolve()
    },1000)
})

PromiseOne.then(function (){
    console.log("promise consumed");
})
//We created Promise and it will run and .then is used to consumed promise

//Promise 2
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async 2");
        resolve()
    }, 1000);
}).then(function (){
    console.log("Promise 2 consumed"); 
})

//Promise 3
//Passing the data
const Promise3 = new Promise( function (resolve, reject) {
    setTimeout(function (){
        resolve({username : "vc", handle : "vc@123"})
    },1000)
})
Promise3.then(function(user){
    console.log(user);
})


//Promise 4 : error
const promise4 = new Promise(function (resolve, reject){
    let error = true
    setTimeout(function(){
        if(!error){
            resolve({username : "vc", email : "vc@gmail.com"})
        }
        else{
            reject('ERROR : Something went wrong!')
        }
    },1000)
})
promise4.then(function(user){
    console.log(user);
    return user.username
}).then(function (myUsername){
    console.log(myUsername);
}).catch(function (err){
    console.log(err);
})


//Promise 5 : !error
const promise5 = new Promise(function(resolve, reject){
    let error = false
    setTimeout(function(){
        if(!error)
            resolve({username : "vc", id : 123})
        else 
            reject('ERROR : Something went wrong!')
    },1000)
}).then(function(user){
    console.log(user);
    return user.username
}).then(function (Myusername){
    console.log(Myusername); 
}).catch(function (err){
    console.log(err);
}).finally(() => console.log("Promise is either resolved or rejected"))


//Promise 6 : (async, await)
const p5 = new Promise((resolve, reject) => {
    setTimeout(function (){
        let error = false
        if(!error){
            resolve({username : "vc", pass : "a120bc"})
        }
        else{
            reject('ERROR DETECTED')
        }
    },1000)
})

async function consumedPromise5(){
    const response = await p5
    console.log(response);
}
consumedPromise5()
//There is 1 problem in async await that it does not handle error gracefully
//Here there is no error that'swhy it runs perfectly fine but if there is an error then u have to handle it using try catch block


//Promise (try, catch)
const p6 = new Promise((resolve, reject) => {
    setTimeout(function (){
        let error = true
        if(!error){
            resolve("Promise resolved")
        }
        else{
            reject("Promise rejected")
        }
    },1000)
})

async function tryCatch() {
    try {
        const response = await p6
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
tryCatch()
