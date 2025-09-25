export type Cell = 'R' | 'Y' | null;
export type BoardMatrix = Cell[][];

export class Board {
    rows: number;
    cols: number;
    grid: BoardMatrix;

    constructor(rows = 6, cols = 7) {
        this.rows = rows;
        this.cols = cols;
        this.grid = Array.from({ length: rows }, () => Array(cols).fill(null));
    }

    canPlay(col: number): boolean {
        return this.grid[0][col] === null;
    }

    play(col: number, player: Cell): number | null {
        if (!this.canPlay(col)) return null;
        for (let row = this.rows - 1; row >= 0; row--) {
            if (this.grid[row][col] === null) {
                this.grid[row][col] = player;
                return row;
            }
        }
        return null;
    }

    checkWin(row: number, col: number, player: Cell): boolean {
        if (!player) return false;

        const directions = [
            { dr: 0, dc: 1 },  // horizontal
            { dr: 1, dc: 0 },  // vertical
            { dr: 1, dc: 1 },  // diagonale \
            { dr: 1, dc: -1 }  // diagonale /
        ];

        for (let { dr, dc } of directions) {
            let count = 1;

            for (let step = 1; step < 4; step++) {
                const r = row + dr * step;
                const c = col + dc * step;
                if (r < 0 || r >= this.rows || c < 0 || c >= this.cols) break;
                if (this.grid[r][c] === player) count++;
                else break;
            }

            for (let step = 1; step < 4; step++) {
                const r = row - dr * step;
                const c = col - dc * step;
                if (r < 0 || r >= this.rows || c < 0 || c >= this.cols) break;
                if (this.grid[r][c] === player) count++;
                else break;
            }

            if (count >= 4) return true;
        }

        return false;
    }

    printBoard() {
        console.log("\n" + this.grid.map(row => row.map(cell => cell ?? '.').join(' ')).join('\n') + "\n");
    }
}
