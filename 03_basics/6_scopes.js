//--------------Scopes {}-------------

let a = 300;     //Global scope -> jo values ham block ke bahar hi assign aur print karate hain
// const b = 30;
// var c = 40;     (var) print in both scopes,but (let) and (const) doesn't.


if(true){       //Local scope -> jo ham block ke ander assign krke print karate hain
    let a = 10;
    const b = 30;
    console.log(a);     //returns the values assign in local scope
    console.log(b);     //returns the values assign in local scope
    
}

// console.log(a);            //return the value assign in global scope
// console.log(b);           //if value doesn't assign at global scope it gives an error.


//NOTE ----->     places where we use curly braces is a scope.(in functions and making objects etc...)!

//---websites pr inspect krke (console) me (global scope) different hota hai aur (node) use krke terminal se krna different hota hai.


