<script setup lang="ts">
import { RouterLink } from "vue-router";

const p = defineProps<{
  img?: string;
  title: string;
  subtitle: string;
  link?: string;
}>();
</script>

<template>
  <router-link :to="link" id="button">
    <h3>{{ title }}</h3>
    <span>{{ subtitle }}</span>
  </router-link>
</template>

<style lang="scss" scoped>
#button {
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: background 200ms ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    background: red;
  }
}
</style>
