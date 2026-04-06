<template>
  <header>
    <h1>Pet Shelter</h1>
  </header>
  <nav style="display:none;">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
