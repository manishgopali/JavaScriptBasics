

//function expressions = a way to define function as values or 
//variables



// const hello = function(){
//     console.log("Hello");
// }

// setTimeout(hello,3000); //3000 miliseconds means 3 seconds


//or 

// setTimeout(function(){
//     console.log("hello.")
// },3000);


const numbers = [1,2,3,4,5,6];


const squares = numbers.map(function(elememt){

    return Math.pow(elememt,2);

},3000);

console.log(squares);



