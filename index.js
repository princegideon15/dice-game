

var randomNum = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var imgSrc1 = '/images/dice' + randomNum + '.png'
var imgSrc2 = '/images/dice' + randomNum2 + '.png';

const p1 = document.querySelectorAll('img')[0];
p1.setAttribute('src', imgSrc1);

const p2 = document.querySelectorAll('img')[1];
p2.setAttribute('src', imgSrc2);

const winner = document.querySelector('h1');
winner.innerHTML = (randomNum > randomNum2) ? '&#128681 Player 1 wins' : 
                   (randomNum < randomNum2) ? 'Player 2 wins &#128681' : 'Tie';
