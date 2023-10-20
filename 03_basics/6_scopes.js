//--------------Scopes {}-------------

let a = 300;     //Global scope -> jo values ham block ke bahar hi assign aur print karate hain
// const b = 30;
// var c = 40;     (var) print in both scopes,but (let) and (const) doesn't.


if(true){       //Local scope -> jo ham block ke ander assign krke print karate hain
    let a = 10;
    const b = 30;
    // console.log(a);     //returns the values assign in local scope
    // console.log(b);     //returns the values assign in local scope
    
}

// console.log(a);            //return the value assign in global scope
// console.log(b);           //if value doesn't assign at global scope it gives an error.


//NOTE ----->     places where we use curly braces is a scope.(in functions and making objects etc...)!

//---websites pr inspect krke (console) me (global scope) different hota hai aur (node) use krke terminal se krna different hota hai.


//---------Nested function---------

function one(){
    const username = "ansh"

    function two(){
        const websites = "youtube"
        // console.log(username);
        // console.log(websites);      //it Prints here bcz defined in same block.
    }
    // console.log(websites);      //it gives an error ...website is undefined.
    two()
}
one()


if(true){
    const name = "ansh"
    if(name === "ansh"){
        const website = " youtube"
        // console.log(name + website);
    }
    // console.log(website);         //same condition gives an error that website is undefined

}
// console.log(name);         //it also gives an error bcz used in outside loop


//++++++++++++++++ Interesting ++++++++++++++

console.log(addone(5));                 //we can write here before initialise the function
function addone(num){
return num+1
}

// addtwo(4)                  //ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num + 2
}
console.log(addtwo(4));

