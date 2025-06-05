 //import { StrictMode } from "react";

//  //NOT A NUMBER
// alert(NaN + 1)  // any operation with NaN returns NaN
// alert(NaN ** 0) // NaN to the power of 0 is 1   e.g a **b means a raised to the power of b




// //bigint   number storage range is limited to 2^53 - 1 and -2^53 - 1
// const bigInt = 1234567890123456789012345678901234567890n // n at the end of the number makes it a bigint


/*strings there are 3 ways to create strings
    1. single quotes
    let str1 = 'hello'
    2. double quotes
    let str2 = "world"
    3. template literals (backticks) - allows for multi-line strings and string interpolation
    
    alert(`this is new string ${str1}${str2}`)
    alert( `the result is ${1 + 2}` ); // the result is 3 
*/



/*boolean
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let result = 2 > 1 ;
alert(result) // true

//let age = null; // null is a special value that represents the absence of a value
let age;

alert(age); // shows "undefined"
*/



/*typeof operator
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
*/

/*task
StrictMode

let name = "Ilya";

alert( `hello ${1}` ); //  hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya */