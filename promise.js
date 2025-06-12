// Promise = an object that manages asynchr0nous operations .
//wrap a Promise object around {asynchronous code}
// " I promise to return a vlaue"
//PENDING -> RESOLVED OR REJECTED
// new Promise((resolve , reject) =>  {asynchronous code})


//DO THESE CHORES IN ORDER

//1.WALK THE DOG
//2.CLEAN THE KITCHEN
//3. TAKE OUT THE TRASH


function walkDog(){
    
    return new Promise((resolve,reject) =>{

        setTimeout(() =>{
            const dogwalked = true;
            if(dogwalked){
                resolve("You walk the dog 🐕‍🦺");

            }
            else{
                reject("You didn't walk the dog 🐕‍🦺");
            }
            
        },1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve,reject) =>{
       
        setTimeout(() =>{
            const kitchenCleaned = true;
            if(cleanKitchen){
                resolve("You clean the kitchen 🧺");
                
            }
            else{
                reject("You didn't clean the kitchen 🧺");
            }

           
        },2500);

    });
  
}

function takeOutTrash(){


    return new Promise((resolve,reject) =>{

        setTimeout(() =>{
            const trashTakenOut = false;
            if(trashTakenOut){
                resolve("You take out the trash 💫");

            }
            else{
                reject("You didn't take out the trash 💫");
            }
            
        },500);
    });
   
}

walkDog().then( value =>{console.log(value); return cleanKitchen()})
         .then(value =>{console.log(value); return takeOutTrash()})
         .then(value =>{console.log(value); 
         console.log("You finished all the chores.")})
        .catch(error => console.error(error));
        
        