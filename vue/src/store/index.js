import { createStore } from 'vuex'

export default createStore({
  state: {
    pendingRequest: false,
    api: './api/',// The api endpoint for development
    //api: './api/',// The api endpoint for deployment
    animals: [
      {Animal_ID: -1, Name: 'None', Species: 'None', Breed: 'None', Age: -1, Adopted: -1}// If this is displayed something is wrong.
    ],
    species: {
      "Dog": [
        "Golden Retriever",
        "German Shepherd",
        "Border Collie",
        "Poodle",
        "Labrador Retriver",
        "Great Dane",
        "Dachshund",
        "Beagle"
      ],
      "Cat": [
        "Tabby",
        "Siamese",
        "Persian",
        "American Shorthair",
        "American Longhair",
        "Maine Coon",
        "Sphynx"
      ],
      "Hamster": [
        "Syrian",
        "Chinese",
        "Roborovski Dwarf",
        "Campbell's Dwarf",
        "Winter White Dwarf"
      ],
      "Rat": [
        "Standard",
        "Rex",
        "Dumbo",
        "Sphynx"
      ],
      "Rabbit": [
        "Holland Lop",
        "French Lop",
        "Mini Lop",
        "Netherland Dwarf",
        "Flemish Giant",
        "Mini Rex"
      ],
      "Snake": [
        "Corn Snake",
        "Ball Python",
        "Rat Snake",
        "Western Hognose",
        "Milk Snake"
      ]
    }
  },
  getters: {
    getBreedList(state) {
      let breeds = [];
      
      for (let species in state.species) {
        breeds.push(...state.species[species]);
      }

      breeds.sort();
      return breeds;
    },
    getSpeciesList(state) {
      let species = [];
      
      for (let speciesName in state.species) {
        species.push(speciesName);
      }

      species.sort();
      return species;
    },
    getBreedBySpeices(state) {
      return state.species;
    },
    sortedAnimals(state) {
      let sorted = [...state.animals];
      sorted.sort((a, b) => a.Name > b.Name ? 1 : -1);
      return sorted;
    }
  },
  mutations: {
    setAnimals(state, payload) {
      state.animals.push(...payload);
    },
    clearAnimals(state) {
      state.animals = [];
    },
    deleteAnimal(state, payload) {
      state.animals = state.animals.filter(animal => animal.Animal_ID != payload);
    }
  },
  actions: {
    async deleteAnimal(context, _payload) {
      if (context.state.pendingRequest) {
        console.warn('Pending request in progress, skipping delete.');
        return false;
      }

      context.state.pendingRequest = true;
      let ret = false;

      let payload = new FormData();
      payload.append('Animal_ID', _payload);

      let res = await fetch(context.state.api + 'delete_animal.php', {
        method: 'POST',
        body: payload
      }).then(response => response.json())
        .catch(error => ['error', error]);

      // delete_animal.php returns a json object with message set on success and error on failure.
      if (res.message) {
        context.commit('deleteAnimal', _payload);
        ret = true;
      } else {
        console.error('Error deleting animal:', res.error);
      }

      context.state.pendingRequest = false;
      return ret;
    },
    async addAnimal(context, payload) {
      if (context.state.pendingRequest) {
        console.warn('Pending request in progress, skipping add.');
        return false;
      }

      let ret = false;
      context.state.pendingRequest = true;

      let res = await fetch(context.state.api + 'add_animal.php', {
        method: 'POST',
        body: payload.http
      }).then(response => response.json())
        .catch(error => ['error', error]);

      if (res.message) {
        payload.animal.Animal_ID = res.Animal_ID; // set the generated ID from the response
        context.commit('setAnimals', [payload.animal]);
        ret = true;
      } else {
        console.error('Error adding animal:', res.error);
      }

      context.state.pendingRequest = false;
      return ret;
    },
    async getAnimals(context) {
      if (context.state.pendingRequest) {
        console.warn('Pending request in progress, skipping fetch.');
        return false;
      }

      context.state.pendingRequest = true;

      // fetching code goes here.
      let res = await fetch(context.state.api + 'get_animals.php', )
        .then(response => response.json())
        .catch(error => {
          console.error('Error fetching animals:', error);
          return false;
        });

      if (Array.isArray(res)) {
        context.commit('clearAnimals');
        context.commit('setAnimals', res);
      }

      context.state.pendingRequest = false;
      return true;
    },
    async updateAnimal(context, payload) {
      if (context.state.pendingRequest) {
        console.warn('Pending request in progress, skipping update.');
        return false;
      }

      context.state.pendingRequest = true;
      let ret = false;
      let formData = new FormData();

      formData.append('Animal_ID', payload.Animal_ID);

      let res = await fetch(context.state.api + 'delete_animal.php', {
        method: 'POST',
        body: formData
      }).then(response => response.json()).catch(error => ['error', error]);

      if (res.error) {
        console.error('Error updating animal:', res.error);
        context.state.pendingRequest = false;
        return false;
      }

      formData.append('Name', payload.Name);
      formData.append('Species', payload.Species);
      formData.append('Breed', payload.Breed);
      formData.append('Age', payload.Age);
      formData.append('Adopted', payload.Adopted);

      res = await fetch(context.state.api + 'add_animal.php', {
        method: 'POST',
        body: formData
      }).then(response => response.json()).catch(error => ['error', error]);

      if (res.message) {
        context.commit('deleteAnimal', payload.Animal_ID);
        context.commit('setAnimals', [payload]);
        ret = true;
      }

      context.state.pendingRequest = false;
      return ret;
    }
  },
  modules: {
  }
})
