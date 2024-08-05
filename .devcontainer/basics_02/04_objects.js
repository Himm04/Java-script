// const tinderUser = new Object() Singleton Object 
// const tinderUser = {} Non Singleton Object 

const tinderUser = {} 

tinderUser.id = "1234abcd" 
tinderUser.name = "Boat" 
tinderUser.isLoggedIn = false 

// console.log(tinedrUser);

const regularUser = {
    fullname: {
    Userfullname:{
        firstname: "Himanshu",
        lastname: "patel"
    }
    }
}

// console.log(regularUser.fullname.Userfullname.firstname); 
const obj1 = {1: "a", 2: "b"} 
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"} 

// const obj4 = Object.assign({}, obj1, obj2, obj3 ); 
const obj4 = {...obj1, ...obj2};
// console.log(obj4); 

const users = [
    { 
        id: 1, 
        email: "h@gmail.com"
    },

    { 
        id: 1, 
        email: "h@gmail.com"
    }
]

users[1].email 
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); 

const course = {
    coursename: "js in hindi", 
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor 

const {courseInstructor} = course 
const {courseInstructor: Instructor} = course //Object de-structure


console.log(Instructor); 

/*{
    "name": "Himanshu",         JSON 
    "course": "js in hindi",
    
}*/