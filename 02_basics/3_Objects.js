                //   --------Objects part one---------      

// object literals type object creation 

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

// user.greetings = function(){
//     console.log("Hello, User");
// }
// // console.log(user.greetings);    //function ka refrence dega 
// console.log(user.greetings());    

// user.greetingstwo = function(){
//     console.log(`Hello user,${this.name}`);
// }

// console.log(user.greetingstwo());

//              --------Objects part Two---------


//Singleton Object

// const tinderUser = new Object()    // this is singleton type object creation 

const tinderUser = {}

tinderUser.userId = "abc_232"
tinderUser.name = "Anuj"
tinderUser.contact = 3702420842

// console.log(tinderUser);     // Output is {}.

const regularuser = {
    email:"sanjguufg@CharacterData.com",
    fullname: {
        firstname:"anj",
        lastname:"girja"
    }
}
// console.log(regularuser.fullname);

const obj1 = {1:"a" , 2:"b"}
const obj2= {3:"b" , 4:"d"}

// const obj3 = Object.assign({},obj1,obj2)      //.assign()   help in combining the values
const obj3 = {...obj1,...obj2}    //spread concept


// console.log(obj3);

const USER = [                       //it is called as Arrays of Objects
    {
        email:"a@gmail.com",
        name:"anuj"
},
    {
        1:"a",
        2:"b"
},
    {
        1:"a",
        2:"b"
}
]

// console.log(USER[0]);      //for accessing single values fromn Arrays of Objects

// console.log(tinderUser);

//some prototypes of objects

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("name"));











