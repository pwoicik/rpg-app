import { createStore } from "vuex";

import firebase from "firebase/app";
import firebaseConfig from "@/firebaseConfig";

import auth from "./auth";

export default createStore({
  state: {
    firebase: null,
  },

  mutations: {
    setFirebase(state, app) {
      state.firebase = app;
    },
  },

  actions: {
    initializeFirebase({ commit }) {
      const app = firebase.initializeApp(firebaseConfig);
      commit("setFirebase", app);
    },
  },

  modules: { auth },
});
