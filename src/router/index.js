import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VIfElseView from '../views/VIfElseView.vue'
import VShowView from '../views/VShowView.vue'
import VForView from '../views/VForView.vue'
import VBindKeyView from '../views/VBindKeyView.vue'
import VOnceView from '../views/VOnceView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/v-if-else', name: 'v-if-else', component: VIfElseView },
  { path: '/v-show', name: 'v-show', component: VShowView },
  { path: '/v-for', name: 'v-for', component: VForView },
  { path: '/v-bind-key', name: 'v-bind-key', component: VBindKeyView },
  { path: '/v-once', name: 'v-once', component: VOnceView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
