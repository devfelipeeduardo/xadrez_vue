<style>
.board {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    height: 560px;
    width: 560px;
    gap: 1px;
    border-radius: 10px;
    background-color: yellow;
    overflow: hidden;
}

.board>span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    outline: 1px solid #000000;
}
</style>

<script setup>

</script>


<template>
    <div class="board">
        <span class="position">A8</span>
        <span class="position">B8</span>
        <span class="position">C8</span>
        <span class="position">D8</span>
        <span class="position">E8</span>
        <span class="position">F8</span>
        <span class="position">G8</span>
        <span class="position">H8</span>

        <span class="position">A7</span>
        <span class="position">B7</span>
        <span class="position">C7</span>
        <span class="position">D7</span>
        <span class="position">E7</span>
        <span class="position">F7</span>
        <span class="position">G7</span>
        <span class="position">H7</span>

        <span class="position">A6</span>
        <span class="position">B6</span>
        <span class="position">C6</span>
        <span class="position">D6</span>
        <span class="position">E6</span>
        <span class="position">F6</span>
        <span class="position">G6</span>
        <span class="position">H6</span>

        <span class="position">A5</span>
        <span class="position">B5</span>
        <span class="position">C5</span>
        <span class="position">D5</span>
        <span class="position">E5</span>
        <span class="position">F5</span>
        <span class="position">G5</span>
        <span class="position">H5</span>

        <span class="position">A4</span>
        <span class="position">B4</span>
        <span class="position">C4</span>
        <span class="position">D4</span>
        <span class="position">E4</span>
        <span class="position">F4</span>
        <span class="position">G4</span>
        <span class="position">H4</span>

        <span class="position">A3</span>
        <span class="position">B3</span>
        <span class="position">C3</span>
        <span class="position">D3</span>
        <span class="position">E3</span>
        <span class="position">F3</span>
        <span class="position">G3</span>
        <span class="position">H3</span>

        <span class="position">A2</span>
        <span class="position">B2</span>
        <span class="position">C2</span>
        <span class="position">D2</span>
        <span class="position">E2</span>
        <span class="position">F2</span>
        <span class="position">G2</span>
        <span class="position">H2</span>

        <span class="position">A1</span>
        <span class="position">B1</span>
        <span class="position">C1</span>
        <span class="position">D1</span>
        <span class="position">E1</span>
        <span class="position">F1</span>
        <span class="position">G1</span>
        <span class="position">H1</span>
    </div>
</template>