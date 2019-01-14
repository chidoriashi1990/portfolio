import Vuex from 'vuex'

// modules
import moduleUserInfo from './modules/userInfo'
import moduleProfile from './modules/profile'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      userInfo: moduleUserInfo,
      profile: moduleProfile
    }
  })
}

export default createStore
