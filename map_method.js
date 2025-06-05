//map() = accepts callback and appiles that 
//fucntion to each element of an array, then 
//returns new array

// const numbers = [1,2,3,4,5];

// const squares = numbers.map(square);

// console.log(squares);

// function square(element){
//     return Math.pow(element,2);
// }



const students = ["Luffy","Zoro","Tanjiro","Eren"];

const studentsUpper = students.map(upperCase);
console.log(studentsUpper);

function upperCase(element){
    return element.toUpperCase();
}


const dates = ["2025-01-09","2025-03-19","2025-11-04","2026-01-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);
function formatDates(element){

    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`

}