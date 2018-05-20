import Vue from 'vue'
import Router from 'vue-router'

// Components
import MaterialSample from '@/components/150.pages/MaterialSample'
import MaterialSample2 from '@/components/150.pages/MaterialSample.2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MaterialSample',
      component: MaterialSample
    },
    {
      path: '/MaterialSample2',
      name: 'MaterialSample2',
      component: MaterialSample2
    }
  ]
})
