// Classes 

// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }

//     encryptedPassword(){
//         return `${this.password}anss`;
//         }

//     Alluppercase() {
//         return `${this.username.toUpperCase()}`;
//         }

//     }

// const PCuser = new User("anshsingh" , "asdbf@gmail.com","322");

// console.log(PCuser.encryptedPassword());
// console.log(PCuser.Alluppercase());

// Behind the scene

function User(username,email,password){
    this.username = username;
    this.password = password;
    this.email = email;
}

User.prototype.encryptedPassword = function(){
    return `${this.password}anss`;
}

User.prototype.Alluppercase = function(){
    return `${this.username.toUpperCase()}`;
}
const lapUser = new User("vanshsingh" , "vahs@gmail.com","sd3232");

console.log(lapUser.Alluppercase());
console.log(lapUser.encryptedPassword());
