import Vue from 'vue'
import Router from 'vue-router'

// Components
import Top from '@/components/150.pages/Top'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    }
  ]
})
