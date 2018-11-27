import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    addMessage (state, message) {
      state.messages.push(message);
    }
  },
  actions: {
    addMessage({ commit }, message) {
      commit('addMessage', message);
    }
  },
  getters: {
    messages: state => {
      return state.messages;
    }
  }
})
