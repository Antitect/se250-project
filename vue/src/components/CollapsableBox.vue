<template>
  <div class="collapsable">
    <div @click="expand" class="title">
      <h2>{{ title }}</h2>
      <span>{{ expanded ? '▲' : '▼' }}</span>
    </div>
    <div v-show="expanded">
      <hr/>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      expanded: false
    }
  },
  methods: {
    expand() {
      this.expanded = !this.expanded;
    }
  }
}
</script>

<style scoped>
.collapsable {
  border: 0.1rem solid var(--gray);
  border-radius: 5px;
}

.collapsable > div:last-child {
  padding: 0.5ch;
}

hr {
  border-color: var(--gray);
  width: 90%;
  border-width: 0.05rem;
  margin: auto;
}

h2 {
  margin: 0;
}

.title {
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 0.5ch;
  cursor: pointer;
}

span {
  font-size: 1.5rem;
}
</style>
