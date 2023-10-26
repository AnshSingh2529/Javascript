
let index = 2

while(index <= 10){
    // console.log(`Value os my index is : ${index} `);
    index = index + 2             //it is necessary otherwise loop is goin to infinite...(increment or decrement)
}


let myarray = [`flash`,`superman`,`shaktimaan`]

let arr = 0

while (arr < myarray.length) {
    // console.log(`value is ${myarray[arr]}`);
    arr = arr + 1
}


//in do case first it print and then it chech the limit..
let score = 1
do{
    console.log(`value is ${score}`);
    score ++
}while(score <= 10);