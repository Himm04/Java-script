const myArr = [0, 1, 2, 3, 4, 5 ]; 
const myheros = ["spiderman", "superman"]
const myArr2 = new Array(1, 2, 3, 4);
//console.log(myArr[0]) 

// Array method

//myArr.push(8);
//myArr.push(7);
//myArr.pop() 

//myArr.unshift(10)
//myArr.shift()

//console.log(myArr.includes(4))
//console.log(myArr.indexOf(2))

const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr);
// slice, splice 

console.log("A ", myArr); 

const myn1 = myArr.slice(1, 5);

console.log(myn1);
console.log("B ", myArr); 

const myn2 = myArr.splice(1, 5);
console.log("c ", myArr); 
console.log(myn2);

