//--------------------Basics about function------------------

//1.function is keyword and here (addTwoNum()  is a function name, ()-> this is where we pass our parameters, {} -> in this we write the conditions and make objects ,return values,print values)

    // function addTwoNum(number1 , number2){            //--parameters
    //     console.log(number1+number2);
    // }
    
    /*--- jab bhi app kuch return karenge use ek varible me store krke values console.log() krna  hoga-- */ 

    // function addTwoNum(number1 , number2){            
    //     let result = number1 + number2
    //     return result
    // }

    // function addTwoNum(number1 , number2){            
    //     return number1 + number2
    // }


    // const result = addTwoNum(3,8)         //this is how we call the function by its name and parenthesis.
    // console.log("Result = ", result);

    // addTwoNum(3 , 8);                                 //--Like `(3,8)`-> we write the values in here is called as Arguments.
    // addTwoNum(3 , "8");
    // addTwoNum(3 , "a");
    // addTwoNum(3 , null);



    function Userlogin(username){
        if(username === undefined){                               //  (!username) we can use in place of if(-> parameter)
            // console.log("Please enter your username!");
            return
        }
        return `${username} just Logged In`
    }

    // const messege  = Userlogin("Ansh@3333")
    // console.log(messege);

    // console.log(Userlogin());   //----Returns (Undefined just Logged IN)    (important)


    //Rest Operator and Spread (...abcName) define by three dots


    // function calculatecartPrice(...num1){        
    //     return num1
    // }

    function calculatecartPrice(val1,val2 ,...num1){         //val1 -> [200] , val2 -> [400] and other values are in num1->[]
        return `${val1} , ${val2}`
    }
    
    // console.log(calculatecartPrice(200,400,540,389,3939));      // by using Rest oper (...) its make a list of values in Array -> [200,400,540,389,3939]


// Use and how to pass Object in function.

/*    const user = {
        username : "ansh@333",
        password: "2399add"
    }

    function handleObject(anyobject){    //here with the help of anyobject we use our objects.
    console.log(`Username is ${anyobject.username} and Password is ${anyobject.password}`);
    }

    // handleObject(user)                  //by Calling function

    handleObject({                        //we can also use direct through making object
        username: "anuj@333",
        password : "23923sd"
    })

*/    


//pass Arrays

const myarray = [200,400,500,600]

function handleArray(getarray){
    return getarray[0]
}
console.log(handleArray(myarray));

    









