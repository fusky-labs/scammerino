<script setup lang="ts">
const p = defineProps<{
  item: string;
  points: number;
}>();
</script>

<template>
  <button>
    <h3>{{ item }}</h3>
    Points: {{ points }}
  </button>
</template>

<style scoped>
button {
  display: grid;
  place-items: center;
  padding: 1.5rem;
} 
</style>