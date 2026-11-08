import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import DeckView from './views/DeckView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/d/:slug', name: 'deck', component: DeckView, props: true },
  ],
})

export default router
