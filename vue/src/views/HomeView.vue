<template>
  <div class="home">
    <section>
      <h2>Intake new Animal</h2>
      <form @submit.prevent="addAnimal">
        <input type="text" placeholder="Name" v-model="newAnimal.Name" required/>
        <input type="text" placeholder="Species" v-model="newAnimal.Species" required/>
        <input type="text" placeholder="Breed" v-model="newAnimal.Breed" required/>
        <input type="number" placeholder="Age" v-model.number="newAnimal.Age" required/>
        <button type="submit">Add Animal</button>
      </form>
      <hr/>
    </section>

    <section class="filtersection">
      <h2>Filters</h2>
      <div class="filters">
        <input type="text" placeholder="Name" v-model="nameFilter"/>

        <select v-model="speciesFilter">
          <option value="">All Species</option>
          <option v-for="species in speciesList" :key="species" :value="species">
            {{ species }}
          </option>
        </select>

        <select v-model="breedFilter">
          <option value="">All Breeds</option>
          <option v-for="breed in breedList" :key="breed" :value="breed">
            {{ breed }}
          </option>
        </select>

        <div>
          <label for="adoptedFilter">Show Adopted </label>
          <input type="checkbox" id="adoptedFilter" v-model="adoptedFilter"/>
        </div>
      </div>
    </section>

    <section>
      <AnimalEntry v-for="(animal, index) in animals" :key="animal.Animal_ID" :animal="animal" :even="index & 1"/>
      <div v-if="animals.length == 0">No Animals Found</div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import AnimalEntry from '@/components/AnimalEntry.vue';

export default {
  name: 'HomeView',
  components: {
    AnimalEntry
  },
  data() {
    return {
      adoptedFilter: true,
      speciesFilter: '',
      breedFilter: '',
      nameFilter: '',
      newAnimal: {
        Name: '',
        Species: '',
        Breed: '',
        Age: null,
        Adopted: false
      }
    }
  },
  computed: {
    animals() {
      return this.$store.getters.sortedAnimals.filter(animal => {
        let matched = true;
        if (this.nameFilter.trim().length > 0) {
          if (!animal.Name.trim().toLowerCase().startsWith(this.nameFilter.trim().toLowerCase())) {
            matched = false;
          }
        }

        if (this.speciesFilter.trim().length > 0) {
          if (animal.Species.trim().toLowerCase() !== this.speciesFilter.trim().toLowerCase()) {
            matched = false;
          }
        }

        if (this.breedFilter.trim().length > 0) {
          if (animal.Breed.trim().toLowerCase() !== this.breedFilter.trim().toLowerCase()) {
            matched = false;
          }
        }

        if (!this.adoptedFilter && animal.Adopted) {
          matched = false;
        }
        return matched;
      });
    },
    breedList() {
      return this.$store.getters.getBreedList;
    },
    speciesList() {
      return this.$store.getters.getSpeciesList;
    }
  },
  methods: {
    addAnimal() {
      if (this.newAnimal.Name.trim().length === 0 || this.newAnimal.Species.trim().length === 0 || this.newAnimal.Breed.trim().length === 0 || this.newAnimal.Age === null || this.newAnimal.Age < 0) {
        alert('Please fill in all fields');
        return;
      }
      this.$store.dispatch('addAnimal', this.newAnimal);
      this.newAnimal = { Name: '', Species: '', Breed: '', Age: null, Adopted: false };
    }
  }
}
</script>

<style scoped>
section {
  margin: auto;
}

.filters {
  display: flex;
  gap: 2ch;
  margin: 20px auto;
}

.filters > * {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 10px;
}

.filtersection {
  position: sticky;
  top: 0px;
  background-color: var(--white);

  border-bottom: 1px solid var(--gray);
}

form {
  display: grid;
  gap: 1ch;
  grid-template-columns: 1fr 1fr 1fr 1fr max-content;
}
</style>