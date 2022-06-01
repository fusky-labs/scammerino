<template>
  <div id="back-to-main">
    <router-link to="/">
      <i class="fas fa-chevron-left" />
      <strong>Go back lol</strong>
    </router-link>
    <span>{{ $route.name }}</span>
  </div>
</template>

<style lang="scss" scoped>
#back-to-main {
  width: 100%;
  padding: 1rem 1.25rem;
  background: orchid;
  display: flex;
  align-items: center;
  column-gap: 1rem;

  a {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    padding: 0.75rem;
    border-radius: 6px;
    transition: box-shadow 300ms ease;

    &:hover {
      box-shadow: 0 2px 6px rgba(black, 35%);
    }
  }
}
</style>