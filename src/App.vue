<script setup lang="ts">
import HeroHeader from "./components/HeroHeader.vue";
import HeroButton from "./components/HeroButton.vue";
</script>

<template>
  <HeroHeader />
  <div class="button-layout">
    <HeroButton
      title="Rate a scammer"
      subtitle="Based of Kitboga's L.O.V.E. system"
    />
    <HeroButton
      title="Bingo"
      subtitle="Based of Jim Browning's old Excel scammer Bingo made in Excel"
    />
  </div>
</template>

<style lang="scss">
@use "./styles/global" as *;

.button-layout {
  display: grid;
  grid-auto-flow: column;

  > * {
    width: 18rem;
    margin: 0 auto;
  }
}
</style>
