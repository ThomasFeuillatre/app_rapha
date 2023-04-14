import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/origines',
      name: 'origines',
      component: () => import('../views/Origines.vue')
    },
    {
      path: '/les_consequences',
      name: 'les_consequences',
      component: () => import('../views/LesConsequences.vue')
    },
    {
      path: '/fin_de_la_prohibition',
      name: 'fin_de_la_prohibition',
      component: () => import('../views/FindelaProhibition.vue')
    },
    {
      path: '/trois_causes_de_lechec_de_la_prohibition',
      name: 'trois_causes_de_lechec_de_la_prohibition',
      component: () => import('../views/Troiscausedelechecdelaprohibition.vue')
    }
  ]
})

export default router