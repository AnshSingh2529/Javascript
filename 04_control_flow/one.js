//if

// if (true){                     //In the parathesis of (if) condition should be always true.

// }

//condtions are --> < , > , <= , >= , !=, == , !== , ===(this is specially for type check).for example

//1.

// if(2 == 2){
//     console.log(`executed`);
// }

// if (2==="2"){                     //type checking thats why not executable
//     console.log(`executed`);     
// }

//etc.......

// const temperature = 55

// if (temperature < 50){
//     console.log(`normal temp`);
// } else{
//     console.log(`danger! high temp`);
// }

// console.log(`code executed`);       //it is always execute bcz it is outside my if and else statement.

//sample code----------------------------

// const score = 400

// if (score > 90){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// } else{
//     const power = "walk"
//     console.log(`user power : ${power}`);
// }

//----------------------------------------

// const marks = 100
// if (marks > 50) console.log("pass"); //it will execute without scope (implicit scope) but not a good practice.

// ---------------Nesting-------------

// const balance = 1000; 

// if (balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const Debitcard = true
const userLoggedInFromGoogle = false
const userLoggedInfromemail = true

if(userLoggedIn && Debitcard){
    console.log("Allow to buy course");

}
if (userLoggedInFromGoogle || userLoggedInfromemail) {
    console.log("user Logged In");
}







