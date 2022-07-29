export default {
  namespaced: true,
  state: {
    List: JSON.parse(localStorage.getItem('list')) || [
      { name: '吃饭', done: false, id: 1 },
      { name: '睡觉', done: false, id: 2 },
      { name: '打豆豆', done: false, id: 3 }
    ]
  },
  getters: {},
  mutations: {
    SetList(state, payload) {
      state.list = payload
      localStorage.setItem('list', JSON.stringify(payload))
    }
  },
  actions: {}
}
