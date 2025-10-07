<template>
  <section>
    <h2>v-bind:key</h2>
    <div>
      <button @click="shuffle">Barajar</button>
    </div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 'a1', name: 'Elemento A' },
        { id: 'b2', name: 'Elemento B' },
        { id: 'c3', name: 'Elemento C' }
      ]
    }
  },
  methods: {
    shuffle() {
      this.items = [...this.items].sort(() => Math.random() - 0.5)
    }
  }
}
</script>
