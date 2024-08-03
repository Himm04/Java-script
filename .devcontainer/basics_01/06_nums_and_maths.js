const score = 400 
//console.log(score);

const balance = new Number(200);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2)); 

const otherNumber = 24.894 
//console.log(otherNumber.toPrecision(4));

const hundreds = 100000000 
//console.log(hundreds.toLocaleString('en-In')) 

//********************maths**********************//

//console.log(Math);
//console.log(Math.abs(-4));

//console.log(Math.round(4.2));
//console.log(Math.ceil(4.1));

//console.log(Math.floor(4.8)); 
//console.log(Math.sqrt(25));

//console.log(Math.min(2, 4, 6, 8));
//console.log(Math.max(8, 6, 4, 2));

//console.log(Math.random());
//console.log(Math.random()*10 + 1 );
//console.log((Math.random()*10) + 1 );
//console.log(Math.floor(Math.random()*10) + 1);
//console.log(Math.ceil(Math.random()*10) + 1);

const min = 1
const max = 6 

console.log(Math.floor(Math.random()*(max - min + 1)) + min ); 

const newMin = 100
const newMax = 200 

console.log(Math.ceil(Math.random()*(10 + 1 )) + newMin );

console.log(Math.ceil(Math.random()*(newMax - newMin + 1 )) + newMin );