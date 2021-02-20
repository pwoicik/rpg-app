<template>
  <div id="app">
    <div v-if="user === null" id="nav">
      <router-link to="/">Home</router-link>
      |
      <a @click="signIn">Sign in</a>
    </div>
    <div v-else id="nav">
      <user-dropdown />
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import UserDropdown from "@/components/UserDropdown";
import firebase from "firebase/app";
import "firebase/auth";
import { computed } from "vue";

export default {
  components: { UserDropdown },
  data() {
    return {
      user: null
    };
  },
  provide() {
    return {
      user: computed(() => this.user)
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged(usr => {
      this.user = usr;
    });
  },
  methods: {
    signIn: async function() {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .catch(console.log);
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .catch(alert);
    },
    logout: function() {
      firebase
        .auth()
        .signOut()
        .catch(alert);
    }
  }
};
</script>
