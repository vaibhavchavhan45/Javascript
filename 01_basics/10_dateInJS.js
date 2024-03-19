let myDate = new Date();
console.log(myDate);    //2024-03-19T14:26:25.774Z

//Live Date and time in o/p
console.log(myDate.toString());           //Tue Mar 19 2024 19:48:56 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString());     //19/3/2024, 7:48:56 pm
console.log(myDate.toUTCString());        //Tue, 19 Mar 2024 14:21:54 GMT
console.log(myDate.toJSON());             //2024-03-19T14:22:47.662Z
console.log(myDate.toISOString());        //2024-03-19T14:20:48.556Z

//Date in o/p
console.log(myDate.toDateString());       //Tue Mar 19 2024
console.log(myDate.toLocaleDateString()); //19/3/2024

//Time in o/p
console.log(myDate.toTimeString());       //19:53:45 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleTimeString()); //7:56:25 pm


//Date and time input
let dateInput = new Date(2024, 0, 18)     //0 represents january(0 indexing) beacuse its array we have given 3 value 
console.log(dateInput.toLocaleString());  

let createdDate = new Date(2023, 3, 16, 5, 4, 22) //date and time combined
console.log(createdDate.toLocaleString());

let newDate = new Date("2024-01-23")       // YY/MM/DD (here we define values in string so jan starts from 1 not from 0)
console.log(newDate.toLocaleString());

let createdNewDate = new Date("01-14-2024") // MM/DD/YY
console.log(createdNewDate.toLocaleString());

//Time stamp
let timeStamp = Date.now()          //This provides time in milliseconds from 1-Jan-1970
console.log(timeStamp);
        //OR
let time = new Date();
console.log(time.getTime());

let date = new Date("2024-03-19")  //time in millisecond from 1 jan 1970 to 2024-03-19 
console.log(date.getTime());



//node 01_basics/10_datesInJS.js

//convert time from milliseconds to seconds
let formattedDate = Date.now()
formattedDate = formattedDate / 1000
console.log(Math.round(formattedDate));
            //OR
console.log( Math.round(Date.now()/1000) ); 


//Exact specification about date,time,day,month etc.etc.
let theDate = new Date()
console.log(theDate.getDate());
console.log(theDate.getDay());
console.log(theDate.getMonth()); //month in 0 indexing means if its march means 3 ao i gives us 2 so usually we add 1 to it
console.log(theDate.getMonth() + 1); //Now gives right month
console.log(theDate.getHours());
console.log(theDate.getFullYear());
console.log(theDate.getMinutes());
console.log(theDate.getSeconds());
console.log(theDate.getUTCMilliseconds());
console.log(theDate.getMilliseconds());


//Uses(Method to write) of these specification
let theNewDate = new Date() 
console.log(`Today's date is ${theNewDate.getDate()} and a happy ${theNewDate.getDay()}, Now we are going to celebrate birthday of dear at sharp ${theNewDate.getHours()} O'Clock & ${theNewDate.getMinutes()} min`);

// Array to store day names
let theDates = new Date();
let dayOfWeek = theDate.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(dayNames[dayOfWeek]);
 
//
const todaysDate = new Date()
let shortDay = todaysDate.toLocaleString('default', {weekday : "short"})
console.log(shortDay);
          //OR 
let weekday = todaysDate.toLocaleString('default',{
    weekday : "long",
    hour : "2-digit",
    minute : "numeric",
    second : "numeric"
})
console.log(weekday);