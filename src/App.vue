<style>

:root {
    --light-brown: #f0d9b5;
    --brown: #b58863;
    --black: rgb(34, 34, 34);
    --number-color: aliceblue;
}

.game-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    height: 720px;
    width: 880px;
    border-radius: 20px;
    background-color: rgb(225, 225, 225);
}

.timers-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 240px;
}

</style>

<script setup>
import Timer from './components/Timer.vue';
import Board from './components/Board.vue';

</script>

<template>
    <div class="game-container">
        <div class="timers-container">
            <Timer />
            <Timer />
        </div>
        <Board />
    </div>
</template>