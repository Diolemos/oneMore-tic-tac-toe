// Reference to the gameboard element
let gameboardEl ;


const createPlayButton = ()=>{
  let playButton = document.createElement("button");
  playButton.className = "play_button";
  playButton.textContent = "Play"
  return playButton;

}

const createGameboardElement = () => {
  if (gameboardEl) {
    console.log("There is already a gameboard!");
    return;
  }

  // Create the gameboard element dynamically
  gameboardEl = document.createElement("div");
  gameboardEl.className = "gameboard";
  document.body.appendChild(gameboardEl); 
};

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
  createPlayButton,
  createGameboardElement,
  drawBoard,
  changeTitle,
  renderMark,
  addTileEventListeners,
};


export default DomManager;
