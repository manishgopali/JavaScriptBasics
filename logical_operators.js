// task output?


// alert( null || 2 || undefined );  //2


// alert( alert(1) || 2 || alert(3) ); // first  1 then 2.  
// // The call to alert does not return a value. Or, in other words, it returns undefined.
// //There will be no 3, because the evaluation does not reach alert(3).

// alert( 1 && null && 2 ); //null


// alert( alert(1) && alert(2) ); // 1 then undefined.


// alert( null || 2 && 3 || 4 ); // 3 
// //precedence of && is higher


// /* 
//     Write an if condition to check that age is between 14 and 90 inclusively.
//     “Inclusively” means that age can reach the edges 14 or 90.
// */

// let age;
// if (age >= 14 && age <= 90) {
//     alert('you are in the given range.')
// }

// /*
//     Write an if condition to check that age is NOT between 14 and 90 inclusively.

//     Create two variants: the first one using NOT !, the second one – without it.
// */

// if(!(age >= 14 && age <= 90)){}


// if(age < 14 || age > 90){}


/*

Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

*/

let user = prompt('who is there?','');

if (user === null || user === ''){
    alert('Canceled')
}
else if( user ==='Admin'){

    password = prompt('Password?')

    if(password === null || password === '')
    {
        alert('Canceled')
    }
    else if(password === 'TheMaster'){
        alert('Welcome!')
    }
    else{
        alert('Wrong Password')
    }

}
else{
    alert("I don't know you")
}
