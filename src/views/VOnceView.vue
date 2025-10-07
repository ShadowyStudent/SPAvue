<template>
  <section>
    <h2>v-once</h2>
    <div>
      <button @click="incrementar">Incrementar</button>
    </div>
    <div>
      <p v-once>{{ tituloOriginal }}</p>
      <p>Contador {{ contador }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
      tituloOriginal: 'Texto renderizado solo una vez'
    }
  },
  methods: {
    incrementar() {
      this.contador++
    }
  }
}
</script>
