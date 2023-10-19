const course = {
    coursename : "javascript",
    courseInstructor : "Ansh singh",
}

//Objects destructure

const {courseInstructor} = course
const {courseInstructor:Instructor} = course       //here we change the variable name...thats called destructure

console.log(courseInstructor);
console.log(Instructor);


// -----------------json API--------------

// {                                                 Structure of writing API.
//     "name" : "ansh",
//     "ContactNo" : 23923749739
//     "Coursename" : "javascript"
// }

// [                                                  In the form of Array
//     {},
//     {},
//     {}
// ]


// there are different type of format for writing API try .....study more for json formatator..









