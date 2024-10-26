// store the gameboard as an array inside of a Gameboard object
//TODO: place each object in its own module
const Gameboard = (function () {
  let tiles = new Array(9).fill(null);
  const getTiles = () => tiles;
  return { getTiles };
})();

//our players are also going to be stored in objects,

function Player(name, marker) {
  this.name = name;
  this.marker = marker;

  const getName = () => name;
  const getMarker = () => marker;
  return { getName, getMarker };
}

// an object to control the flow of the game itself.

const GameBrain = {};

//Object to manage the dom (duh!)
const DomManager = (() => {
  let gameboardEl = document.getElementsByClassName("gameboard");

  const getGameBoardEl = () => gameboardEl[0]; // Adjusting to select the first gameboard element

  const drawBoard = (tiles, board) => {
    let boardContent = "";

    for (let i = 0; i < tiles.length; i++) {  // Fixed loop condition
      boardContent += `<div class="tile" id="tile${i}"> ${
        tiles[i] ? tiles[i] : " "
      } </div>`;
    };

    board.innerHTML = boardContent;
  };

  return { drawBoard, getGameBoardEl };
})();

//testing
DomManager.drawBoard(Gameboard.getTiles(), DomManager.getGameBoardEl());