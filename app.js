const btnEls = document.querySelectorAll(".btn");
const resetBtn = document.querySelector("#reset-btn");
const resultEl = document.querySelector(".result");
const newGameEl = document.querySelector("#newGame-btn");
const wrapperEl = document.querySelector(".wrapper");
const resultWrapperEl = document.querySelector(".result-wrapper");
const turnEl = document.querySelector(".turn");
let userO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  userO = true;
  enableBtns();
  turnEl.innerText = "PlayerO's turn...";
};

const startNewGame = () => {
  resetGame();
  resultWrapperEl.classList.add("hide");
  wrapperEl.classList.remove("hide");
};

btnEls.forEach((btnEl) => {
  btnEl.addEventListener("click", () => {
    if (userO) {
      btnEl.innerText = "O";
      userO = false;
      turnEl.innerText = "PlayerX's turn...";
    } else {
      btnEl.innerText = "X";
      userO = true;
      turnEl.innerText = "PlayerO's turn...";
    }
    btnEl.disabled = true;
    checkWinner();
  });
});

resetBtn.addEventListener("click", () => {
  resetGame();
  resultEl.classList.add("hide");
});

newGameEl.addEventListener("click", () => {
  startNewGame();
});

const disableBtns = () => {
  for (let btnEl of btnEls) {
    btnEl.disabled = true;
  }
};
const enableBtns = () => {
  for (let btnEl of btnEls) {
    btnEl.disabled = false;
    btnEl.innerText = "";
  }
};

const showWinner = (winner) => {
  resultEl.innerHTML = `<h4 class="result">Congratulations🎉✨, Player${winner} <i>Wins</i> the game</h4>`;
  resultWrapperEl.classList.remove("hide");
  // resultWrapperEl.style.height = "100dvh";
  wrapperEl.classList.add("hide");
  disableBtns();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   btnEls[pattern[0]].innerText,
    //   btnEls[pattern[1]].innerText,
    //   btnEls[pattern[2]].innerText
    // );
    let pos0 = btnEls[pattern[0]].innerText;
    let pos1 = btnEls[pattern[1]].innerText;
    let pos2 = btnEls[pattern[2]].innerText;

    if (pos0 != "" && pos1 != "" && pos2 != "") {
      if (pos0 === pos1 && pos1 === pos2 && pos2 === pos0) {
        showWinner(pos0);
      }
    }
  }
};

console.log(0.1 + 0.2 === 0.3);
