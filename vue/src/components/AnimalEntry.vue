<template>
  <div class="animal-entry" :even="even">
    <h3>{{ animal.Name }}</h3>
    <p>Age: {{ animal.Age }}</p>
    <p :class="[animal.Adopted ? 'adopted' : 'available']">{{ animal.Adopted ? 'Adopted' : 'Available' }}</p>
    <Button @click="deleteAnimal" class="deletebutton">Delete</Button>
    <p class="mobile-only">{{ animal.Species }}/{{ animal.Breed }}</p>
    <p class="no-mobile">Species: {{ animal.Species }}</p>
    <p class="no-mobile">Breed: {{ animal.Breed }}</p>
    <p class="none"></p>
    <Button v-if="animal.Adopted" class="returnbutton" @click="toggleAdopted(animal)">Return</Button>
    <Button class="adoptbutton" v-else @click="toggleAdopted(animal)">Adopt</Button>
  </div>
  <div class="delete_dialog" v-if="showDeleteDialog">
    <div class="delete_dialog_content">
      <p>Are you sure you want to delete {{ animal.Name }}?</p>
      <Button @click="confirmDelete">Yes</Button>
      <Button @click="cancelDelete">No</Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ButtonElement.vue';

export default {
  components: {
    Button
  },
  data() {
    return {
      showDeleteDialog: false
    }
  },
  props: ['animal', 'even'],
  methods: {
    deleteAnimal() {
      this.showDeleteDialog = true;
    },
    toggleAdopted(animal) {
      let updatedAnimal = { ...animal, Adopted: !animal.Adopted };
      this.$store.dispatch('deleteAnimal', animal.Animal_ID);
      this.$store.dispatch('addAnimal', updatedAnimal);
    },
    confirmDelete() {
      this.$store.dispatch('deleteAnimal', this.animal.Animal_ID);
      this.showDeleteDialog = false;
    },
    cancelDelete() {
      this.showDeleteDialog = false;
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

.deletebutton, .returnbutton, .delete_dialog_content button{
  background-color: var(--red);
  color: var(--white);
}

.adoptbutton, .delete_dialog_content > button:last-child {
  background-color: green;
  color: var(--white);
}

.mobile-only {
  display: none;
}

.delete_dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.delete_dialog_content {
  background-color: var(--white);
  padding: 20px;
  border-radius: 5px;
  display: flex;
  max-width: calc(90vw - 40px);
  width: fit-content;
  flex-wrap: wrap;
  gap: 1ch;
}

.delete_dialog_content p {
  display: block;
  margin: 0;
  width: 100%;
  flex-shrink: 0;
}

.delete_dialog_content button {
  max-width: 50%;
  flex-grow: 1;
}

@media screen and (max-width: 800px) {
  .mobile-only {
    display: block;
  }
  .no-mobile {
    display: none;
  }

  .animal-entry {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: "name name name age age age"
                        "speicies species species status status status"
                        ". delete delete adopt adopt none";
  }

  h3 {
    grid-area: name;
  }

  .animal-entry > p:nth-child(2) {
    grid-area: age;
  }

  .animal-entry > p:nth-child(3) {
    grid-area: status;
  }

  p.mobile-only {
    grid-area: species;
  }

  .deletebutton {
    grid-area: delete;
  }

  .adoptbutton, .returnbutton {
    grid-area: adopt;
  }

  .none {
    grid-area: none;
  }
}
</style>