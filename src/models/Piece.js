export default class Piece {
    constructor({type, color, row, col}) {
        this.type = type;
        this.color = color;
        this.row = row;
        this.col = col;
        this.hasMoved = false;
    }

    moveTo(row, col) {
        this.row = row;
        this.col = col;
        this.hasMoved = true;
    }

    canMove(targetRow, targetCol, board) {
        throw new Error(`Não é possível mover para a linha ${targetRow} e coluna ${targetCol}`)
    }

    getImagePath() {
        return new URL(
            `../assets/pieces_image/${this.color}${this.type}.png`,
            import.meta.url
        ).href;
    }
}