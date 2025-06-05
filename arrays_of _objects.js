

const fruits =[{name : "apple", color : "red", calories: 95},
               {name : "orange", color : "orange", calories: 45},
               {name : "banana", color : "yellow", calories: 105},
               {name : "coconut", color : "white", calories: 159},
               {name : "pineapple", color : "yellow", calories: 47}];
fruits.push({name : "grapes", color : "green", calories : 69}); //adds element at last

// fruits.pop(); //removes last element

// fruits.splice(1,2); //removes 1 through 2 


// for each()
 fruits.forEach(fruit =>console.log(fruit.name));

 // map()
const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitColors);


// filter()

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);

const lowCalFruits = fruits.filter(fruit => fruit.calories < 50);
console.log(lowCalFruits);


// reduce()

const maxFruit = fruits.reduce((max,fruit) => 
                 fruit.calories > max.calories ? fruit :max);

console.log(maxFruit);