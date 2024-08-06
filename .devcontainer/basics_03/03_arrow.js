const user = { 
    username: "Himanshu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
     // console.log(this);
    }
} 

// user.welcomeMessage()
// user.username = "sam" 
// user.welcomeMessage() 
// console.log(this); 

// function chai(){
    // let username = "Himanshu"
    // console.log(this.username);
// } 
// chai() 

// const chai = function(){
    // let username = "Himanshu"
    // console.log(this.username)
// }

// const chai = () =>  {
    // let username = "Himanshu"
    // console.log(this.username)
// }

// chai() 

// const addTwo = (num1, num2) => {
    // return num1 + num2

// } 

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Himanshu"})
console.log(addTwo(2, 2));
