function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Iltimos ikkala o'yinchi nomini kiritig!")
    return;
  }
  gameAreaElement.style.display = "block";
};