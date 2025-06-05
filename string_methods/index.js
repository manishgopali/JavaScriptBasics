let userName = "Tiyo King";

console.log(userName.charAt(0)); // provides first character

console.log(userName.indexOf("i"));
 // provides first occurence of character

console.log(userName.lastIndexOf('i'));

console.log(userName.length); // length
console.log(userName.trim());

let result = userName.startsWith(" "); 
//we have endsWith() too

if(result){
    console.log("Your username can't begin with spaces");
}
else{
    console.log(userName)
}

let phoneNumber= "123-234-456-322";
//padStart(10,"0") make string 10 by addding 0 in start we have padEnd too.
phoneNumber = phoneNumber.replaceAll("-","");
console.log(phoneNumber);


//string slicing
let firstName = userName.slice(0,5); //0 to 4
let firstChar = userName.slice(0,1);
let lastChar = userName.slice(-1);
console.log(lastChar);

let firstNameGen = userName.slice(0, userName.indexOf(" ")); // we can do this way


// method chaining = calling one method after 
//  in one contionuous line of code

let username = window.prompt("Enter your  username: ");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);
   
