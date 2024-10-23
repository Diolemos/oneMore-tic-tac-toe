// store the gameboard as an array inside of a Gameboard object

const Gameboard = {
    gameboard : new Array(9).fill(null),
}

//our players are also going to be stored in objects,

function Player(name, marker){
    this.name = name;
    this.marker = marker;
}

// an object to control the flow of the game itself.

const GameBrain = {
   
}