

// let numbers = [1,2,3,4,5];

// numbers.forEach(display);
// numbers.forEach(double);
// numbers.forEach(square);
// function display(element){
//     console.log(element)
// }


// function square(element,index,array){
//        array[index] = Math.pow(element,2);
// }

// function double(element,index,array){
//     array[index] = element *2;
// }


//
let fruits = ["apple","orange","banana","coconut"];

// fruits.forEach(uppercase);
fruits.forEach(capitalize);

fruits.forEach(display);


function capitalize(element,index,array){

    array[index] = element.charAt(0).toUpperCase() + element.slice(1);


}
function uppercase(element,index,array){
    array[index] = element.toUpperCase();
    

}

function display(element){
    console.log(element);
}