function saymyName (){
    console.log("H");
    console.log("i");
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("u");
}

// saymyName()

//function addTwoNumber(number1, number2){
// console.log(number1 + number2)
// } 

function addTwoNumber(number1, number2){
   
    // let result = number1 + number2
    // return result 

    return number1 + number2 // Easy way 

} 

const result = addTwoNumber(2, 8 )
// console.log("result", result ) 

function loginUserMessage(username){

    if(username === undefined ){ // if(!username)
        console.log("Please enter a user name" )
        return
    }

    return `${username} just logged in `
}
// console.log(loginUserMessage());

function calculatecartprice(val1, val2, ...num1){
    return num1
}

console.log(calculatecartprice(200, 400, 600, 800)) 

const user = {
    username: "Himanshu",
    price: 199
}

function handleobject (anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user);

handleobject({
    username: "mayhim",
    price: 499 
}) 
const myNewArray = [200, 400, 600, 800]

function returnsecondvalue(getArray){
    return getArray[1]
}

// console.log(returnsecondvalue(myNewArray));

console.log(returnsecondvalue([200, 400, 600, 800]));