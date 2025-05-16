// List of your activity card images
const cardList = ['card1.jpeg', 'card2.jpeg', 'card3.jpeg']; // Add more if you have

let cardFlipped = false;

function flipCard() {
  const cardImage = document.getElementById('cardImage');
  if (!cardFlipped) {
    const randomCard = cardList[Math.floor(Math.random() * cardList.length)];
    cardImage.src = randomCard;
    cardFlipped = true;
  } else {
    cardImage.src = 'back.jpg'; // Show back side again
    cardFlipped = false;
  }
}