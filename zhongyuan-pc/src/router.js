import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/index',
    name: 'index',
    component: () => import('./views/Index.vue')
  }, {
    path: '/introduction',
    name: 'introduction',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ './views/Introduction.vue')
  },{
    path: '/estate',
    name: 'estate',
    component: () => import('./views/Estate.vue')
  },{
    path: '/service',
    name: 'service',
    component: () => import('./views/Service.vue')
  },{
    path: '/sailor',
    name: 'sailor',
    component: () => import('./views/Sailor.vue')
  },{
    path: '/logistics',
    name: 'logistics',
    component: () => import('./views/Logistics.vue')
  },{
    path: '/',
    name: 'index',
    component: () => import('./views/Index.vue')
  },{
    path: '/news',
    name: 'news',
    component: () => import('./views/News.vue')
  },{
    path: '/news-detail',
    name: 'news-detail',
    component: () => import('./views/News-detail.vue')
  },{
    path: '/culture',
    name: 'culture',
    component: () => import('./views/Culture.vue')
  },{
    path: '/recruit',
    name: 'recruit',
    component: () => import('./views/Recruit.vue')
  },{
    path: '/connection',
    name: 'connection',
    component: () => import('./views/Connection.vue')
  }]
})