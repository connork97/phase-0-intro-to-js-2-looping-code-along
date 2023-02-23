// Code your solutions in this file
const cardsArr = [];


const writeCards = (namesArr, event) => {
    for (let i = 0; i < namesArr.length; i++){
        cardsArr.push(`Thank you, ${namesArr[i]}, for the wonderful ${event} gift!`);
    }
    return cardsArr;
}


const countDown = (i) => {
    while (i >= 0) {
        console.log(i);
        i--;
    }  
}