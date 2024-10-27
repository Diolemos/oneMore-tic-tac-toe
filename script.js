// store the gameboard as an array inside of a Gameboard object
//TODO: place each object in its own module
const Gameboard = (function () {
  let tiles = new Array(9).fill(null);
  const getTiles = () => tiles;
  return { getTiles };
})();

//our players are also going to be stored in objects,

function Player(name, marker) {
  const getName = () => name;
  const getMarker = () => marker;
  return { getName, getMarker };
}
// an object to control the flow of the game itself.

const GameBrain = {};

//Object to manage the dom (duh!)
const DomManager = (() => {
  let gameboardEl = document.getElementsByClassName("gameboard")[0];

  const drawBoard = (tiles) => {
    let boardContent = "";

    for (let i = 0; i < tiles.length; i++) {  
      boardContent += `<div class="tile" id="tile${i}"> ${
         tiles[i] || " "
      } </div>`;
    };

    gameboardEl.innerHTML = boardContent;
  };

  return { drawBoard };
})();

//testing
DomManager.drawBoard(Gameboard.getTiles());