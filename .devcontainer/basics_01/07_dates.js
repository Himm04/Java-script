let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toJSON()); 

//let myCreatedDate = new Date(2024, 3, 27);
//let myCreatedDate = new Date(2024, 3, 27, 6, 28);
//let myCreatedDate = new Date("2024-04-27");
let myCreatedDate = new Date("04-27-2004");

//console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now() 
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()));

let newDate = new Date(); 
//console.log(newDate);
//console.log(newDate.getMonth());
//console.log(newDate.getDay()); 

console.log(
newDate.toLocaleString('defult', {
    weekday: "long",
}))



