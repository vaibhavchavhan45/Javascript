const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#"
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)] 
    }
    return color;
}


let intervalId;
let startChangingColor = function () {
    let changeColor = function () {
        document.body.style.backgroundColor = randomColor();
    }  
    if(intervalId == null)
        intervalId = setInterval(changeColor, 1000);   
}

let stopChangingColor = function (){
    clearInterval(intervalId);
    intervalId = null
}

document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector("#stop").addEventListener('click', stopChangingColor)

/*******Why we are using if(intervalId == null) this condition?******/
//Because first when u hit the start button then it will change the color after every 1 sec
//then again if u press the start button then again new interval of changing collor in 1 sec will start
//If u hit start button continuously then many interval will start and run simultaneously and may overlap with each other
//we just want ki if we hit the start first time then it will run, if we hit again then it should not run
//So, intervalId holds setInterval function....and we tell that function by using if condition
//ki if intervalId is null means it runs for first time i.e. we click for first time to start button
//then it should run, otherwise if we hit continuous start buttton then intervalId is not null means we already press start button once
//that is interval will not execute again and again

/******why we are using this intervalId = null?***/
//because once we hit stop button then intervaId means setInterval will reset intialise to null
//If u already hit start button 20 times means setInterval will not run but holds the value of 20 intervals
//So if we hit stop then no matter how much interval are there reset all them to 0.
//If someone hit the start again then it should start from 0 means null not from the last stored of of Interval
//last Stored Value of Interval ========= number of times we hit the start button

