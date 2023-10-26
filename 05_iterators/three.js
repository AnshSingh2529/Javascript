//High Order Array loops

//1. for of

const array = [1,2,3,3,4,5]

for (const num of array){               //forof loop  it takes size and incre+ and decre- automatically
    // console.log(num);
}


const greetings = "Hello World"

for (const messege of greetings) {
    if(messege == " "){
        continue
    }
    // console.log(` word: ${messege}`);
}

//Maps

const map = new Map()

map.set("IN" , "India")
map.set("USA" , "United States of America")
map.set("CH" , "china")

// console.log(map);

/*Output => Always gives unique value

Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'CH' => 'china'
}                                            
 */

for (const [key,value] of map) {
    console.log(key , ":-" , value);
}

/*Output
IN :- India
USA :- United States of America
CH :- china
*/

