class User {
    constructor(username){
        this.username = username;
    }

    LogMe(){
        console.log(`Username:${this.username}`);
    }

    static createID(){
        return `123`;
    }
}

let user1 = new User("Anshsingh");
// console.log(user1.createID());

class teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }

}

const iphone = new teacher("Iphoneuser", "appleuser@34gmail.com");

console.log(iphone.createID());  //bcz we used static keyword..