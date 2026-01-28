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
                ]
        }
    },
    methods: {
        getPieceImage(piece){
            if (!piece) return null
            return new URL(`../assets/pieces_image/${piece}.png`, import.meta.url).href
        }
    }
}
</script>


<template>
  <div class="board">
    <span
      v-for="(cell, index) in board.flat()"
      :key="index"
      class="position"
      :class="(Math.floor(index / 8) + index % 8) % 2 === 0 ? 'light' : 'dark'"
    >
      <img
        v-if="cell"
        :src="getPieceImage(cell)"
        class="piece"
      />
    </span>
  </div>
</template>
