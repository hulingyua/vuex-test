import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login'
import StoreStatus from '../components/StoreStatus'
import Mutations from '../components/Mutations'
import Actions from '../components/Actions'
import Modules from '../components/Modules'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/store',
      name: 'store',
      component: StoreStatus
    },
    {
      path: '/mutations',
      name: 'mutations',
      component: Mutations
    },
    {
      path: '/actions',
      name: 'actions',
      component: Actions
    },
    {
      path: '/modules',
      name: 'modules',
      component: Modules
    }
  ]
})
