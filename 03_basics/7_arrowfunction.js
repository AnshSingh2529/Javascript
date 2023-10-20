//---------------Arrow function---------

const user = {
    username:"ansh",
    price:199,

    welcomeMessege : function(){
        // console.log(`${this.username} , welcome to website`);       //this is keyword used to refers to the current context.
        // console.log(this);
    }
 }

// user.welcomeMessege()

// user.username = "anuj"       //here we change the context.
// user.welcomeMessege()

// console.log(this);    //it gives an empty {} while on browser it gives (Windows{}).


// function one(){
//     const username = "ansh"
//     console.log(this);
// }
// one()

// const userone = function(){
//     const username = "ansh"
//     console.log(this);
// }
// userone()

// const userone = () => {            //here [ () => ] this is called (arrow) function(){}
//     const username = "ansh"
//     console.log(this.username);
// }
// userone()

//--------simple use of arrow function--------


//  const addtwo = (num1 , num2) => {           //explicit return ... use return
//     return num1 + num2
// }
// console.log(addtwo(4,3));



//  const addtwo = (num1 , num2) => num1 + num2   //implicit return ..do not use return
//  console.log(addtwo(4,3));



//  const addtwo = (num1 , num2) => (num1 + num2)      //implicit return ..do not use return
//     console.log(addtwo(4,3));


const name = () => ({username: "Anshsingh"})          //we can use to print object data
console.log(name());



