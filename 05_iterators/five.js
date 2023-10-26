//For each loop

const coding = [`java`,`python`,`nodejs`,`ruby`]

//1.
coding.forEach( (item) => {
    // console.log(item);
});


//2.
// coding.forEach( function (item){
//     console.log(item);
// });

//3.
function printme(item){
console.log(item);
}

coding.forEach(printme)