import { Game } from './Game';
import { Player } from './Player';


const player1 = new Player('Alice', 'R');
const player2 = new Player('Bob', 'Y');

const game = new Game(player1, player2);
game.start();
