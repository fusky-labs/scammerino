<template>
  <div class="hero-header">
    <span>Welcome to</span>
    <h2>SCAMMERINO</h2>
    <span>What do you wanna do today?</span>
    <img src="../assets/mutahar-funny.jpg" alt="" srcset="">
  </div>
</template>

<style lang="scss" scoped>
.hero-header {
  width: 100%;
  height: 12rem;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: rgba(0,0,0,0.5);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 12rem;
    z-index: -1;
    object-fit: cover;
  }
}
</style>