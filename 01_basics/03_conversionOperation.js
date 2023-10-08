let score = "33sa"

// console.log(typeof score);

let valueInNumber  = Number(score)  // We change the type but when we are going to print the value it prints (NaN) means Not a Number.

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
33 => 33
"33abc" => NaN
true => 1; false => 0;
 */

let isLoggedin  = 1
let BooleanisLoggedin = Boolean(isLoggedin)
// console.log(isLoggedin);

/*
1 => true 
"" => false
"ansh" => true
 */

let somenumber = 33
let stringnumber = String(somenumber)
// console.log(stringnumber);
// console.log(typeof stringnumber);

/*these types of conversion you should look carefully
we will further learn while doing projects */


/********Operations*******/

let value = 3
let negativeValue = -value
console.log(negativeValue);

// console.log(3+3);    addition
// console.log(2-1);    substraction
// console.log(2*3);    multiplication
// console.log(2**3);   to the power
// console.log(3/2);   division
// console.log(9%3);   modulus

let str1 = "hello"
let str2 = "Shivam" 

let str3 = str1 + str2

// console.log(str3);
// console.log("1" + 2);       // Output => 12
// console.log(1 + "2");       // Output => 12
// console.log("1" + 2 + 2);   // Output => 122
// console.log(1 + 2 + "2");   //Output => 32  bcz numbers are first preference

let getCounter = 100
// getCounter++;       This is called postfix (Increments and return the value after Increamenting)
// ++getCounter;       This is called prefix (Increments and return the value before Increamenting)
console.log(getCounter);




