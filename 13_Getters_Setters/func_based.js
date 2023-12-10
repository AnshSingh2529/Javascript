function User(username,password){
    this._username = username;
    this._password = password;

    Object.defineProperty(this,'username' , {
        get: ()=>{
            return `${this._username.toUpperCase()}`;
        },

        set: (newName)=>{
            this._username = newName;
        }
    })
    Object.defineProperty(this,'password' , {
        get: ()=>{
            return `${this._password.toUpperCase()}`;
        },

        set: (newpass)=>{
            this._password = newpass;
        }
    })
}

const user1 = new User("Anshumaan", "123@anshumannsinghh");
console.log(user1.password);
console.log(user1.username);