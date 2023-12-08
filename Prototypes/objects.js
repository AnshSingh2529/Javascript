function multiplynum (num) {
    return num * 5;
}

multiplynum.power = 2;

console.log(multiplynum(5));
console.log(multiplynum.power);
console.log(typeof multiplynum.prototype);       //((object) =>  it mean's that a function is also an object)

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

const user1 =  new createUser("ansh@2323" ,438);
const user2 = new createUser("raunak@2334" ,403);

user1.printme();
user2.increment();
