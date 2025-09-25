import { Board } from './Board';
import { Player } from './Player';
import readlineSync from 'readline-sync';

export class Game {
    board: Board;
    players: Player[];
    currentPlayerIndex: number;

    constructor(player1: Player, player2: Player) {
        this.board = new Board();
        this.players = [player1, player2];
        this.currentPlayerIndex = 0;
    }

    start() {
        console.log('=== Puissance 4 ===');

        let winner: Player | null = null;

        while (true) {
            const player = this.players[this.currentPlayerIndex];
            this.board.printBoard();

            let col: number;
            while (true) {
                col = readlineSync.questionInt(`${player.name} (${player.color}), choisissez une colonne (0-${this.board.cols - 1}) : `);
                if (col >= 0 && col < this.board.cols && this.board.canPlay(col)) break;
                console.log("Colonne invalide ou pleine, réessayez !");
            }

            const row = this.board.play(col, player.color)!;

            if (this.board.checkWin(row, col, player.color)) {
                winner = player;
                break;
            }

            this.currentPlayerIndex = 1 - this.currentPlayerIndex;
        }

        this.board.printBoard();
        console.log(` Félicitations ${winner!.name}, vous avez gagné ! `);
    }
}
