let myname = "Ansh    "

// console.log(myname.length);     //What if we want true length by using (TrueLength) such property..

// console.log(myname.trim().length);  // this is a regular using property..

let myHero = ["father" , "brother"];

let heroPower = {
    father: "Being So Strong",
    brother: "Being So kind and Helpfull",

    Thatsme: function (){
        // console.log(`I am a Hero too and powers are ${this.father}`);
    }
}

// created for all OBJECT

Object.prototype.ansh = function (){
    // console.log("I am a Strong and dedicated person , run everywhere");
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

const User = {
    Name : "Anshuu",
    Rollno : 34
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false,

    getinTouch: function(){
        return `kindly call me at :-2373684682 ${this.Name}`
    }
}

const TASupport = {
    makeAssignment: "Javascript Assign",
    fulltime: true,

    // __proto__: TeachingSupport
}


// Teacher.__proto__ = User;
// console.log(Teacher.Name);

// Modern syntax

// Object.setPrototypeOf(TASupport,Teacher);

// console.log(TASupport.makeVideo);


// Object.setPrototypeOf(User,TeachingSupport);
// console.log(User.getinTouch());



// How to create your Own Prototype

let anotherusername = "anshsingh   ";

String.prototype.trueLength = function(){
    // console.log(this);
    console.log(`True Length of the :-"${this}" is :- ${this.trim().length}`);
}

anotherusername.trueLength();

myname.trueLength();

"Adiyogi  ".trueLength();








