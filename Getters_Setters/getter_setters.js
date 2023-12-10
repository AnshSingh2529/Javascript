class User {
    constructor(username, password) {
      this._username = username; // Use a different name for the property ,to avoid unexpected infinite loop..
      this._password = password;
    }
  
    get password() {
      console.log("Getting the password");
      return this._password.toUpperCase();
    }
    set password(newpass){
        console.log('Setting the Password :-',newpass);
        this._password = newpass;
    }
  }
  
  const user1 = new User("anshsinghania", "123@anhh");
  console.log(user1.password);

  user1.password = "123@annu";
  console.log(user1.password);
  
//   [_value: 0] a variable with an underscore is intended to be private