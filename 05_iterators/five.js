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
// console.log(item);
}

coding.forEach(printme)

coding.forEach( (item, index, arr) => {      //for printing items its index and array..
    // console.log(item, index, arr);
})

//Objects in an Array

const myobject = [
    {
        name:"ansh singh",
        rollno:2
    },
    {
        name:"adarsh singh",
        rollno:3
    },
    {
        name:"romi singh",
        rollno:1
    },
]

myobject.forEach( (item) => {
    console.log(` ${item.rollno} -> ${item.name}`);
})

//hamne array uske objects ka access le lia..







