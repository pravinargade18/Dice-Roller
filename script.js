'use strict';

const score0El  =   document.getElementById('score--0');
const score1El  =   document.getElementById('score--1');
const diceEl    =   document.querySelector('.dice');
const rollDice  =   document.querySelector('.btn--roll');
const newGame   =   document.querySelector('.btn--new');
const holdBtn   =   document.querySelector('.btn--hold');
const current0  =   document.getElementById('current--0');

let currentScore = 0;

score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

document.addEventListener('click', function(){

    //1.Generating random dice roll
    const dice=Math.trunc(Math.random()*6)+1;
    console.log(dice);

    //displaying dice roll on webpage by removing hidden class
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;
    if(dice!==1){
        currentScore+=dice;
        current0.textContent=currentScore;
    }
    else{

    }
})



