import Vue from 'vue';
import Vuex from 'vuex';

import { messages } from './messages';

Vue.use(Vuex);

export default new Vuex.Store({
  state: messages.state,
  mutations: {
    addMessage(state, message) {
      state.messages.push(message);
    },
  },
  actions: {
    addMessage({ commit }, message) {
      commit('addMessage', message);
    },
  },
  getters: {
    messages: (state) => state.messages,
  },
});
