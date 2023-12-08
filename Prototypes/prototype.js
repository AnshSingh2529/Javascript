let myname = "Ansh    "

// console.log(myname.length);     //What if we want true length by using (TrueLength) such property..

// console.log(myname.trim().length);  // this is a regular using property..

let myHero = ["father" , "brother"];

let heroPower = {
    father: "Being So Strong",
    brother: "Being So kind and Helpfull",

    Thatsme: function (){
        console.log(`I am a Hero too and powers are ${this.father}`);
    }
}

// created for all OBJECT

Object.prototype.ansh = function (){
    console.log("I am a Strong and dedicated person , run everywhere");
}

// heroPower.ansh();     :- Object
// myHero.ansh();        :- Array

// Array

Array.prototype.vansh = function(){
    console.log("Lets check if its runs in Array and others");
}

// heroPower.vansh();    :-- heroPower.vansh is not a function  :- Object
// myHero.vansh();        :-Array runs only 


/*
function :\
Arrays   :-------- OBJECT -----> NULL..
String   :/

*/


// Inheritance










