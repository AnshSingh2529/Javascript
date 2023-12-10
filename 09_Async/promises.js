const promises = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("First Promise done !");
    },1000);
});


new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"ansh singh" , Cnumber:"239749234"});
        console.log("Promise resolve done!");
    })
}).then(function(user){
    console.log(user);
});


const promisesTwo = new Promise(function (resolve , reject) {
    setTimeout(function(){
        resolve({username:"vansh singh" , Fathersname:"Arun pratap singh"});
    },1000);
});

promisesTwo.then(function(data){
        return data.Fathersname;
    }).then(function(user_name){
    console.log(user_name);
});


const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        let Error = false;  //or (true);
        if(!Error){
            resolve({Accountholdername: "arjun" , Accountnumber:"3274000023774947"});
        }else{
            reject("Error Something went wrong !");
        }
    },1000);
});

promiseThree.then(function(data){
    console.log(data);
    return data.Accountnumber;
})
.then(function(number){
    console.log(number);
})
.catch(function(error){
    console.log("Error $404");
})


async function consumepromise(){
    try {
        const response = await fetch('https://api.github.com/users/Anshsingh2529') ;
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error" , error);
    }
}

consumepromise();



fetch('https://api.github.com/users/Anshsingh2529').then(function(response){

 return response.json();
}).then((data) => {
    console.log(data);
}).catch(function(error){
    console.log("Error 404");
});



