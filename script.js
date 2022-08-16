'use strict';

const player0El =   document.querySelector('.player--0');
const player1El =   document.querySelector('.player--1');
const score0El  =   document.getElementById('score--0');
const score1El  =   document.getElementById('score--1');
const diceEl    =   document.querySelector('.dice');
const rollDice  =   document.querySelector('.btn--roll');
const newGame   =   document.querySelector('.btn--new');
const holdBtn   =   document.querySelector('.btn--hold');
const current0  =   document.getElementById('current--0');
const current1  =   document.getElementById('current--1');

 let currentScore,activePlayer,score,canPlay;

const init=function(){
     currentScore = 0;
     activePlayer = 0;
     score = [0, 0];
     canPlay = true;

     
    current0.textContent = 0;
    current1.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();

const switchPlayer=function(){
     document.getElementById(`current--${activePlayer}`).textContent = 0;
     currentScore = 0; // currentScore of player will be 0 after switching player
     activePlayer = activePlayer === 0 ? 1 : 0;
     player0El.classList.toggle('player--active');
     player1El.classList.toggle('player--active');
}

rollDice.addEventListener('click', function () {
  if(canPlay){
    //1.Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //displaying dice roll on webpage by removing hidden class
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; //on the basis of activePlayer update the currentScore
    } else {
      // if 1 then switch the player
      switchPlayer();
    }
  }
});


holdBtn.addEventListener('click', function(){
    if(canPlay){
      //add current score to active players score
      score[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        score[activePlayer];

      //check if players score is >=100 if yes finish game
      if (score[activePlayer] >= 50) {
        canPlay = false;
        
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        
          diceEl.classList.add('hidden');
       
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
      } else {
        //switch the player
        switchPlayer();
      }
    }
})

newGame.addEventListener('click',init);


