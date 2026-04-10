<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/intake">Intake Form</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--blue);
}

ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style-type: none;
  width: fit-content;
  margin: auto;
  padding: 0;
  display: flex;
  gap: 2ch;
}

li {
  padding: 0px;
}

a, a:visited {
  display: block;
  text-decoration: none;
  color: var(--white);
  padding: 0.1rem;
  font-size: 1.3rem;
}

a:hover, a:active {
  color: var(--gold);
  background-color: var(--white);
}

nav a.router-link-exact-active {
  color: var(--gold);
}
</style>
