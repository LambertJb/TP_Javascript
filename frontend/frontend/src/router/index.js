import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import myForm from '@/components/myForm'
import seeContent from '@/components/seeContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/ajouter',
      name: 'ajouter',
      component: myForm
    },
    {
      path: '/seeContent/:id(\\d+)',
      name: 'seeContent',
      component: seeContent
    }
  ]
})
