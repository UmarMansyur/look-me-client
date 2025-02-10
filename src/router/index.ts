import { createMemoryHistory, createRouter } from 'vue-router'


const routes = [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/dashboard/index.vue')
    }
]



const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;