                //   --------Objects part one---------      

// Singleton--- (Object.create)


// object literals

const mysym = Symbol("key1") 

const user = {
    name:"Ansh",
    // mysym:"mykey1",        //but if you use [mysym]
    [mysym] : "mykey1",
    "fullname":"ansh singh",
    age:17,
    email:"ansddbb23@gmail.com",
    userId:2344234,
    isLoggedin : false,
    lastLoggedin : ["Monday","Tuesday"]
}                         // -- This is how we use Literal

//  Some methods of Using the Object

// console.log(user.name);        //less in use
// console.log(user["email"]);    // we use the ["email"] bcz it automatically take the values in string type.
// console.log(user["fullname"]);  //second type


// console.log( typeof user.mysym);       //Symbol (unique)  if you put the variable using (.)  type is {string}.Not {symbol}

// console.log(user[mysym]);         //this is the syntax...

// How to Change the values

// user.email = "adkki234@chatgpt.com"
// console.log(user["email"]);

// Freeze the objects---- once you freeze the object you cannot modify it.

// Object.freeze(user);
// console.log(user);

// Function

user.greetings = function(){
    console.log("Hello, User");
}
// console.log(user.greetings);    //function ka refrence dega 
console.log(user.greetings());    

user.greetingstwo = function(){
    console.log(`Hello user,${this.name}`);
}

console.log(user.greetingstwo());

//              --------Objects part Two---------






