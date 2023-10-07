const accountId = 48349
let accountEmail = "anshhsh38@gmail.com"
var accountPassword = 4533
accountCity  = "pratapgarh"   /*Possible but not very good to use */

let accountState; /*If you left any values undefined  it return [Undefined] .... use of semicolon is not much imp in javascript */

// accountID = 234   // We cannot change the values written in the [const] keyword...NOT ALLOWED

console.log( " Your accountId is = " + accountId);   /*For singly print the values you want */

/*

Prefer not use [var] keyword because of issue in block scope and functional scope.

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);  // for use print all values in once in table form.