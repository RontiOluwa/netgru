import { createStore } from "vuex";
import API_SERVICES from "../utils/API";

export default createStore({
  state: {
    api: API_SERVICES,
    BASEURL: process.env.VUE_APP_API_BASE_URL,
    toast: "",
  },
  getters: {
    API(state) {
      return state.api;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
