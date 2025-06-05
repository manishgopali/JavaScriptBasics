// sort() = method use dot sort elements of an array in place.
//sorts elemets as stringsin lexicograpic order,not
//alphabetical
//lexicographic = (alphabet + numbers + symbols ) as strings

// let numbers= [1,10,2,9,7,3,4,8,6,5];

// numbers.sort(); // not sorting as numbers but as lexicographics 
// console.log(numbers);


let numbers= [1,10,2,9,7,3,4,8,6,5];

// numbers.sort((a,b) => a - b); 


numbers.sort((a,b) => b - a); //reverse  


console.log(numbers);




const people =[{name : "luffy" , age : 30 , gpa: 4.0},
               {name : "zoro" , age : 23 , gpa: 3.0},
               {name : "sanji" , age : 28 , gpa: 3.6},
               {name : "nami" , age : 29 , gpa: 2.8},

];

people.sort((a,b) => a.age - b.age);

people.sort((a,b) => a.name.localeCompare(b.name)); 
// to compare strings lexicograpahics 




console.log(people);