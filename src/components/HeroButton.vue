<script setup lang="ts">
const p = defineProps<{
  img?: string;
  title: string;
  subtitle: string;
}>();

</script>

<template>
  <div id="button">
    <img :src="img" :alt="`Image for ${title} lmao`" />
    <h3>{{ title }}</h3>
    <span>{{ subtitle }}</span>
  </div>
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
