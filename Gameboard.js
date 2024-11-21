
    let tiles = new Array(9).fill(null);
  
    
    const getTiles = () => tiles;
  
    
    const setTile = (index, marker) => {
      if (index >= 0 && index < tiles.length && tiles[index] === null) {
        tiles[index] = marker;
        return true;  
      }
      console.log("Please, chose an empty spot")
      return false;   // Return false if the move was invalid
    };
  
    // Method to reset the gameboard to its initial state
    const resetBoard = () => {
      tiles = new Array(9).fill(null);
    };
  
    export default {
      getTiles,
      setTile,
      resetBoard,
    };
 
  
 
