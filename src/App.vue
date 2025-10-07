<template>
  <div class="app-container">
    <header class="header">
      <div class="brand">
        <div class="logo">PS</div>
        <div>
          <h1>PSAvue: Estructuras de control en Vue 3</h1>
          <div class="meta">Ejemplos de v-if, v-show, v-for y más</div>
        </div>
      </div>

      <nav>
        <router-link to="/">Inicio</router-link> |
        <router-link to="/v-if-else">v-if / v-else-if / v-else</router-link> |
        <router-link to="/v-show">v-show</router-link> |
        <router-link to="/v-for">v-for</router-link> |
        <router-link to="/v-bind-key">v-bind:key</router-link> |
        <router-link to="/v-once">v-once</router-link>
      </nav>
    </header>

    <main class="grid">
      <section class="card">
        <router-view />
      </section>
    </main>

    <footer class="footer center">Hecho con Vue 3 + Vite</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>