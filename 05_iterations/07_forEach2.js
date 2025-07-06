const tiger = ['WAGDOH', 'BAJRANG', 'MATKASUR', 'KHALI', 'TYSON']
const tadoba = tiger.forEach( (item) => {
    console.log(item);
} )
console.log(tadoba);  //undefined because forEach does not return any values


const tigers = ['WAGDOH', 'BAJRANG', 'MATKASUR', 'KHALI', 'TYSON']
const tadobas = tigers.forEach( (item) => {
    console.log(item);
    return item     //still value is undefined means forEach does not return any value
} )
console.log(tadobas);

