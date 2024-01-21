function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Iltimos ikkala o'yinchi nomini kiriting!")
    return;
  }
  gameAreaElement.style.display = "block";
};

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  activePlayerNameElement.textContent =players[activePlayer].name;
};

function selectGamefield(event) {
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");
  switchPlayer();
};