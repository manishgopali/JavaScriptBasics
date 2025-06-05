
//rest parameters = (...rest) allow a function work with variable
//                   number of arguments by bundling them into aray
// spread = expands an array into seperate elements
//rest = bundles seperate elements into an array

function openFridge(...foods){
    console.log(foods)
}

function getFood(...foods)
{
    return foods;
}

const food1 = "chicken meat";
const food2 = "sushi";
const food3 = "ramen";
const food4 = "pizza";
const food5 = "burger";

//openFridge(food1,food2,food3,food4,food5);

const foods = getFood(food1,food2,food3,food4,food5);
console.log(foods);





function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;

    }
    return result;
}

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;

    }
    return result/numbers.length;
}

// const total = sum(1,2,3,4,5);
// console.log(total);

const total = getAverage(75,80,80,90,60);
console.log(total);


//spread

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers); //spread ...operators
let minimum = Math.min(...numbers);
console.log(minimum);
console.log(maximum);

let username = "Manish Gopali";
let letters = [...username].join("-");
console.log(letters);