<script setup lang="ts">
import BackToMain from "../components/BackToMain.vue";
import BingoBtn from "../components/BingoBtn.vue";
</script>

<template>
  <BackToMain />
  <div id="bingo-container">
    <BingoBtn item="Items" :points=69 />
    <BingoBtn item="Item" :points=69 />
    <BingoBtn item="Item" :points=69 />
    <BingoBtn item="Items" :points=69 />
    <BingoBtn item="Item" :points=69 />
    <BingoBtn item="Item" :points=69 />
    <BingoBtn item="Item" :points=69 />
    <BingoBtn item="Item" :points=69 />
    <BingoBtn item="Item" :points=69 />
    <BingoBtn item="Item" :points=69 />
  </div>
</template>

<style lang="scss" scoped>
#bingo-container {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(5, 1fr);
}
</style>