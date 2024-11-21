// Reference to the gameboard element
const gameboardEl = document.getElementsByClassName("gameboard")[0];


const addTileEventListeners = (onTileClick) => {
  document.querySelectorAll('.tile').forEach((tile, index) => {
    tile.addEventListener('click', () => onTileClick(index));
  });
};

const changeTitle = (phrase)=>{
  const title = document.getElementsByTagName('h1')[0];
  title.innerText = phrase;
 
}

const drawBoard = (tiles) => {
  let boardContent = "";
  for (let i = 0; i < tiles.length; i++) {
    boardContent += `<div class="tile" id="tile${i}">${tiles[i] || " "}</div>`;
  }
  gameboardEl.innerHTML = boardContent;
};


const renderMark = (el, mark) => {
  el.innerText = mark;
};

// Define the DomManager object
const DomManager = {
  drawBoard,
  changeTitle,
  renderMark,
  addTileEventListeners,
};


export default DomManager;
