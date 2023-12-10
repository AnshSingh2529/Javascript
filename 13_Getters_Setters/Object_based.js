const User = {
    _value : "abhishek_chamar",          //a variable with an underscore is intended to be private.

    get value(){
        return this._value.toUpperCase();
    },
    set value(newValue){
        this._value = newValue;
    }
}


console.log(User.value);

User.value = "abhishek_thakur";
console.log(User.value);

