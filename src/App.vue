<template>
  <user-dropdown v-show="user.isSignedIn" />
  <router-view />
</template>

<style>
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
import { provide, reactive, readonly } from "vue";
import { useRoute, useRouter } from "vue-router";

import "@/style/colors.css";

export default {
  components: { UserDropdown },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const user = reactive({
      isSignedIn: false,
      name: "",
      photoURL: ""
    });

    provide("user", readonly(user));

    function changeUser(isSignedIn, name, photoURL) {
      user.isSignedIn = isSignedIn;
      if (isSignedIn) {
        user.name = name;
        user.photoURL = photoURL;
      } else {
        user.name = "";
        user.photoURL = "";
      }
    }

    const currUsr = firebase.auth().currentUser;
    if (currUsr) {
      changeUser(true, currUsr.displayName, currUsr.photoURL);
      router.push({ name: "Home" });
    } else {
      router.push({ name: "SignIn" });
    }

    firebase.auth().onAuthStateChanged(usr => {
      if (usr) {
        changeUser(true, usr.displayName, usr.photoURL);
        if (route.path === "/") {
          router.replace({ name: "Home" });
        }
      } else {
        changeUser(false);
        router.push({ name: "SignIn" });
      }
    });

    return {
      user
    };
  }
};
</script>
