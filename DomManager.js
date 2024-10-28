const gameboardEl = document.getElementsByClassName("gameboard")[0];

// Method to draw the game board
const drawBoard = (tiles) => {
  let boardContent = "";

  for (let i = 0; i < tiles.length; i++) {
    boardContent += `<div class="tile" id="tile${i}">${tiles[i] || " "}</div>`;
  }

  gameboardEl.innerHTML = boardContent;

  document.querySelectorAll('.tile').forEach((tile, index) => {
    tile.addEventListener('click', () => onTileClick(index));
  });
};

// Method to render a mark on a specific tile
const renderMark = (el, mark) => {
  el.innerText = mark;
};

// Method to handle tile clicks
const onTileClick = (index) => {
  console.log(`Tile ${index} clicked!`);
};

// Define the DomManager object
const DomManager = {
  drawBoard,
  renderMark,
  onTileClick,
};

// Default export the DomMan

export default DomManager;