/**
 * moduleUserInfo:
 * ユーザー情報のStoreを管理するモジュール
 */
export default {
  // 名前空間を付与する
  namespaced: true,
  /* state: Storeの状態 */
  state: {
    id: 'test_id',
    name: 'test_name'
  },
  /* getters: Storeの算出プロパティ */
  getters: {
    id: state => state.id,
    name: state => state.name
  },
  /* mutations: stateを同期処理で変更する */
  mutations: {
    setId (state, payload) {
      state.id = payload
    },
    setName (state, payload) {
      state.name = payload
    }
  },
  /* actions: mutationを同期/非同期処理でコミットする */
  actions: {
    setId (context, payload) {
      context.commit('setId', payload)
    },
    setName (context, payload) {
      context.commit('setName', payload)
    }
  }
}
