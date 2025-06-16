//Async/Await = Async = makes function return a promise
// Await = makes an async fucntion wait for promise


//allows you write asynchronous code in synchronous manner
// Async doesn't have resolve or reject parameters
//Everything after Await is placed in an event queue
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

async function doChores() {

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores!");

    }
    catch(error){
        console.error(error);

    }
}

doChores();