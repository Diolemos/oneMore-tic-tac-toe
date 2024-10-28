export const GameBrain = {
    currentPlayerIndex: 0,
    isGameOver: false,
     winningCombinations : [
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
};