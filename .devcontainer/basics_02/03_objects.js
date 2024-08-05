const mySym = Symbol("key1")

const Jsuser = {
name: "Himanshu",
"full name": "Himanshu patel", 
[mySym]: "mykey1",
age: 20, 
location: "indore",
email: "Himanshu@google.com",
isLoggedIn: false,
lastLoginDays: ["monday", "saturday"],

}

//console.log(Jsuser.email);
//console.log(Jsuser["email"]);
//console.log(Jsuser["full name"]);
//console.log(Jsuser[mySym]); 

Jsuser.email = "Himanshu@27.com"
//Object.freeze(Jsuser)
//console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello Js user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}` );
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());