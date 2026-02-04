import Piece from './Piece.js'

export default class Pawn extends Piece {
    constructor({color, row, col}) {
        super({ type: 'P', color, row, col})
    }

    moveTo(row, column, board) {
        const MOVE_FOWARD = 1;
        const MOVE_BACKWARD = -1;
        const INITIAL_LIMIT_BOARD = 0;
        const FINAL_LIMIT_BOARD = 7;

        if (this.type !== 'P') return;

        const direction = this.color === 'w' ? MOVE_FOWARD : MOVE_BACKWARD;
        const newRow = row + direction;

        if (newRow < INITIAL_LIMIT_BOARD || newRow > FINAL_LIMIT_BOARD) return;
        if (board[newRow][column] !== '') return;

        // Movimentação:
        board[newRow][column] = this;
        board[this.row][this.column] = '';
      }
}