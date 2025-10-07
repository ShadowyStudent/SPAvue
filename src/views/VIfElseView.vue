<template>
  <section>
    <h2>v-if / v-else-if / v-else</h2>
    <div>
      <label for="estado">Estado</label>
      <select id="estado" v-model="estado">
        <option value="feliz">feliz</option>
        <option value="triste">triste</option>
        <option value="otro">otro</option>
      </select>
    </div>
    <div>
      <div v-if="estado === 'feliz'">Estás feliz</div>
      <div v-else-if="estado === 'triste'">Estás triste</div>
      <div v-else>Estado desconocido</div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      estado: 'feliz'
    }
  }
}
</script>