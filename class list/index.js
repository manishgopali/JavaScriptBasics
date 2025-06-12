//classList = element property in javascript used to interact
//with an element's list of classes(CSS classes)
// allows you to make reuseable classes for many elements
//across your webpage


//add()
//remove()
//toggle(Remove if present , Add if not)
//replace (oldClass,newClass)
//contains()

const myBtn = document.getElementById("myBtn");
const myH1 = document.getElementById("myH1");

// myBtn.classList.add("enabled"); //we are accesing css class using javascript

// myBtn.classList.remove("enabled");



// myBtn.addEventListener("mouseover", event =>{

//     event.target.classList.add("hover");

// });

// myBtn.addEventListener("mouseout", event =>{

//     event.target.classList.remove("hover");

// })



// myBtn.addEventListener("mouseover", event =>{

//     event.target.classList.toggle("hover");

// });

// myBtn.addEventListener("mouseout", event =>{

//     event.target.classList.toggle("hover");

// })




// myBtn.classList.add("enabled");

// myBtn.addEventListener("click",event =>{

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";

//     }
//     else{
//         event.target.classList.replace("enabled","disabled")
//     }
    
// });




// myH1.classList.add("enabled");

// myH1.addEventListener("click",event =>{

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";

//     }
//     else{
//         event.target.classList.replace("enabled","disabled")
//     }
    
// });








let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button =>{
    button.classList.add("enabled");
});


buttons.forEach(buton =>{
    buton.addEventListener("mouseover",event =>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(buton =>{
    buton.addEventListener("mouseout",event =>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button =>{
    button.addEventListener("click",event =>{

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬";
        }
        else{

            event.target.classList.replace("enabled","disabled");
        }
        
    });
   
});