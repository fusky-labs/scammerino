<script setup lang="ts">
import HeroHeader from "../components/HeroHeader.vue";
import HeroButton from "../components/HeroButton.vue";
</script>

<template>
  <HeroHeader />
  <div class="button-layout">
    <HeroButton
      title="Rate a scammer"
      subtitle="Based of Kitboga's L.O.V.E. system"
      link="/rate"
    />
    <HeroButton
      title="Bingo"
      subtitle="Based of Jim Browning's old scammer Bingo made in Excel"
      link="/bingo"
    />
  </div>
</template>
