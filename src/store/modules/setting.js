export default {
  namespaced: true,
  state: {
    changeColor: localStorage.getItem('color') || 'red'
  },
  getters: {},
  mutations: {
    changeColorFn(state, payload) {
      state.changeColor = payload
      localStorage.setItem('color', JSON.stringify(payload))
    }
  },
  actions: {}
}
