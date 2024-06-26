//for in loop on objects
const obj = {
    car1 : "BMW",
    car2 : "MERCEDES",
    car3 : "LAMBO",
    car4 : "PORSCHE",
    car5 : "ROLLS ROYCE"
}
for (const key in obj) {
    console.log(`${key} :- ${obj [key] }`);
}


//for in loop on array
const arr = ['JEE', 'NEET', 'GATE', 'SSC', 'HSC']
for (const key in arr) {
    console.log(`value at index ${key} is ${arr[key]}`);
}


/* This is not correct way to iterate over `Map` (we have itterate using entries)
const newMap = new Map()
newMap.set('state1' , 'MAHARASHTRA')
newMap.set('state2' , 'UP')
newMap.set('state3' , "MP")
newMap.set('state4' , "HR")
newMap.set('state5' , "GJ")
for (const key in newMap) {
    console.log(newMap [key]);
}
*/
