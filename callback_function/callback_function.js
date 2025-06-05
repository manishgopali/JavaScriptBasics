


// callback function that is passed as an 
// argument to another function

hello(bye);

function hello(callback){
    console.log("hello.")
    callback();
}

function bye(){
    console.log("bye.")
}

// sum of two numbers using callback function


sum(displayPage,1,2);

function sum(callback,a,b){
    let result = a + b;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}


function displayPage(result){
    document.getElementById("myH1").textContent = result;

}