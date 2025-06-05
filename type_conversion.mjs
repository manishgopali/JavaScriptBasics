//String Conversion

let value = 124;
alert(typeof value); // number

let str = String(value);
alert(typeof str); // string


// Number Conversion
alert("6" +"2"); // 62
alert("6" - "2"); // 4
alert("6" * "2"); // 12
alert("6" / "2"); // 3
alert("6" / "2" + 1); // 4


let input = "345";
alert(typeof input); // string

let num = Number(input);
alert(typeof num); // number


// Boolean Conversion   empty string, 0, null, undefined, NaN are false
alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean("hello")); // true
alert(Boolean("")); // false