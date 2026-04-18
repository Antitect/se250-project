<template>
  <form :class="{layout1: image}">
    <figure v-if="image">
      <label for="photo">
        <div id="imagePreview">
          <span v-if="photo">Change Photo</span>
          <span v-else>Upload Photo</span>
        </div>
        <input type="file" id="photo" @change="handleFileUpload" style="visibility:hidden" accept="image/jpeg"/>
      </label><br/>
      <p class="error" v-if="errors.Photo">{{ errors.Photo }}</p>
    </figure>

    <div class="layout2">
      <p v-if="showSuccessMessage" class="success">Animal added successfully!</p>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="Name" required/>
      <p class="error" v-if="errors.Name">{{ errors.Name }}</p>

      <label for="species">Species</label>
      <select id="species" v-model="Species" required>
        <option value="" disabled selected>Select a Species</option>
        <option v-for="species in speciesList" :key="species" :value="species">
          {{ species }}
        </option>
      </select>
      <p class="error" v-if="errors.Species">{{ errors.Species }}</p>

      <label for="breed">Breed</label>
      <select id="breed" v-model="Breed" required :disabled="Species === ''">
        <option value="" disabled selected>Select a Breed</option>
        <option v-for="breed in breedList" :key="breed" :value="breed">
          {{ breed }}
        </option>
      </select>
      <p class="error" v-if="errors.Breed">{{ errors.Breed }}</p>


      <label for="age">Age</label>
      <input type="number" id="age" v-model.number="Age" required/>
      <p class="error" v-if="errors.Age">{{ errors.Age }}</p>


      <Button type="submit" @click.prevent="addAnimal">Submit</Button>
    </div>
  </form>
</template>

<script>
import Button from '@/components/ButtonElement.vue';

export default {
  name: 'IntakeForm',
  components: {
    Button
  },
  data() {
    return {
      Name: '',
      Species: '',
      Breed: '',
      Age: null,
      photo: null,
      errors: {
        Name: '',
        Species: '',
        Breed: '',
        Age: '',
        Photo: ''
      },
      showSuccessMessage: false
    }
  },
  props: {
    image: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    breedList() {
      let breeds = this.$store.getters.getBreedBySpeices[this.Species] ?? [];

      breeds.sort();
      return breeds;
    },
    speciesList() {
      return this.$store.getters.getSpeciesList;
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.photo = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          document.getElementById('imagePreview').style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
      } else {
        this.photo = null;
        document.getElementById('imagePreview').style.backgroundImage = 'none';
      }
    },

    async addAnimal() {
      if (this.Name.trim() === '') {
        this.errors.Name = 'Name is required.';
      } else {
        this.errors.Name = '';
      }

      if (this.Species.trim() === '') {
        this.errors.Species = 'Species is required.';
      } else {
        this.errors.Species = '';
      }

      if (this.Breed.trim() === '') {
        this.errors.Breed = 'Breed is required.';
      } else {
        this.errors.Breed = '';
      }

      if (this.Age === null || this.Age < 0 || this.Age > 30) {
        this.errors.Age = 'Age must be between 0 and 30.';
      } else {
        this.errors.Age = '';
      }

      if (this.image && this.photo !== null) {
        if (!this.photo.type.startsWith('image/jpeg')) {
          this.errors.Photo = 'File must be a JPEG image.';
        } else {
          this.errors.Photo = '';
        }
      }

      if (this.errors.Name || this.errors.Species || this.errors.Breed || this.errors.Age || this.errors.Photo) {
        return;
      }

      let httpPayload = new FormData();
      httpPayload.append('Name', this.Name);
      httpPayload.append('Species', this.Species);
      httpPayload.append('Breed', this.Breed);
      httpPayload.append('Age', this.Age);
      if (this.image && this.photo !== null) {
        httpPayload.append('Photo', this.photo);
      }

      let res = await this.$store.dispatch('addAnimal', {
        animal: {
          Name: this.Name,
          Species: this.Species,
          Breed: this.Breed,
          Age: this.Age,
          Adopted: 0
        },
        http: httpPayload
      });

      if (res) {
        this.showSuccessMessage = true;
        this.Name = '';
        this.Species = '';
        this.Breed = '';
        this.Age = null;
        this.photo = null;
        document.getElementById('imagePreview').style.backgroundImage = 'none';
      }
    }
  }
}
</script>

<style scoped>
button {
  grid-column: span 2;
}

.layout1 {
  display: flex;
  flex-wrap: wrap;
  gap: 1ch;
  padding: 1ch;
  align-items: center;
}

.layout1 > * {
  flex-grow: 1;
  flex-basis: 200px;
  margin: auto;
}

.layout2 {
  display: grid;
  gap: 1ch;
  grid-template-columns: max-content 1fr;
  align-items: baseline;
}

.layout2 > label {
  text-align: right;
}

figure label * {
  cursor: pointer;
}

p {
  font-size: 0.9rem;
  margin-top: -0.5ch;
  margin-bottom: 0.5ch;
  grid-column: span 2;
  border-radius: 0.5rem;
  color: black;
}

.success {
  background-color: lightgreen;
  border: 0.01rem solid darkgreen;
}

.error {
  background-color: yellow;
  border: 0.01rem solid var(--red);
}

#imagePreview {
  width: 250px;
  height: 250px;
  background-color: var(--gray);
  background-size: cover;
  background-position: center;
  margin: auto;
}

#imagePreview > span {
  display: block;
  color: var(--blue);
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.5ch;
  font-size: 1.2rem;
  text-decoration: underline;
}
</style>
