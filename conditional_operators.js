// task 1

let  answer = prompt("What is the official name of JavaScript?",'');
if(answer === 'ECMAScript') {
    alert('Right!');
}
else{
    alert('Didn\'t know? ECMAScript!'); // if you want to use a single quote in a string, you need to escape it with a backslash
}


// task 2

let number = prompt("Enter a number", '');
if(number > 0) {
    alert(1);
}
else if(number < 0) {
    alert(-1);
}
else{
    alert(0);
}

// task 3 using ternary operator
let result;
/*
    if (a + b < 4) {
    result = 'Below';
    } else {
    result = 'Over';
    }
*/

(a + b) < 4 ? result = 'Below' : result = 'Over';


//task 4 use multiple ternary operators

/*
    let message;

    if (login == 'Employee') {
    message = 'Hello';
    } else if (login == 'Director') {
    message = 'Greetings';
    } else if (login == '') {
    message = 'No login';
    } else {
    message = '';
    }
*/

let message = (login == 'Employee')? 'Hello':
        (login == 'Director')?'Greetings':
        (login == '')?'No login':
        '';
