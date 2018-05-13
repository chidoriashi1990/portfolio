import Vue from 'vue'
import Router from 'vue-router'

// Components
import MaterialSample from '@/components/150.pages/MaterialSample'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MaterialSample',
      component: MaterialSample
    }
  ]
})
