<script setup lang="ts">
</script>

<template>
  <router-view></router-view>
</template>

<styles lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

@for $h from 1 through 6 {
  h#{$h} {
    font-family: 'Noto Sans', sans-serif;
  }
}

.button-layout {
  display: grid;
  grid-auto-flow: column;

  > * {
    width: 18rem;
    margin: 0 auto;
  }
}
</styles>