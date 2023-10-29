//reduce            //needs an initial value.. and current value ex..used in making bill of shopping Cart etc...

const mynum = [1, 2, 3, 4]

const initialvalue = 0;

const sumwithinitial = mynum.reduce( (acc ,currval) => {

// console.log(`Accumulator : ${acc} and Current Value : ${currval}`);

return acc + currval
},initialvalue)

// console.log(sumwithinitial)

//Output
/*
Accumulator : 0 and Current Value : 1
Accumulator : 1 and Current Value : 2
Accumulator : 3 and Current Value : 3
Accumulator : 6 and Current Value : 4
10 
*/

//Example

const shoppingCart = [
    {
        itemname : "pythoncourse",
        price:229
    },
    {
        itemname : "javacourse",
        price:499
    },
    {
        itemname : "javascriptcourse",
        price:999
    },
    {
        itemname : "Htmlcourse",
        price:399
    }
]

const bill = shoppingCart.reduce( (acc,item) => acc + item.price,0 )
console.log(bill);