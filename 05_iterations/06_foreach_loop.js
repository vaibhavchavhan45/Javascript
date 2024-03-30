//way 1 : forEach loop on array
const code = ["JS", "CPP", "SWIFT", "JAVA", "PY"]

code.forEach( function (i) {
    console.log(i);
} )


//way 2 : forEach loop on array
const coding = [ "REACT", "NODE", "NEXT", "EXPRESS", "vue"]

coding.forEach( (item) => {
    console.log(item);
})


//way 3 : forEach loop on array
const programming = ["SERVER", "DATABASE", "FIREBASE", "ROUTER"]

function program(item){
    console.log(item);
}
programming.forEach(program)   //Give REFERENCE of FUNCTION (ONLY NAME) as a parameter do not execute function there like program()


//forEach loop receive only 3 parameter as elements, index and given array (u can pass any value whatever u want, there is no such issue to use only item,index,array u can use a,b,c)
const codeTool = ["VS CODE", "INTELIJ", "JUPYTER", "SUBLIME"]
codeTool.forEach( (item, index, array, b) => {
    console.log(item, index, array, b);
})

//forEach loop for objects in array [ {}, {}, {}]
const myCode = [
    {
        languageName : "JAVASCRIPT",
        languageExtension : ".js"
    },

    {
        languageName : "JAVA",
        languageExtension : ".java"
    },

    {
        languageName : "PYTHON",
        languageExtension : ".py"
    }
]
myCode.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageExtension);
    console.log(`The extension for ${item.languageName} language is ${item.languageExtension}`);
})