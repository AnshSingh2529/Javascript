class User{
    constructor(username){
        this.username = username;
       
    }

    logMe(){
        return `USERNAME is ${this.username}`;
    }
}

class teacher extends User{
    constructor(username , email , password){
        super(username);         //it is used to inherit the property of parent class(User) here.
        this.email = email;
        this.password = password;
    }
    addCourse(){
        return `A new Course is added by ${this.username}`;
    }
}

let User1 = new User("Arun");

let User2 = new teacher("anurag", "anu@2424gmail.com", "234dj");


// console.log(User2.addCourse());
// console.log(User1.logMe());
// console.log(User2.logMe());

// console.log(User1 === User2);
// console.log(User1 instanceof User);
// console.log(User2 instanceof User);
// console.log(User === teacher);

