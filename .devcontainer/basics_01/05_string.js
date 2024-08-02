const name = "Himanshu"
const repoCount = 10 

//console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`himanshu-h`);  
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(6));
console.log(gameName.indexOf(`h`)); 

const newString = gameName.substring(0, 6);
console.log(newString); 

const anotherString = gameName.slice(-9, 6);
console.log(anotherString); 

const newStringOne = "     Himanshu    " 

console.log(newStringOne);
console.log(newStringOne.trim()); 

const url = "https://himanshu.com/himanshu%20patel" 

console.log(url.replace(`%20`, `-`));
console.log(url.includes("himanshu")); 

console.log(gameName.split(`-`)); 
console.log(newStringOne.());