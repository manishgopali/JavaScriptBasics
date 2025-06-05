

//setTimeout() = function in javascript that allows you to schedule
//the execution of function after an amount of time(milliseconds)
// times are approximate (varies basedon the workload of the javascript runtime env.)
// setTimeout(callback,delay);


// function sayHello(){
//     window.alert("Hello");
// }
// setTimeout(sayHello,3000);


// setTimeout(function(){window.alert("hello")},3000);

// setTimeout(() => window.alert("hello"),3000);

let timeOutId;

function startTimer(){
    timeOutId = setTimeout(()=>window.alert("Hello"),3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeOutId);
    console.log("CLEARED");
}


