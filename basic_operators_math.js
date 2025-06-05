let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied

let a = 1, b = 3;
alert( b - a ); // 2, binary minus subtracts values

/* operators supported in JavaScript
    Addition +,
    Subtraction -,
    Multiplication *,
    Division /,
    Remainder %,
    Exponentiation **
*/
alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


// addition of strings

let s = "my" + "string";
alert(s); // mystring

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"


//other operators in strings

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers






let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings
//If we want to treat them as numbers, we need to convert and then sum them:

// both values converted to numbers before the binary plus
alert( -apples + -oranges ); // 5 uniary negation converts to number and uniary operator comes first inpriority

// the longer variant
//alert( Number(apples) + Number(oranges) ); // 5


// Assignment = returns a value 

let m = 1;
let n = 2;

let c = 3 - (m = n + 1);

alert( m ); // 3
alert( c ); // 0

//modification assignment operators
let k = 2;
k += 5; // now k = 7 (same as k = k + 5)
k *= 2; // now k = 14 (same as k = k * 2)

alert( k ); // 14


let o = 2;

o *= 3 + 5; // right part evaluated first, same as o *= 8

alert( o ); // 16


// Increment and Decrement

let i = 1;
let j = 1;
i++; // 1, returns the value before increment
j = j + 1; // 2, returns the value after increment
alert( i ); // 2
alert( j ); // 2




//task

let w = 1, q = 1;

let f = ++w; // 2 returns the value after increment
let t = q++; // 1 returns the value before increment

alert(w); // 2 returns the value after increment
alert(q); // 2 returns the value after increment


"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px"  // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // "  -9 5"
"  -9  " - 5    // -14
null + 1  // 1
undefined + 1 // NaN
" \t \n" - 2 // -2


let h = prompt("First number?", 1);
let p = prompt("Second number?", 2);
alert(typeof h); // string
alert(typeof p); // string

alert(+h + +p); // 3  // this or we can use + in prompt or Number() to convert to number