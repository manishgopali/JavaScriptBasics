

const myBtn = document.getElementById("myBtn");
const myImage = document.getElementById("myImage");

myBtn.addEventListener("click" , event =>{

    // if we use display instead of visibility the space 
    // image takes will be empty  you can see by 
    //putting button below image to see difference

    // if(myImage.style.display === "none"){
    //     myImage.style.display = "block";
    //     myBtn.textContent = "Hide";
    // }

    // else{
    //     myImage.style.display = "none";
    //     myBtn.textContent = "Show";
    // }

    if(myImage.style.visibility === "hidden"){

        myImage.style.visibility = "visible";
        myBtn.textContent = "Hide";
    }

    else{
        myImage.style.visibility = "hidden";
        myBtn.textContent = "Show";
    }

    
    

});