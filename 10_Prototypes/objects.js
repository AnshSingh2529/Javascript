function multiplynum (num) {
    return num * 5;
}

multiplynum.power = 2;

console.log(multiplynum(5));
console.log(multiplynum.power);
console.log(typeof multiplynum.prototype);       //((object) =>  it mean's that a function is also an object)


// CONSTRUCTION FUNCTION

function createUser(username , score){
    this.username = username;
    this.score = score;
}


createUser.prototype.increment = function (){
   this.score++; 
   console.log(`${this.username} incremented score is ${this.score}`);          //user to show the current context.
}

createUser.prototype.printme = function (){
    console.log(`${this.username} score is ${this.score}`);
}

// (new) keyword is important to 

const user1 =  new createUser("ansh@2323" ,438);
const user2 = new createUser("raunak@2334" ,403);

user1.printme();
user2.increment();


/* Here's what a (new) keyword do.. use case:-

1.(new) keyword :- A new Object is created : The (new) Keyword initiates the creation of the new javascript Object.

2.A Prototype property is Linked :- the newly created Object gets Linked to the Prototype of the Constructions Function.
this means that it has the access to properties and methods defined on the constructor's function.

3.Construction :- It is a Constructor function called with a specified arguments and bound with the newly created Object.if there is No explicit return value is specified from the constructor function. Javascript assumes this,the newly created object, is intended to return value.

4.the new Object is return :- After the construction function is called . if it does not return a non-primitive value (Object , Array, function) etc.the newly created object is returned.

*/
