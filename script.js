import { GameBrain } from './GameBrain.js';
import DomManager from './DomManager.js';

let play_button = DomManager.createPlayButton();
document.body.appendChild(play_button);
play_button.addEventListener("click",()=>{
    play_button.remove()   
    GameBrain.playGame(['Player 1', 'Player 2'])})
//GameBrain.playGame(['Player 1', 'Player 2']); 
