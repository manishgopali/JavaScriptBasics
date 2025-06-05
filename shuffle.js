//fisher-yates alogrithm


const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

shuffle(cards);
console.log(cards);


function shuffle(array){
    for(let i = array.legth - 1; i > 0;i--){

        const random = Math.floor(Math.random() * (i+1));

        [arary[i],array[random]] = [array[random],array[i]];

    }
}

