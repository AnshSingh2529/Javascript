// -------------IIFE => Immediatly Invoked function Expressions-------------

//1.simple executable function

// function chai(){
//     console.log(`Database Connected`);
// }

// chai()

//2.IIFE   --> [ ( function(){} )() ]  the fist parenthesis is for function and second one is for calling func..and also we use (;) semicolon to end the iife.

( function chai(){
    //named IIFE
    console.log(`Database Connected`);
} ) ();


( () => {
    //UnNamed IIFE
    console.log(`Database Two Connected`);
} ) ();

( (name) => {
    //parameter IIFE
    console.log(`Database Two Connected ${name}`);
} ) ("ansh");


//global scope se problem hoti hai kai baar ...to usee hatane ke liye hamne IIFE ka use kiya...execute code immediatly.