// LEXICAL SCOPING and CLOSURE SCOPE

// they both deal with how variables are accessed and stored in memory.

// :-Lexical scope => when a function is defined, it "captures" the variables from its outer (enclosing) scope. This means that a function has access to its own scope as well as the scopes of its parent functions.

function outerFunction() {
    let outerVariable = "I am from the outer function";
  
    function innerFunction() {
      console.log(outerVariable); // innerFunction has access to outerVariable
    }
  
    innerFunction();
  }
  
  outerFunction();
  // Output: I am from the outer function
  

// Closure scope => A closure is created when a function is defined within another function, and it allows the inner function to access the variables of the outer (enclosing) function, even after the outer function has finished executing.


function outerFunction() {
    let outerVariable = "I am from the outer function";
  
    function innerFunction() {
      console.log(outerVariable); // innerFunction forms a closure over outerVariable
    }
  
    return innerFunction; // Return the inner function (closure)
  }
  
  const closure = outerFunction();
  closure(); // Even though outerFunction has finished executing, innerFunction still has access to outerVariable
  // Output: I am from the outer function
  
