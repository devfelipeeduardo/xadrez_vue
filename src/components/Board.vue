<style>
.light {
  background-color: var(--light-brown);
}

.dark {
  background-color: var(--brown);
  ;
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
      turn: 0,
      board:
        [
          //First Row
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
        col: null
      }
    }
  },
  methods: {

    // OBSOLETO: Será retornado pelo objeto posteriormente
    getPieceImage(piece) {
      return new URL(
        `../assets/pieces_image/${piece}.png`,
        import.meta.url
      ).href;
    },

    
    setSelectedPiece(rowIndex, colIndex) {
      this.selectedPiece.row = rowIndex;
      this.selectedPiece.col = colIndex;
    },

    // Se selecionar um lugar vazio, reseta qualquer peça selecionada.
    onClickSquare(rowIndex, columnIndex) {
      const piece = this.board[rowIndex][columnIndex];
      
      if (!piece) {
        this.resetSelectedTarget();
      } else {
        this.setSelectedPiece(rowIndex, columnIndex);
      }
    },

    // OK
    resetSelectedTarget() {
      this.selectedPiece.row = null;
      this.selectedPiece.col = null;
    },

    // Verifica se uma peça na posição está selecionada
    isPieceSelected(rowIndex, colIndex) {
      return this.selectedPiece.row === rowIndex && this.selectedPiece.col === colIndex;
    }
  },

  computed: {
    // Chamar sempre que mover uma peça.
    incrementTurn() {
      this.turn += 1;
    }
  }
}
</script>


<template>
  <div class="board">
    <span v-for="(row, rowIndex) in board" :key="rowIndex" style="display: contents">

      <span v-for="(piece, colIndex) in row" :key="`${rowIndex}-${colIndex}`" class="position"
        :class="(rowIndex + colIndex) % 2 === 0 ? 'light' : 'dark'" @click="onClickSquare(rowIndex, colIndex)">

        <img v-if="piece" :src="getPieceImage(piece)
          // piece.getImagePath() <-- Retornar do objeto posteriormente
          " class="piece" :class="isPieceSelected(rowIndex, colIndex) ? 'selected-color' : ''"
          @click.stop="setSelectedPiece(rowIndex, colIndex)" />
      </span>
    </span>
  </div>
</template>
