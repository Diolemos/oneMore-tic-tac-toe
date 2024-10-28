// Reference to the gameboard element
const gameboardEl = document.getElementsByClassName("gameboard")[0];

// Method to add event listeners to the tiles
const addTileEventListeners = (onTileClick) => {
  document.querySelectorAll('.tile').forEach((tile, index) => {
    tile.addEventListener('click', () => onTileClick(index));
  });
};

// Method to draw the game board
const drawBoard = (tiles) => {
  let boardContent = "";
  for (let i = 0; i < tiles.length; i++) {
    boardContent += `<div class="tile" id="tile${i}">${tiles[i] || " "}</div>`;
  }
  gameboardEl.innerHTML = boardContent;
};

// Method to render a mark on a specific tile
const renderMark = (el, mark) => {
  el.innerText = mark;
};

// Define the DomManager object
const DomManager = {
  drawBoard,
  renderMark,
  addTileEventListeners,
};

// Default export the DomManager object
export default DomManager;
