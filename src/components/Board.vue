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
      selectedPiece: null,
      selectedTarget: {
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

    setSelectedPiece(piece) {
      this.selectedPiece = piece;
    },

    // Se selecionar um lugar vazio, reseta qualquer peça selecionada.
    onClickSquare(rowIndex, columnIndex) {
      if (rowIndex == null || columnIndex == null) {
        this.resetSelectedTarget();
      }
    },

    resetSelectedTarget() {
      {
        this.selectedPiece.piece = null;
      }
    },

    // Muda a cor quando uma peça é selecionada
    isPieceSelected(piece) {
      return this.selectedPiece === piece;
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
          " class="piece" :class="isPieceSelected(piece) ? 'selected-color' : ''"
          @click="setSelectedPiece(piece)" />
      </span>
    </span>
  </div>
</template>
