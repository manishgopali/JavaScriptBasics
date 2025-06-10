//eventListener = Listen for specific events to create interactive
//web pages
// events : click, mouseover, mouseout.
//addEventListener(event,callback or anonymous function or arrow function);

const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");


myBtn.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 😢";

});

myBtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it! 😯";

});

myBtn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "Click Me 😃";
});