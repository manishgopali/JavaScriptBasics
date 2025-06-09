// DOM = Document object model
//object{} that represents the page you see in the web browser
// and provides you with API to interact with it.
//web browser constructs the DOM when it loads an HTML document,
//and structures all the elements in a tree-like representatation
//JavaScript can access DOM to dynamically
//change the content,structure, adn style of web page.



//document.title = "My website";
// document.body.style.backgroundColor = "hsl(0,0%,15%)";


// const username = "Miyoko Nepal";
// const welcomeMsg = document.getElementById("myH1");

// welcomeMsg.textContent += username === "" ? `Guest` : username;
// console.dir(document);






/* element selectors = Methods used to target and manupulate
    HTML elements . They allow yu to select one or multiple HTML elements 
    from DOM (Document Object Model)

    1.document.getElementById()   --- element or null
    2.document.getElementsByClassName() ---html collection
    3.document.getElementsByTagName() ---html collection
    4.document.querySelector()   ---element or null
    5.document.querySelectorAll()  ---NODELIST
*/



/*

    const myHeading = document.getElementById("myH1");
    myHeading.style.backgroundColor = "yellow";
    myHeading.style.textAlign = 'center';


    console.log(myHeading);
*/



/*

    const fruits = document.getElementsByClassName("fruits");

    // fruits[0].style.backgroundColor = "red";
    // fruits[1].style.backgroundColor = "yellow";
    // fruits[2].style.backgroundColor = "yellow";

    // for(let fruit of fruits){
    //     fruit.style.backgroundColor ="yellow";

    // }

    //but html collection can't access foreach() directly

    // fruits.foreach();
    //html collection to array type caste

    Array.from(fruits).forEach( fruit =>{
        fruit.style.backgroundColor ="yellow";
    });

    console.log(fruits);

*/

/*
    const h4Elements = document.getElementsByTagName("h4");
    const liElements = document.getElementsByTagName("li");
    //console.log(h4Elements);

    // h4Elements[0].style.backgroundColor = "yellow";


    // for(let h4Element of h4Elements){
    //     h4Element.style.backgroundColor = "red";
    // }

    // for(let liElement of liElements){
    //     liElement.style.backgroundColor ="lightgreen";
    // }

    Array.from(h4Elements).forEach(h4Element =>{
        h4Element.style.backgroundColor ="red";
    });

    Array.from(liElements).forEach(liElement =>{
        liElement.style.backgroundColor ="lightgreen";
    });
*/


/*
    const element = document.querySelector(".fruits"); //chooses first element

    element.style.backgroundColor = "red";

*/


const fruits = document.querySelectorAll(".fruits");
const foods = document.querySelectorAll("li");

fruits[0].style.backgroundColor = "red";
foods[0].style.backgroundColor = "red";


foods.forEach(food => {
    food.style.backgroundColor ="yellow";
})

