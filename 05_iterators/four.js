//Object as for in loop

const myObject = {
    js:"javascript",
    ns:"Node js",
    cpp:"C++"
}

for (const key in myObject) {
    // console.log(`${key} -> Abreviation is :- ${myObject[key]}`);
}

//Array as for in loop

const myarray = [`superman`,`spiderman`,`flash`]

for (const key in myarray) {
//    console.log(`${key}:-${myarray[key]}`);
}


//Maps as for in loop

const map = new Map()

map.set("IN" , "India")
map.set("USA" , "United States of America")
map.set("CH" , "china")

for (const [key,value] in map) {
   console.log(key,value);
}