/* First Example

    //STEP 1 CREATE THE ELEMENT
    const newH1 = document.createElement("h1");

    //STEP 2 ADD ATTRIBUTES / PROPERTIES

    newH1.textContent = "I like anime!";
    newH1.id = "myId";
    newH1.style.color = "blue";
    newH1.style.textAlign = "center";


    //STEP 3 APPEND ELEMENT TO DOM
    // document.body.append(newH1); //adding to end becomes last child
    // document.body.prepend(newH1); //adding to start becomes first child

    // //making this newH1 a child of Box1
    document.getElementById("box1").append(newH1);

    // document.getElementById("box1").prepend(newH1); 
    //making it first child of Box1



    // to insert newH1 before box2
    // const box2 = document.getElementById("box2");
    // document.body.insertBefore(newH1,box2);
    //here we input new element and current element 


    //if we dont have id for boxes we use query selector
    // to insert element like before 
    //boxes[0] represent first child that is box1

    // const boxes = document.querySelectorAll(".box");
    // document.body.insertBefore(newH1,boxes[0]);



    //REMOVE HTML ELEMENT
    // document.getElementById("box1").removeChild(newH1);
    // we need parent of the element we are trying to remove
    // in this case body will be Grand parent of newH1 so we use box1 
*/


/*second example */

//STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");


//STEP 2 ADD ATTRIBUTES / PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightGreen";

//STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);
document.getElementById("fruits").append(newListItem);
//document.getElementById("fruits").prepend(newListItem);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem,orange);

// const fruits = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem,fruits[0]);

//REMOVE HTML ELEMENT

// document.getElementById("fruits").removeChild(newListItem);
