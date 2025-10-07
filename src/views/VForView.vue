<template>
  <section>
    <h2>v-for</h2>
    <div>
      <input v-model="nueva" placeholder="Agregar item" />
      <button @click="agregar">Agregar</button>
    </div>
    <ul>
      <li v-for="(item, i) in lista" :key="i">
        {{ item }}
        <button @click="eliminar(i)">Eliminar</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lista: ['Manzana', 'Banana', 'Cereza'],
      nueva: ''
    }
  },
  methods: {
    agregar() {
      if (this.nueva.trim()) {
        this.lista.push(this.nueva.trim())
        this.nueva = ''
      }
    },
    eliminar(i) {
      this.lista.splice(i, 1)
    }
  }
}
</script>
