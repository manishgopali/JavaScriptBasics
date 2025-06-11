//Nodelist = static collectio of HTML elements by (id,class,element)
//can be created by using querySelectorAll()
//similar to an array , but no (map,filter,reduce) but have foreach
//NodeList won't update to automatically reflect changes


let buttons = document.querySelectorAll(".myButtons");

//ADD HTML/CSS PROPERTIES
/*
    buttons.forEach(button => {

        button.style.backgroundColor = "green";
        button.textContent += "😁";
    });
*/


// CLICK  event listener
/*
    buttons.forEach( button =>{
        button.addEventListener("click", event => {
            event.target.style.backgroundColor = "tomato";

        });
    });
*/


//MOUSEOVER + MOUSEOUT event listener
/*
    buttons.forEach( button =>{
            button.addEventListener("mouseover", event => {
                event.target.style.backgroundColor = "hsl(205, 100%, 40%)";

            });
        });


    buttons.forEach( button =>{
            button.addEventListener("mouseout", event => {
                event.target.style.backgroundColor = "hsl(205, 100%, 60%)";

            });
        });
*/

/*
    //ADD AN ELEMENT
    const newButton = document.createElement("button"); //STEP 1
    //STEP 2    
    newButton.textContent = "Button 5";
    newButton.classList = "myButtons";
    //STEP 3
    document.body.appendChild(newButton);


    //since nodelist is static button 5 wont be added automatically
    //so we are gona do it manually

    buttons = document.querySelectorAll(".myButtons");
    console.log(buttons);
*/

//REMOVE AN ELEMENT

buttons.forEach(button =>{

    button.addEventListener("click", event =>{

        event.target.remove();
        //console.log(buttons); //even if we remove nodelist wont change
        // to make change we do following
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);

    });

});