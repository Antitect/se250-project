<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  border-radius: 5px;
}

@media screen and (max-width: 1000px) {
  button {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
}
</style>
