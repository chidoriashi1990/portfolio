import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /* state: Storeの状態 */
  state: {
    message: '初期メッセージ',
    count: 0
  },
  /* getters: Storeの算出プロパティ */
  getters: {
    message: state => state.message,
    count: state => state.count
  },
  /* mutations: stateを同期処理で変更する */
  mutations: {
    // メッセージの書き換え
    setMessage (state, payload) {
      state.message = payload
    },
    increment (state) {
      state.count++
    }
  },
  /* actions: mutationを同期/非同期処理でコミットする */
  actions: {
    setMessage (context, payload) {
      context.commit('setMessage', payload)
    },
    execCount (context) {
      context.commit('increment')
    }
  }
})
