// Primitive datatypes
 
/*string , number , boolean , null , undefined , symbol , BigInt*/

// Reference types (Non-primitive)

/*Array , Objects , Function*/


let heroes = ["Shaktimaan" , "Naagraj"]    // Arrays

let myObjects = {                          // Objects
    name:"ansh",
    age:23
}

let myFunction = function(){                //Functions
console.log();
}


// ---------------------------------------------------------------------------------------------

// Stack(primitive) & Heaps(Non-primitive)

// 01       => In Stacks value cannot be changeable after storing it makes a new stack to store the new value

let myname = "Ansh"
let yourname = myname
yourname = "vansh"

console.log(myname);
console.log(yourname);

// 02       => In Heaps value can be changeable or managed in same memory and change the previous value(Changes affect the Original value )

let userone = {
    email:"user@gmail.com"
}

let userTwo = userone
userTwo.email = "userTwo@gmail.com"

console.log(userone);
console.log(userTwo);

