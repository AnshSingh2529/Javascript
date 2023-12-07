const user = {
    username: "ansh",
    contact:394695348,
    signIn: true,

    getuserInfo: function (){
        return this.username;  //JavaScript functions return (undefined), if there is no explicit return statement.
        // (this) keyword talk about (CURRENT CONTEXT)...
    }
};


console.log(user.getuserInfo());