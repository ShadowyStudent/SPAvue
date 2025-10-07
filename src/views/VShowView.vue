<template>
  <section>
    <h2>v-show</h2>
    <div>
      <button @click="visible = !visible">{{ visible ? 'Ocultar' : 'Mostrar' }}</button>
    </div>
    <div>
      <p v-show="visible">Texto controlado por v-show</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      visible: true
    }
  }
}
</script>
