import Vue from 'vue'
import VueRouter from 'vue-router'
import CardList from '../views/CardList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/cards'
  },
  {
    path: '/cards',
    component: CardList
  },
  {
    path: '/cards/:id',
    name: 'cards',
    component: () => import(/* webpackChunkName: "cardDetails" */ '../views/CardDetails.vue'),
    children: [
      {
        path: 'attack',
        component: () => import(/* webpackChunkName: "cardAttack" */ '../views/CardAttack.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
