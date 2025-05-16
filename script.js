// Generate array of 85 cards dynamically
const cardList = [];
for (let i = 1; i <= 85; i++) {
  cardList.push(`card${i}.jpeg`);
}

let cardFlipped = false;

function flipCard() {
  const cardImage = document.getElementById('cardImage');
  if (!cardFlipped) {
    const randomCard = cardList[Math.floor(Math.random() * cardList.length)];
    cardImage.src = randomCard;
    cardFlipped = true;
  } else {
    cardImage.src = 'back.jpg';
    cardFlipped = false;
  }
}