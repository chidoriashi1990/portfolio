import Vue from 'vue'
import Router from 'vue-router'

// Components
import UserInfo from '@/components/150.pages/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserInfo',
      component: UserInfo
    }
  ]
})
