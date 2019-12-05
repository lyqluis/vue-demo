import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/supervision',
      name: 'supervision',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Supervision.vue')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import(/* webpackChunkName: "about" */ './views/Question.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import(/* webpackChunkName: "about" */ './views/Team.vue')
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: () => import(/* webpackChunkName: "about" */ './views/Appointment.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    },
    {
      path: '/forgetPw',
      name: 'forgetPw',
      component: () => import(/* webpackChunkName: "about" */ './views/ForgetPw.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ './views/User.vue')
    },
    {
      path: '/mySite',
      name: 'mySite',
      component: () => import(/* webpackChunkName: "about" */ './views/MySite.vue')
    },
    {
      path: '/accountSet',
      name: 'accountSet',
      component: () => import(/* webpackChunkName: "about" */ './views/AccountSet.vue')
    },
    {
      path: '/myComment',
      name: 'myComment',
      component: () => import(/* webpackChunkName: "about" */ './views/MyComment.vue')
    },
    {
      path: '/site',
      name: 'site',
      component: () => import(/* webpackChunkName: "about" */ './views/Site.vue')
    },
    {
      path: '/siteDetail',
      name: 'siteDetail',
      component: () => import(/* webpackChunkName: "about" */ './views/SiteDetail.vue')
    },
    {
      path: '/siteDetailOpen',
      name: 'siteDetailOpen',
      component: () => import(/* webpackChunkName: "about" */ './views/SiteDetailOpen.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: () => import(/* webpackChunkName: "about" */ './views/Report.vue')
    },
    {
      path: '/reportDetail',
      name: 'reportDetail',
      component: () => import(/* webpackChunkName: "about" */ './views/ReportDetail.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import(/* webpackChunkName: "about" */ './views/News.vue')
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: () => import(/* webpackChunkName: "about" */ './views/NewsDetail.vue')
    },
  ]
})
