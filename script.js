const cardList = ['card1.jpg', 'card2.jpg', 'card3.jpg']; // Add more image names

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