// Dates in javascript

let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toTimeString());
// console.log(typeof mydate);                   // Types of Date is (--Object--)


 let mycreateddate = new Date(2023 , 9 ,25)       //You can create your own date by giving parameters & Months started from (0--11).
// let mycreatetimedate = new Date(2023,9,25,5,3)   //You can add time too.

// console.log(mycreateddate.toDateString());
// console.log(mycreatetimedate.toLocaleString());


let mytimestamp = Date.now()
// console.log(Math.floor(Date.now()/1000));         //Value in seconds  otherwise in milisecond.
  
let newDate = new Date()
// console.log(`Its ${newDate.getDay()}nd day of the week`);

console.log(newDate.toLocaleString(`default`,{          // There are many ways in the toLocaleString().
    weekday:"long"
}));


