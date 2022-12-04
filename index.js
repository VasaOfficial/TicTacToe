const box = document.querySelectorAll(".box")
const bluePlayer = document.querySelector(".playerBlue")
const redPlayer = document.querySelector(".playerRed")
const restart = document.getElementById("reset")

const winCombination = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [3,4,5],
  [6,7,8],
  [2,5,8],
  [2,4,6],
  [1,4,7],
]

let player1 = [];
let player2 = [];

let score = {
  player1: 0,
  player2: 0,
}

let flag = true;

// loop that runs function when clicked on spot
for(let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", () => {
    if(flag === true) {
      addBoxesPlayerBlue(i);
    }else {
      addBoxesPlayerRed(i);
    }
    checkWinner();
  })
}

// funcions for adding X's or O's 
function addBoxesPlayerBlue(i) {
  box[i].textContent = "X";
  player1.push(i);
  flag = false;
}

function addBoxesPlayerRed(i) {
  box[i].textContent = "O";
  player2.push(i);
  flag = true;
}

function checkWinner() {
  winCombination.find((item) => {
    if(item.filter((i) => player1.includes(i)).length === 3) {
      score.player1++;
      displayScore();
      clearTable();
      return item;
    }else if(item.filter((i) => player2.includes(i)).length === 3) {
      score.player2++;
      displayScore();
      clearTable();
    }
    return
  })
}

function displayScore() {
  bluePlayer.textContent = "Player" + score.player1;
  redPlayer.textContent = "Computer" + score.player2;
}
displayScore()

function clearTable() {
  for(i = 0; i < box.length; i++) {
    box[i].textContent = "";
  }
  player1 = [];
  player2 = [];
  flag = true;
}

restart.addEventListener("click", () => {
  clearTable();
})


