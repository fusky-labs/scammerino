<script setup lang="ts">
</script>

<template>
  <router-view></router-view>
</template>

<styles lang="scss">
@use "./styles/global" as *;

.button-layout {
  display: grid;
  grid-auto-flow: column;

  > * {
    width: 18rem;
    margin: 0 auto;
  }
}
</styles>