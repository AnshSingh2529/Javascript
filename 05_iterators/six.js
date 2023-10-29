const coding = ["java","ruby","javascript","python"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);


//filter

const mynum = [1, 2, 3, 4, 5, 6,  7, 8 ,9]

const newnum = mynum.filter( (num) => num > 2)           //use condition which you want in return  //when you use scope then use return keyword

// console.log(newnum)   

//Output is :
 /* [
    3, 4, 5, 6,
    7, 8, 9
  ]
*/


const books = [
    {title:"Man kind",genre:"non-fiction",publish:1923},
    {title:"Our nation",genre:"History",publish:2003},
    {title:"Behind the water",genre:"non-fiction",publish:2004},
    {title:"Search for caves",genre:"Geographical",publish:2010},
    {title:"Dirty mind",genre:"non-fiction",publish:1992},
    {title:"Enjoy Animal life",genre:"Animation",publish:1927}
]

let userbooks = books.filter( (BK) => BK.publish > 2000 && BK.genre === "History")           //method 1

userbooks = books.filter( (BK) => {                                                          //method 2
    return BK.genre === "Animation"
})
console.log(userbooks)


 //filter: you can use only you want some condition in your Array..etc.

