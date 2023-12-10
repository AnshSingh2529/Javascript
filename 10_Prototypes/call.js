function setUser(username) {
    // call DB
    this.username = username;
    console.log("called");
}

function createUser(username , email , password){
    setUser.call(this,username);              //we have to give refrence of this
    this.email = email;
    this.password = password;
}

const user = new createUser("Ansh@454","ajsdbhjf@gmail.com","23dsd34");
console.log(user);