<style>

.light {
  background-color: var(--light-brown);
}

.dark {
  background-color: var(--brown);;
}

.board {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    height: 560px;
    width: 560px;
    border-radius: 10px;
    overflow: hidden;
}

.position {
    display: flex;
    justify-content: center;
    align-items: center;
}

.piece {
    width: 80%;
    height: 80%;
    border-radius: 5px;
}
.piece:hover {
  cursor: pointer;
}

.selected-color {
  background-color: rgba(33, 29, 160, 0.414);
}
</style>

<script>

export default {
    data() {
        return {
            board:
                [
                    ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
                    ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
                    ['', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', ''],
                    ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
                    ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR']
                ],
            selectedPiece: {
              row: null,
              col: null,
              piece: null
            },
            selectedTarget: {
              row: null,
              col: null
            }
        }
    },
    methods: {
      getPieceImage(piece){
          if (!piece) return null
          return new URL(`../assets/pieces_image/${piece}.png`, import.meta.url).href
      },

      setSelectedPiece(piece, rowIndex, columIndex) {

        this.selectedPiece.piece = piece;
        this.selectedPiece.row = rowIndex;
        this.selectedPiece.col = columIndex;
      },

      isPieceSelected(rowIndex, columIndex) {
        return (
          this.selectedPiece.row === rowIndex 
          &&
          this.selectedPiece.col === columIndex
        );
      },

      setSelectedTarget(rowIndex, columnIndex) {
        if (rowIndex == null || columnIndex == null) {
          this.selectedPiece.piece = null;
          this.selectedPiece.row = null;
          this.selectedPiece.col = null;
        }
        this.selectedTarget.row = rowIndex;
        this.selectedTarget.column = columnIndex;

        movePiece(piece)
      },

      movePiece(piece) {
        if (piece[1] === 'P') {
          movePawn(actualRowPosition, actualColumnPosition)
        }
      },

      movePawn(actualRowPosition, actualColumnPosition) {
        const MOVE_FOWARD = 1;
        const MOVE_BACKWARD = -1;
        const INITIAL_LIMIT_BOARD = 0;
        const FINAL_LIMIT_BOARD = 7;

        const piece = this.board[actualRowPosition][actualColumPosition];
        if (!piece || piece[1] !== 'P') return;
        const color = piece[0];

        const direction = color === 'w' ? MOVE_FOWARD : MOVE_BACKWARD;
        const newRow = actualRowPosition + direction;

        if (newRow < INITIAL_LIMIT_BOARD || newRow > FINAL_LIMIT_BOARD) return;
        if (this.board[newRow][actualColumPosition] !== '') return;

        // Movimentação:
        this.board[newRow][actualColumPosition] = piece;
        this.board[actualRowPosition][actualColumPosition] = '';
      }
    }
}
</script>


<template>
  <div class="board">
    <span
      v-for="(row, rowIndex) in board"
      :key="rowIndex"
      style="display: contents"
      >
      <span
        v-for="(piece, colIndex) in row"
        :key="`${rowIndex}-${colIndex}`"
        class="position"
        :class="(rowIndex + colIndex) % 2 === 0 ? 'light' : 'dark'"
        @click="setSelectedTarget(rowIndex, colIndex)"
        >
        <img
          v-if="piece"
          :src="getPieceImage(piece)"
          class="piece"
          :class="isPieceSelected(rowIndex, colIndex) ? 'selected-color' : ''"
          @click="setSelectedPiece(piece, rowIndex, colIndex)"
        />
      </span>
    </span>
  </div>
</template>
