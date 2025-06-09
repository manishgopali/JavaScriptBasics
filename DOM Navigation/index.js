

//DOM Navigation  = the process of navigating through the structure
//of an HTML document using JavaScript. 


// .firstElementChild
// .lastElementChildElementChild
// .nextSibling
// .previousSibling
// .parentElement
// .children

//.....firstElementChild........

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const element = document.getElementById("vegetables");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";


// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";


// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// })




//.....lastElementChild........

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";


// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement =>{
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// })



//.......nextsibling....

// const element = document.getElementById("apple"); 
// //last element wont have next siblings
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";


// const element = document.getElementById("fruits"); 
// //ul of vegetables will be selected here
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";




//.......prevsibling....

// const element = document.getElementById("orange"); 
// //first element wont have previous siblings
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow";

// const element = document.getElementById("vegetables"); 
// //ul of fruits will be selected here
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow";



//.....parentElement....

// const element = document.getElementById("apple"); 
//ull of fruits will be selected here
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";


// const element = document.getElementById("vegetables"); 
// // entire body will be selected 
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";



//.......children.........

const element = document.getElementById("vegetables");  
const children = element.children;
// console.log(children);
children[0].style.backgroundColor = "yellow";


// Array.from(children).forEach(child =>{
//     child.style.backgroundColor = "yellow";
// })
