<template>
  <header>
    <h1><a href="/">Pet Shelter</a></h1>
  </header>
  <div>
    <router-view/>
  </div>
</template>

<script>
import store from '@/store/index';

export default {
  mounted() {
    store.dispatch('getAnimals');
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

h1 {
  margin-bottom: 0rem;
}

header {
  background-color: var(--black);
  color: white;
  padding: 20px;
}

#app > div {
  background-color: white;
  max-width: 800px;
  width: 80%;
  margin: auto;
}

@media screen and (max-width: 800px) {
  #app > div {
    width: 100%;
  }
}
</style>

<style>
:root {
  --red: #CD1041;
  --white: #FFFFFF;
  --gray: #A6B0B7;
  --black: #000000;

  --gold: #f58220;
  --blue: #718c9a;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html, body, header, nav, section, footer, aside, article, div{
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0px;
}

html {
  background-color: var(--red);
}

@media screen and (max-width: 800px) {
  input, select, option {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
}
</style>
