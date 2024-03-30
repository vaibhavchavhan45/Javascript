//Nullish Coalescing operator (??) : null undefined

/*(In JavaScript, the ?? operator is called the nullish coalescing operator. It returns the right-hand operand when the left-hand operand is null or undefined, otherwise, it returns the left-hand operand.)*/


let value;

value = 5 ?? 10
value = null ?? 5
value = 15 ?? 20 ?? undefined
value = null ?? undefined
value = undefined ?? null
console.log(value)


//Ternary
const balance = 500000
balance >= 200000 ? console.log("Balance is successfully accessed") : console.log("Balance not accessed")

