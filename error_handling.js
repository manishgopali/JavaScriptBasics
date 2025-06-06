//Error = an object that is created to represent a problem that
//occurs 
//occur often with user input or establishing a connection
//try{} ,catch{},finally{}


// try{
//     console.lag(x);
// }
// catch(error){
//     console.error(error);

// }
// finally{
//     //whether or not error occurs it executes
//     //close files
//     //close connections
//     //release resources
//     console.log("This always executes")
// }

// console.log("You have reached te end!");


try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0){
        throw new Error("You can't divide by zero!")
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be number");
    }
    

    const result = dividend /divisor;

    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("You have reached the end.")