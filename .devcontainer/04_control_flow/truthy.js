const useremail = [] 
if(useremail){
    console.log("Got user email")
} else {
    console.log("Don't have user email")
} 

// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", `false`, " ",[], {}, function(){}

// if(useremail.length ===0 ){
// console.log("Array is empty ")
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// nullish coalescing operator (??): numm undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary operator

// conditon ? true : false

const iceteaprice = 100 
iceteaprice <= 80 ? console.log("less than 80") : console.log
("more than 80")