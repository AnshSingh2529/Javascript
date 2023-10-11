const marvel_heros = ["Ironman","Thor","Captain America"]
const Dc_heros = ["Superman","Batman","Flash"]

// marvel_heros.push(Dc_heros)               //My Dc_heros are taken as (element) in the marvel_heros Array.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);      

// let combine = marvel_heros.concat(Dc_heros)    // It takes (concat()) my Array(Dc_heros) as separate element and combine in a single Array.
// console.log(combine);                          // Output: [ 'Ironman', 'Thor', 'Captain America', 'Superman', 'Batman', 'Flash' ]
// console.log(combine[5]);                


//spread

// const all_new_heros = [...marvel_heros,  ...Dc_heros]   //Method to write spread prototype , it spread the values in a single Array.
// console.log(all_new_heros);                             // Output: [ 'Ironman', 'Thor', 'Captain America', 'Superman', 'Batman', 'Flash' ]

//flat()

// const another_array = [1,2,3,[4,5,6],[7,8,9,[10,11,12]]]

// const my_another_array = another_array.flat(Infinity)         //It combines all the subarray in to a single array..

// console.log(my_another_array);


//isArray() , from() , of()  etc...

console.log(Array.isArray("superman"));

console.log(Array.from("ansh")); //It makes an array of the parameter you pass.(An iterable object to convert to an array.)

console.log(Array.from({name: "Ansh"}));    //It return an empty array..unless you have to tell (ki keys ka array banaye ya fir iske values ka arrayagar nhi bna paeyga to empty array dega)


/**/ 
let sco1 = 122
let sco2 = 313
let sco3 = 3423
console.log(Array.of(sco1,sco2,sco3));     //Returns a new array from a set of elements.




