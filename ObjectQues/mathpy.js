const descriptor = Object.getOwnPropertyDescriptor(Math , 'PI');

// console.log(descriptor);

const user = {
    name:"Arun singh",
    address:"Gurgaon",
    isAvailable:true
}


Object.defineProperty(user ,'name', {
    writable:false,
    enumerable:false
});

console.log(Object.getOwnPropertyDescriptor(user , "name"));

for (let [key , value] of Object.entries(user)) {
    if(typeof value !== 'function'){
        console.log(`${key} :- ${value}`);
    }
}



