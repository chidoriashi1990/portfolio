import Vue from 'vue'
import Vuex from 'vuex'

import moduleUserInfo from '@/store/modules/userInfo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInfo: moduleUserInfo
  }
})
