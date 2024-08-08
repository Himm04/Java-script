const coading = ["js", "ruby", "java", "python", "cpp"]

// coading.forEach( function (val){
    // console.log(val)
// } )

// coading.forEach( (item) => {
    // console.log(item);
// } )

// function printMe(item){
    // console.log(item);
// }
// coading.forEach(printMe)

// coading.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
// } )

const myCoading = [
    {
        languagename: "javascript",
        languagefilename: "js",
        
    },
    {
        languagename: "java",
        languagefilename: "java",

    },
    {
        languagename: "python",
        languagefilename: "py",

    }
]

myCoading.forEach( (item) => {
    console.log(item.languagename);
} )