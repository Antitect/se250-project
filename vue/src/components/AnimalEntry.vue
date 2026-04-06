<template>
  <div class="animal-entry" :even="even">
    <h3>{{ animal.Name }}</h3>
    <p>Age: {{ animal.Age }}</p>
    <p :class="[animal.Adopted ? 'adopted' : 'available']">Status: {{ animal.Adopted ? 'Adopted' : 'Available' }}</p>
    <button @click="deleteAnimal">Delete</button>
    <p>Species: {{ animal.Species }}</p>
    <p>Breed: {{ animal.Breed }}</p>
    <p></p>
    <button v-if="animal.Adopted" @click="toggleAdopted(animal)">Returned</button>
    <button v-else @click="toggleAdopted(animal)">Adopted</button>
  </div>
</template>

<script>
export default {
  props: ['animal', 'even'],
  methods: {
    deleteAnimal() {
      this.$store.dispatch('deleteAnimal', this.animal.Animal_ID);
    },
    toggleAdopted(animal) {
      let updatedAnimal = { ...animal, Adopted: !animal.Adopted };
      this.$store.dispatch('deleteAnimal', animal.Animal_ID);
      this.$store.dispatch('addAnimal', updatedAnimal);
    }
  }
}
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr min-content;
  gap: 1ch;
  padding: 0.5ch;
  border: 1px solid var(--gray);

  align-items:baseline;
}

div[even='1'] {
  background-color: var(--gray);
}

div > * {
  margin: 0px;
}

.adopted {
  color: var(--red);
}
.available {
  color: green;
}

</style>