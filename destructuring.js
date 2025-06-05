
// destructuring = extract values from arrays and objects,
// then assign to variables in a convenient way
//[] = to perform array destructuring
//{} = to perform object destructuring


//------------EXAMPLE 1 ---------------
//SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;
[a,b] =[b,a];

console.log(a);
console.log(b);



//------------EXAMPLE 2 ---------------
// SWAP 2 ELEMENTS IN AN ARRAY

// const colors = ["red","green","blue","black","white"];

// [colors[0],colors[4]] = [colors[4],colors[0]];

// console.log(colors);


//------------EXAMPLE 3 ---------------
//ARRAY ELEMENTS TO VARIABLES

const colors = ["red","green","blue","black","white"];

const [firstColor,secondColor,thidColor, ...extraColors] =colors;

console.log(firstColor);
console.log(secondColor);
console.log(thidColor);
console.log(extraColors);


//------------EXAMPLE 4 ---------------
//EXTRACT VALUES FROM OBJECTS

// const person1 ={
//     firstName : "Miyoko",
//     lastName : "Nepal",
//     age: 30,
//     job : "Doctor",
// }

// const person2 ={
//     firstName : "Maya",
//     lastName : "Shesthra",
//     age: 29,
    
// }

// //const{firstName,lastName,age,job} = person1;
// const{firstName,lastName,age,job = "unemployed" } = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


//------------EXAMPLE 4 ---------------
//DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName,lastName,age,job = "Unemployed"}){
    console.log(`name : ${firstName} ${lastName}`);
    console.log(`age : ${age}`);
    console.log(`job : ${job}`)


}
const person1 ={
    firstName : "Miyoko",
    lastName : "Nepal",
    age: 30,
    job : "Doctor",
}

const person2 ={
    firstName : "Maya",
    lastName : "Shesthra",
    age: 29,
}

displayPerson(person2);
//displayPerson(person1);