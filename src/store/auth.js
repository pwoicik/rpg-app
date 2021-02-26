import firebase from "firebase/app";
import "firebase/auth";

export default {
  namespaced: true,

  state: {
    unsubscribeFunction: null,
    user: null,
  },

  mutations: {
    setUser(state, payload) {
      state.user = {
        name: payload.currentUser.displayName,
        photoURL: payload.currentUser.photoURL,
      };
    },
    unsetUser(state) {
      state.user = null;
    },
    initialize(state, { unsubscribeFunction }) {
      state.unsubscribeFunction = unsubscribeFunction;
    },
  },

  actions: {
    initializeAuthentication({ commit }) {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (user) {
          commit("setUser", { currentUser: user });
        } else {
          commit("unsetUser");
        }
      });

      commit("initialize", { unsubscribeFunction: unsubscribe });
    },
    stopListening({ state, commit }) {
      state.unsubscribeFunction();
      commit("setUnsubscribeFunction", null);
    },
    async signIn() {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .catch(console.log);
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .catch(console.log);
    },
    signOut() {
      firebase.auth().signOut();
    },
  },
};
