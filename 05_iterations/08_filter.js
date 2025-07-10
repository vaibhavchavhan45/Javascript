//filter ==> True, False
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const result = arr.filter ( (item) => item > 40 )  //implicit return (In implicit, dnt write return)
console.log(result);    //If u do not used {} in filter then there is no need to return 


const nums = [1, 2, 3, 4, 5]
const ans = nums.filter((item) => { 
    return item > 2    //explicit return
})
console.log(ans);    //If u used {} in filter then u should have to return


//using forEach
let emptyArr = []
let newArr = [100,200,300,400,500]
newArr.forEach((key) => {
    if(key > 200){
        emptyArr.push(key); 
    }
})
console.log(emptyArr);


const books = [
    {
        title : "Book 1", genre : "History", publish : "1998", edition : "2015"
    },
    {
        title : "Book 2", genre : "Science", publish : "1995", edition : "2018"
    },
    {
        title : "Book 3", genre : "Fiction", publish : "2002", edition : "2017"
    },
    {
        title : "Book 4", genre : "Non-fiction", publish : "1985", edition : "2018"
    },
    {
        title : "Book 5", genre : "History", publish : "1987", edition : "2021"
    },
    {
        title : "Book 6", genre : "Mystery", publish : "1993", edition : "2022"
    },
    {
        title : "Book 7", genre : "Autobiography", publish : "2001", edition : "2021"
    },
    {
        title : "Book 8", genre : "History", publish : "2000", edition : "2018"
    },
    {
        title : "Book 9", genre : "Science", publish : "1998", edition : "2015"
    },
    {
        title : "Book 10", genre : "Fiction", publish : "1995", edition : "2017"
    }  
]
let userBooks = books.filter((key) => key.genre === "History")     //give me books whose genre is history(key refers to each element in array which is basically object)
console.log(userBooks);

let userbks = books.filter((i) => {return i.edition >= 2018 && i.genre == "Science"})
console.log(userbks);




