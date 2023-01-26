// Code your solutions in this file

// thankYouCard for loop

const thankYouCard = [];

function writeCards(namesArr, eventName) {
    for (let i = 0; i < namesArr.length; i++) {
        thankYouCard.push(`Thank you, ${namesArr[i]}, for the wonderful ${eventName} gift!`);
        debugger;
    }
    return thankYouCard;
}
writeCards(namesArr, eventName);

// countDown while loop

function countDown(i) {
    while (i > 0) {
        console.log(i);
        i--;
    }
    console.log(i);
}


/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts); */ 
