<template>
  <div class="home">
    <CollapsableBox class="filtersection" title="Filters">
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

        <div>
          <label for="sortby">Sort By </label>
          <select id="sortby" v-model="sortby">
            <option value="name">Name</option>
            <option value="age">Age</option>
            <option value="species">Species</option>
            <option value="breed">Breed</option>
          </select>
        </div>

        <div>
          <label for="sortorder">Sort Order </label>
          <select id="sortorder" v-model="sortorder">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
    </CollapsableBox>

    <section>
      <AnimalEntry v-for="(animal, index) in animals" :key="animal.Animal_ID" :animal="animal" :even="index & 1"/>
      <div v-if="animals.length == 0">No Animals Found</div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import AnimalEntry from '@/components/AnimalEntry2.vue';
import CollapsableBox from '@/components/CollapsableBox.vue';

export default {
  name: 'HomeView',
  components: {
    AnimalEntry,
    CollapsableBox
  },
  data() {
    return {
      adoptedFilter: true,
      speciesFilter: '',
      breedFilter: '',
      nameFilter: '',
      sortby: 'name',
      sortorder: 'asc',
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
      let filteredList = this.$store.getters.sortedAnimals.filter(animal => {
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

      filteredList.sort((a, b) => {
        let aval, bval;
        switch (this.sortby) {
          case 'name':
            aval = a.Name.trim().toLowerCase();
            bval = b.Name.trim().toLowerCase();
            break;
          case 'age':
            aval = a.Age;
            bval = b.Age;
            break;
          case 'species':
            aval = a.Species.trim().toLowerCase();
            bval = b.Species.trim().toLowerCase();
            break;
          case 'breed':
            aval = a.Breed.trim().toLowerCase();
            bval = b.Breed.trim().toLowerCase();
            break;
        }

        if (aval < bval) {
          return this.sortorder === 'asc' ? -1 : 1;
        } else if (aval > bval) {
          return this.sortorder === 'asc' ? 1 : -1;
        } else {
          return 0;
        }
      });

      return filteredList;
    },
    breedList() {
      if (this.speciesFilter.trim().length === 0) {
        return this.$store.getters.getBreedList;
      } else {
        return this.$store.getters.getBreedBySpeices[this.speciesFilter.toLowerCase()] ?? [];
      }
    },
    speciesList() {
      return this.$store.getters.getSpeciesList;
    }
  },
  watch: {
    speciesFilter() {
      this.breedFilter = '';
    }
  }
}
</script>

<style scoped>
.home > * {
  margin: auto;
  margin-bottom: 1ch;
}

.filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2ch;
  padding: 1ch 1ch 0 1ch;
}

.filters > div {
  display: grid;
  gap: 1ch;
  grid-template-columns: max-content 1fr;
}

.filters > div > label {
  text-align: right;
}

.filtersection {
  position: sticky;
  top: 0px;
  background-color: var(--white);
}

@media screen and (max-width: 1000px) {
  input[type="text"], input[type="number"], form > input[type="text"], form > input[type="number"] {
    width: calc(100% - 2ch);
    max-width: none;
  }

  .filtersection {
    position: static;
  }

  .filters {
    display: block;
    padding: 0 1ch;
  }

  .filters > * {
    display: block;
    width: 100%;
    margin-bottom: 1ch;
  }
}
</style>
