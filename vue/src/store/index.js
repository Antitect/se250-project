import { createStore } from 'vuex'

export default createStore({
  state: {
    animals: [
      {Animal_ID: -1, Name: 'None', Species: 'None', Breed: 'None', Age: -1, Adopted: -1}
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
      state.animals = state.animals.filter(animal => animal.Animal_ID !== payload);
    }
  },
  actions: {
    async deleteAnimal(context, payload) {
      // api call here
      let res = await true;// placeholder for successful response

      if (res) {
        context.commit('deleteAnimal', payload);
      }

      return res;
    },
    async addAnimal(context, payload) {
      // api call here
      let res = await true;// placeholder for successful response

      payload.Animal_ID = Math.random(); // placeholder for generated ID

      if (res) {
        context.commit('setAnimals', [payload.animal]);
      }

      return res;
    },
    getAnimals(context) {
      // fetching code goes here.

      // placeholder data
      let data = [
        {Animal_ID: 1, Name: 'Fluffy', Species: 'Cat', Breed: 'Persian', Age: 3, Adopted: 1},
        {Animal_ID: 2, Name: 'Max', Species: 'Dog', Breed: 'Labrador', Age: 5, Adopted: 0},
        {Animal_ID: 3, Name: 'Whiskers', Species: 'Cat', Breed: 'Siamese', Age: 2, Adopted: 1},
        {Animal_ID: 4, Name: 'Buddy', Species: 'Dog', Breed: 'Golden Retriever', Age: 4, Adopted: 1},
        {Animal_ID: 5, Name: 'Mittens', Species: 'Cat', Breed: 'Tabby', Age: 3, Adopted: 0},
        {Animal_ID: 6, Name: 'Charlie', Species: 'Rabbit', Breed: 'Holland Lop', Age: 2, Adopted: 1},
        {Animal_ID: 7, Name: 'Rocky', Species: 'Dog', Breed: 'German Shepherd', Age: 6, Adopted: 0},
        {Animal_ID: 8, Name: 'Luna', Species: 'Cat', Breed: 'Bengal', Age: 4, Adopted: 1},
        {Animal_ID: 9, Name: 'Daisy', Species: 'Rabbit', Breed: 'Mini Rex', Age: 1, Adopted: 0},
        {Animal_ID: 10, Name: 'Cooper', Species: 'Dog', Breed: 'Beagle', Age: 3, Adopted: 1},
        {Animal_ID: 11, Name: 'Shadow', Species: 'Cat', Breed: 'Black Domestic', Age: 5, Adopted: 0},
        {Animal_ID: 12, Name: 'Buster', Species: 'Dog', Breed: 'Bulldog', Age: 5, Adopted: 1},
        {Animal_ID: 13, Name: 'Patches', Species: 'Rabbit', Breed: 'Angora', Age: 3, Adopted: 1},
        {Animal_ID: 14, Name: 'Bailey', Species: 'Dog', Breed: 'Dachshund', Age: 4, Adopted: 0},
        {Animal_ID: 15, Name: 'Smokey', Species: 'Cat', Breed: 'Russian Blue', Age: 3, Adopted: 1},
        {Animal_ID: 16, Name: 'Hoppy', Species: 'Rabbit', Breed: 'Lionhead', Age: 2, Adopted: 0},
        {Animal_ID: 17, Name: 'Molly', Species: 'Dog', Breed: 'Poodle', Age: 6, Adopted: 1},
        {Animal_ID: 18, Name: 'Ginger', Species: 'Cat', Breed: 'Orange Tabby', Age: 2, Adopted: 0},
        {Animal_ID: 19, Name: 'Oreo', Species: 'Rabbit', Breed: 'Lop-eared', Age: 4, Adopted: 1},
        {Animal_ID: 20, Name: 'Scout', Species: 'Dog', Breed: 'Corgi', Age: 5, Adopted: 0},
        {Animal_ID: 21, Name: 'Tiger', Species: 'Cat', Breed: 'Maine Coon', Age: 4, Adopted: 1},
        {Animal_ID: 22, Name: 'Bella', Species: 'Dog', Breed: 'German Shepherd', Age: 3, Adopted: 1},
        {Animal_ID: 23, Name: 'Lucy', Species: 'Cat', Breed: 'Tabby', Age: 1, Adopted: 0},
        {Animal_ID: 24, Name: 'Sadie', Species: 'Dog', Breed: 'Golden Retriever', Age: 2, Adopted: 1},
        {Animal_ID: 25, Name: 'Chloe', Species: 'Cat', Breed: 'Persian', Age: 5, Adopted: 0},
        {Animal_ID: 26, Name: 'Duke', Species: 'Dog', Breed: 'Labrador', Age: 4, Adopted: 1},
        {Animal_ID: 27, Name: 'Simba', Species: 'Cat', Breed: 'Siamese', Age: 3, Adopted: 1},
        {Animal_ID: 28, Name: 'Max', Species: 'Dog', Breed: 'Beagle', Age: 2, Adopted: 0},
        {Animal_ID: 29, Name: 'Milo', Species: 'Cat', Breed: 'Bengal', Age: 2, Adopted: 1},
        {Animal_ID: 30, Name: 'Charlie', Species: 'Dog', Breed: 'Poodle', Age: 5, Adopted: 0},
        {Animal_ID: 31, Name: 'Nala', Species: 'Cat', Breed: 'Black Domestic', Age: 4, Adopted: 1},
        {Animal_ID: 32, Name: 'Toby', Species: 'Dog', Breed: 'Corgi', Age: 3, Adopted: 1},
        {Animal_ID: 33, Name: 'Felix', Species: 'Cat', Breed: 'Orange Tabby', Age: 1, Adopted: 0},
        {Animal_ID: 34, Name: 'Roxy', Species: 'Dog', Breed: 'Bulldog', Age: 4, Adopted: 1},
        {Animal_ID: 35, Name: 'Oscar', Species: 'Cat', Breed: 'Russian Blue', Age: 5, Adopted: 0},
        {Animal_ID: 36, Name: 'Zeus', Species: 'Dog', Breed: 'German Shepherd', Age: 6, Adopted: 1},
        {Animal_ID: 37, Name: 'Lily', Species: 'Cat', Breed: 'Maine Coon', Age: 3, Adopted: 1},
        {Animal_ID: 38, Name: 'Bear', Species: 'Dog', Breed: 'Golden Retriever', Age: 5, Adopted: 0},
        {Animal_ID: 39, Name: 'Jasper', Species: 'Cat', Breed: 'Tabby', Age: 2, Adopted: 1},
        {Animal_ID: 40, Name: 'Daisy', Species: 'Dog', Breed: 'Dachshund', Age: 2, Adopted: 1},
        {Animal_ID: 41, Name: 'Loki', Species: 'Cat', Breed: 'Siamese', Age: 4, Adopted: 0},
        {Animal_ID: 42, Name: 'Rex', Species: 'Dog', Breed: 'Labrador', Age: 3, Adopted: 1},
        {Animal_ID: 43, Name: 'Ivy', Species: 'Cat', Breed: 'Persian', Age: 6, Adopted: 1},
        {Animal_ID: 44, Name: 'Buddy', Species: 'Dog', Breed: 'Beagle', Age: 4, Adopted: 0},
        {Animal_ID: 45, Name: 'Leo', Species: 'Cat', Breed: 'Bengal', Age: 3, Adopted: 1},
        {Animal_ID: 46, Name: 'Spike', Species: 'Dog', Breed: 'Bulldog', Age: 3, Adopted: 1},
        {Animal_ID: 47, Name: 'Callie', Species: 'Cat', Breed: 'Black Domestic', Age: 2, Adopted: 0},
        {Animal_ID: 48, Name: 'Rusty', Species: 'Dog', Breed: 'Corgi', Age: 4, Adopted: 1},
        {Animal_ID: 49, Name: 'Olive', Species: 'Cat', Breed: 'Orange Tabby', Age: 3, Adopted: 1},
        {Animal_ID: 50, Name: 'Alfie', Species: 'Dog', Breed: 'Poodle', Age: 2, Adopted: 0},
        {Animal_ID: 51, Name: 'Zoe', Species: 'Cat', Breed: 'Russian Blue', Age: 1, Adopted: 1},
        {Animal_ID: 52, Name: 'Winston', Species: 'Dog', Breed: 'German Shepherd', Age: 5, Adopted: 1},
        {Animal_ID: 53, Name: 'Sofia', Species: 'Cat', Breed: 'Maine Coon', Age: 4, Adopted: 0},
        {Animal_ID: 54, Name: 'Henry', Species: 'Dog', Breed: 'Golden Retriever', Age: 1, Adopted: 1},
        {Animal_ID: 55, Name: 'Aurora', Species: 'Cat', Breed: 'Tabby', Age: 5, Adopted: 1},
        {Animal_ID: 56, Name: 'Copper', Species: 'Dog', Breed: 'Dachshund', Age: 3, Adopted: 0},
        {Animal_ID: 57, Name: 'Maxi', Species: 'Cat', Breed: 'Siamese', Age: 2, Adopted: 1},
        {Animal_ID: 58, Name: 'Teddy', Species: 'Dog', Breed: 'Labrador', Age: 6, Adopted: 1},
        {Animal_ID: 59, Name: 'Rosie', Species: 'Cat', Breed: 'Persian', Age: 4, Adopted: 0},
        {Animal_ID: 60, Name: 'Bruno', Species: 'Dog', Breed: 'Beagle', Age: 1, Adopted: 1},
        {Animal_ID: 61, Name: 'Stella', Species: 'Cat', Breed: 'Bengal', Age: 1, Adopted: 1},
        {Animal_ID: 62, Name: 'Beau', Species: 'Dog', Breed: 'Bulldog', Age: 2, Adopted: 0},
        {Animal_ID: 63, Name: 'Penny', Species: 'Cat', Breed: 'Black Domestic', Age: 6, Adopted: 1},
        {Animal_ID: 64, Name: 'Diesel', Species: 'Dog', Breed: 'Corgi', Age: 2, Adopted: 1},
        {Animal_ID: 65, Name: 'Sunny', Species: 'Cat', Breed: 'Orange Tabby', Age: 4, Adopted: 0},
        {Animal_ID: 66, Name: 'Ranger', Species: 'Dog', Breed: 'Poodle', Age: 3, Adopted: 1},
        {Animal_ID: 67, Name: 'Comet', Species: 'Cat', Breed: 'Russian Blue', Age: 3, Adopted: 1},
        {Animal_ID: 68, Name: 'Shadow', Species: 'Dog', Breed: 'German Shepherd', Age: 4, Adopted: 0},
        {Animal_ID: 69, Name: 'Hazel', Species: 'Cat', Breed: 'Maine Coon', Age: 2, Adopted: 1},
        {Animal_ID: 70, Name: 'Gunner', Species: 'Dog', Breed: 'Golden Retriever', Age: 4, Adopted: 1},
        {Animal_ID: 71, Name: 'Molly', Species: 'Cat', Breed: 'Tabby', Age: 3, Adopted: 0},
        {Animal_ID: 72, Name: 'Jackson', Species: 'Dog', Breed: 'Dachshund', Age: 5, Adopted: 1},
        {Animal_ID: 73, Name: 'Mitsy', Species: 'Cat', Breed: 'Siamese', Age: 1, Adopted: 1},
        {Animal_ID: 74, Name: 'Jax', Species: 'Dog', Breed: 'Labrador', Age: 2, Adopted: 0},
        {Animal_ID: 75, Name: 'Nova', Species: 'Cat', Breed: 'Persian', Age: 3, Adopted: 1},
        {Animal_ID: 76, Name: 'Kobe', Species: 'Dog', Breed: 'Beagle', Age: 6, Adopted: 1},
        {Animal_ID: 77, Name: 'Sienna', Species: 'Cat', Breed: 'Bengal', Age: 4, Adopted: 0},
        {Animal_ID: 78, Name: 'Liam', Species: 'Dog', Breed: 'Bulldog', Age: 1, Adopted: 1},
        {Animal_ID: 79, Name: 'Ruby', Species: 'Cat', Breed: 'Black Domestic', Age: 5, Adopted: 1},
        {Animal_ID: 80, Name: 'Finn', Species: 'Dog', Breed: 'Corgi', Age: 3, Adopted: 0},
        {Animal_ID: 81, Name: 'Amber', Species: 'Cat', Breed: 'Orange Tabby', Age: 2, Adopted: 1},
        {Animal_ID: 82, Name: 'Lincoln', Species: 'Dog', Breed: 'Poodle', Age: 4, Adopted: 1},
        {Animal_ID: 83, Name: 'Pearl', Species: 'Cat', Breed: 'Russian Blue', Age: 2, Adopted: 0},
        {Animal_ID: 84, Name: 'Wesley', Species: 'Dog', Breed: 'German Shepherd', Age: 2, Adopted: 1},
        {Animal_ID: 85, Name: 'Ivy', Species: 'Cat', Breed: 'Maine Coon', Age: 5, Adopted: 1},
        {Animal_ID: 86, Name: 'Maverick', Species: 'Dog', Breed: 'Golden Retriever', Age: 3, Adopted: 0},
        {Animal_ID: 87, Name: 'Sage', Species: 'Cat', Breed: 'Tabby', Age: 4, Adopted: 1},
        {Animal_ID: 88, Name: 'Marley', Species: 'Dog', Breed: 'Dachshund', Age: 2, Adopted: 1},
        {Animal_ID: 89, Name: 'Smokey', Species: 'Cat', Breed: 'Siamese', Age: 6, Adopted: 0},
        {Animal_ID: 90, Name: 'Leo', Species: 'Dog', Breed: 'Labrador', Age: 5, Adopted: 1},
        {Animal_ID: 91, Name: 'Bailey', Species: 'Cat', Breed: 'Persian', Age: 1, Adopted: 1},
        {Animal_ID: 92, Name: 'Oakley', Species: 'Dog', Breed: 'Beagle', Age: 3, Adopted: 0},
        {Animal_ID: 93, Name: 'Luna', Species: 'Cat', Breed: 'Bengal', Age: 2, Adopted: 1},
        {Animal_ID: 94, Name: 'Dexter', Species: 'Dog', Breed: 'Bulldog', Age: 4, Adopted: 1},
        {Animal_ID: 95, Name: 'Willow', Species: 'Cat', Breed: 'Black Domestic', Age: 3, Adopted: 0},
        {Animal_ID: 96, Name: 'Cody', Species: 'Dog', Breed: 'Corgi', Age: 1, Adopted: 1},
        {Animal_ID: 97, Name: 'Gracie', Species: 'Cat', Breed: 'Orange Tabby', Age: 5, Adopted: 1},
        {Animal_ID: 98, Name: 'Orion', Species: 'Dog', Breed: 'Poodle', Age: 2, Adopted: 0},
        {Animal_ID: 99, Name: 'Pepper', Species: 'Cat', Breed: 'Russian Blue', Age: 4, Adopted: 1},
        {Animal_ID: 100, Name: 'Atticus', Species: 'Dog', Breed: 'German Shepherd', Age: 3, Adopted: 1},
        {Animal_ID: 101, Name: 'Poppy', Species: 'Cat', Breed: 'Maine Coon', Age: 2, Adopted: 0},
      ]
      context.commit('clearAnimals');
      context.commit('setAnimals', data);
    }
  },
  modules: {
  }
})
