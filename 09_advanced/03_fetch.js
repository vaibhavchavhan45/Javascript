async function fetch_t(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data);
}
fetch_t()


//Same work in try catch function
async function tryCatch(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log("Error" , error);
    }    
}
tryCatch()


//Same work using .then and .catch
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))
