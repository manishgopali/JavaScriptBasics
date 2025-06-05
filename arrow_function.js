// arrow functions = a consise way to  write functio expresssions 
//good for simple functions that you usse only once
//(parameters) => some code


// const hello = (Username,age) => {console.log(`Hello ${Username}`)
//                                 console.log(`You are ${age} years  old.`)};
// hello("Manish",23);



// setTimeout(() => console.log("hello"),3000 ); 


const numbers = [1,2,3,4,5,6];

const squares  = numbers.map((element) => Math.pow(element,2));
const cubes  = numbers.map((element) => Math.pow(element,3));
const evenNums = numbers.filter((element) => element %2 === 0);
const oddNums = numbers.filter((element) => element %2 !== 0);
const total = numbers.reduce((accumulator,element)=> accumulator + element);

console.log(`Original array : ${numbers}`);
console.log(`Square of original array is : ${squares}`);
console.log(`Cube of original array is : ${cubes}`);
console.log(`Even numbers are : ${evenNums}`);
console.log(`Odd numbers are : ${oddNums}`);
console.log(`The sum of original array is: ${total}`);