// if 
// const isUserLoggedIn = true 
// const temperature = 27 

// if(temperature < 30 ) {
    // console.log("Yes temperature is less than 30 ")
// } else {
    // console.log("No temperature is grater than 30 ")
// }
// <, >, <=, >=, !=, ==, ===, !== 

// const score = 200
// if(score > 100){
    // const power = "fly" 
    // console.log(`user power: ${power}`)
// }

// console.log(`user power: ${power}`) 

const balance = 1000

// if(balance > 500) console.log("test") Not a good way

// if(balance < 500){
    // console.log("Less than 500")
// }else if(balance < 750){
    // console.log("Less than 750")
// } else if(balance < 900){
    // console.log("Less than 900")
// } else {
    // console.log("Less than 1200")
// } 

const userLoggedIn = true 
const debitcard = true 
const loggedInfromgoogle = true 
const loggedInfromemail = false 

if(userLoggedIn && debitcard){
    console.log("Allow to buy course")
}

if(loggedInfromgoogle || loggedInfromemail){
    console.log("User logged in")
}