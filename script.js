const cardList = ['card1.jpeg', 'card2.jpeg', 'card3.jpeg']; // Add your real image names here

let cardFlipped = false;

function flipCard() {
  const cardImage = document.getElementById('cardImage');
  if (!cardFlipped) {
    const randomCard = cardList[Math.floor(Math.random() * cardList.length)];
    cardImage.src = randomCard;
    cardFlipped = true;
  } else {
    cardImage.src = 'back.jpeg';
    cardFlipped = false;
  }
}
