<style>
.game-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 720px;
    width: 720px;
    border-radius: 20px;
    background-color: red;
}

</style>

<script setup>
import Timer from './components/Timer.vue';
import Board from './components/Board.vue';

</script>

<template>
    <div class="game-container">
        <Board />
        <Timer />
    </div>
</template>