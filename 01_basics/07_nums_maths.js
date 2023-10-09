const score = 400
console.log(score);

const balance = new Number(300)    // It defines that it is Number
console.log(balance);

console.log(balance.toString().length);  //We can also change the Types of the object.

//some properties of Number

console.log(balance.toFixed(2));   // it fixed the decimal value upto 2 places after decimal point(.)


const othernum = 23.4535
console.log(othernum.toPrecision(3));

const newnum = 1000000
console.log(newnum.toLocaleString('en-IN'));


// --------------Math------------

// console.log(Math.abs(-4));
// console.log(Math.round(4.83));
// console.log(Math.ceil(4.83));
// console.log(Math.floor(4.83));
// console.log(Math.min(4,35,4,3,43,53));
// console.log(Math.max(4,35,4,3,43,53));
//console.log(Math.random());  // It gives the random value.

const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //Formula to take the value from your min to max.

