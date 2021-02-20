<template>
  <user-dropdown />
  <router-view />
</template>

<style>
@import "style/colors.css";

* {
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  color: var(--light-fg-color);
}

body {
  height: 100vh;
  width: 100vw;
  background-color: var(--main-bg-color);
}

#app {
  height: 100%;
  width: 100%;
}

#user-dropdown + * {
  padding: 2rem;
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
  created() {
    firebase.auth().onAuthStateChanged(usr => {
      this.user = usr;
      this.$router.replace({ name: usr ? "Home" : "SignIn" });
    });
  }
};
</script>
