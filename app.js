
const player1Title = document.querySelector(".player1");
const player2Title = document.querySelector(".player2");
const player1Score = document.querySelector("#player1Score");
const player2Score = document.querySelector("#player2Score");




const restartBtn = document.querySelector("#start-again-btn");
const rollBtn = document.querySelector("#roll-btn");
const holdBtn = document.querySelector("#hold");
const flipCardBtn = document.getElementById("flip-card");



const cube = document.querySelector("#cube-back");
let diceFace1 = document.getElementById("dice-img");



let score1 = 0;
let score2 = 0;
let turn = 1;

flipCardBtn.addEventListener("click", flipCard);
holdBtn.addEventListener("click", (playerTurn))


function flipCard() {
  card.classList.toggle("flipCard");
  turn = 1;
  if (turn == 1) {
    player1Title.classList.toggle("flashing-animation");
  } else if (turn == 2) {
    player2Title.classList.toggle("flashing-animation");
  }
}

function playerTurn() {
  if (turn == 1) {
    turn = turn + 1;
    player2Title.classList.toggle("flashing-animation");
    player1Title.classList.remove("flashing-animation");

  } else if (turn == 2) {
    turn = turn - 1;
    player1Title.classList.toggle("flashing-animation");
    player2Title.classList.remove("flashing-animation");
  }
}


function turns() {
  if (turn == 1) {
    player1Score.textContent = score1;
  } else {
    player2Score.textContent = score2;
  }
}



function score(points) {
  if (turn == 1) {
    score1 = score1 + points;
  } else score2 = score2 + points;
}

rollBtn.addEventListener("click", () => {
  cube.style.display = "none";
  diceFace1.style.display = "grid";
  let images = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];

  let cnt = 0;
  let obj = setInterval(randomImg, 100);

  function randomImg() {
    let random = Math.floor(Math.random() * 6);

    diceFace1.src = images[random];
    cnt++;

    if (cnt == 20) {
      clearInterval(obj);
      if (images[random] == "dice1.png") {
        if (turn == 1) {
          player1Title.textContent = "Looser!";
          player2Title.textContent = "Winner!";
          diceFace1.style.display = "inline"
          rollBtn.style.display = "none";
          cube.style.display = "none";
          // restartBtn.style.display = "grid";
          holdBtn.style.display = "none";
        } else {
          player1Title.textContent = "Winner!";
          player2Title.textContent = "Looser!";
          diceFace1.style.display = "none"
          rollBtn.style.display = "none";
          cube.style.display = "grid";
          // restartBtn.style.display = "grid";
          holdBtn.style.display = "none";

        }

        setTimeout(function () {
          diceFace1.style.display = "none";
          cube.style.display = "grid";
          restartBtn.style.display = "grid";
        }, 4000);
      } else if (images[random] == "dice2.png") {
        score(2);
        turns();
        win();
      } else if (images[random] == "dice3.png") {
        score(3);
        turns();
        win();
      } else if (images[random] == "dice4.png") {
        score(4);
        turns();
        win();
      } else if (images[random] == "dice5.png") {
        score(5);
        turns();
        win();
      } else if (images[random] == "dice6.png") {
        score(6);
        turns();
        win();
      }
    }
  }
});

function win() {
  if (score1 >= 6) {
    player1Title.textContent = "Winner!";
    player2Title.textContent = "Looser!";
    diceFace1.style.display = "none"
    rollBtn.style.display = "none";
    cube.style.display = "grid";
    restartBtn.style.display = "grid";
    holdBtn.style.display = "none";
  } else if (score2 >= 6) {
    player1Title.textContent = "Looser!";
    player2Title.textContent = "Winner!";
    diceFace1.style.display = "none"
    rollBtn.style.display = "none";
    cube.style.display = "grid";
    restartBtn.style.display = "grid";
    holdBtn.style.display = "none";


  }
}

restartBtn.addEventListener("click", () => {
  score1 = 0;
  score2 = 0;
  player1Score.textContent = score1;
  player2Score.textContent = score2;
  player1Title.textContent = "Player1";
  player2Title.textContent = "Player2";
  diceFace1.style.display = "none"
  rollBtn.style.display = "inline";
  holdBtn.style.display = "inline";
  restartBtn.style.display = "none";
  if (turn == 2) {
    playerTurn()
  }

})