const startButton = document.querySelector('.board__button');
const boardTitle = document.querySelector('.board__title');

function createBoard(count, columns) {
    const gameBoard = document.querySelector('.board');
    gameBoard.textContent = "";

    const template = document.querySelector('#gameTableTemplate').cloneNode(true).content;
    const table = template.querySelector('.table');
    const restartBtn = template.querySelector(".table__button");

    for (let i = 0; i < count; i++) {
      gameTable.append(createCard());
    }
    table.style = `
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${columns}, 1fr);`;

    gameBoard.append(table);

    restartBtn.addEventListener('click', () => {
        location.reload()
    });

    gameBoard.append(restartBtn);

}

function createCard() {
  const template = document.querySelector('#cardTemplate').cloneNode(true).content;
  const card = template.querySelector('.card');
}

startButton.addEventListener("click", (event) => {
  event.preventDefault()
  const input = document.querySelector('.board__input');

  let columns = input.value;
  let count;

  if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
    count = columns * columns;
  };

  createBoard(columns);
});