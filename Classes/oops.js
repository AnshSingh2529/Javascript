const user = {
    username: "ansh",
    contact:394695348,
    signIn: true,

    getuserInfo: function (){
        // return this.username;  //JavaScript functions return (undefined), if there is no explicit return statement.
        // (this) keyword talk about (CURRENT CONTEXT)...
    }
};

// console.log(this);
// console.log(user.getuserInfo());


// (new) keyword gives us new Instances where we copy the context..
//  Using it a new :-step 1 - new Object created
// step 2 - called a Constructor function due to new keyword.
// step 3 - arguments inject in (this) keyword..
// and then it returns..


function User(username,LoginId,isLogedin){
    this.username = username;
    this.LoginId = LoginId;
    this.isLogedin = isLogedin;
    this.greetings = function(){
        console.log(`Hello , my name is ${this.username}`);
    }
    return this;
}

const userOne = new User("Ansh Singh",12,true);

// const userTwo = new User("Vansh Singh",11,false); 
          //this statement will Overright the above One...if we don't use (new)keyword..
          
// console.log(userOne.constructor);

// console.log(userTwo);

// constructor is the refrence of that (user);

// Instanceof method

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true
  
