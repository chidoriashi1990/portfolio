import Vue from 'vue'
import Router from 'vue-router'

// Components
import Top from '@/components/150.pages/Top'
import LayoutCard from '@/components/150.pages/LayoutCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/LayoutCard',
      name: 'LayoutCard',
      component: LayoutCard
    }
  ]
})
