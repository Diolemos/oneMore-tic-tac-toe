import Gameboard from './Gameboard.js';
import DomManager from './DomManager.js';
import Player from './Player.js';

export const GameBrain = {
  currentPlayerIndex: 0,
  isGameOver: false,
  players: [],
  winningCombinations: [
    [0, 1, 2], // Rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonals
    [2, 4, 6],
  ],

  checkWinner(tiles) {
    for (let combination of this.winningCombinations) {
      const [a, b, c] = combination;
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        return true; // Winner found
      }
    }
    return false; // No winner
  },

  
  onTileClick(index) {
    // Get current player
    const currentPlayer = this.players[this.currentPlayerIndex];
    const marker = currentPlayer.getMarker();

    // Place marker on the gameboard if valid
    if (Gameboard.setTile(index, marker)) {
      DomManager.renderMark(document.getElementById(`tile${index}`), marker);

      // Check if there's a winner
      if (this.checkWinner(Gameboard.getTiles())) {
        console.log(`${currentPlayer.getName()} wins!`);
        this.isGameOver = true;
        return;
      }

      // Switch to the next player
      this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }
  },

  playGame(playerNames = ['Player 1', 'Player 2']) {
    // Initialize players
    this.players = [
      Player(playerNames[0], 'X'),
      Player(playerNames[1], 'O')
    ];

    // Draw the initial game board
    DomManager.drawBoard(Gameboard.getTiles());

    // Add event listeners to the tiles
    DomManager.addTileEventListeners((index) => this.onTileClick(index));
  },
};
