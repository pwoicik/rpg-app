<template>
  <sign-in v-if="!user.isSignedIn" />
  <user-dropdown v-else />
  <router-view v-show="user.isSignedIn" />
</template>

<script>
import { defineAsyncComponent, provide, reactive, readonly } from "vue";

import SignIn from "@/components/SignIn";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import "@/style/global.css";
import "@/style/colors.css";

export default {
  components: {
    SignIn,
    UserDropdown: defineAsyncComponent(() => import("@/components/UserDropdown")),
  },
  setup() {
    const db = firebase.firestore();
    provide("db", db);

    const auth = firebase.auth();
    provide("auth", auth);

    const user = reactive({
      isSignedIn: false,
      name: "",
      photoURL: "",
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

    const currUsr = auth.currentUser;
    if (currUsr) {
      changeUser(true, currUsr.displayName, currUsr.photoURL);
    }

    auth.onAuthStateChanged(usr => {
      if (usr) {
        changeUser(true, usr.displayName, usr.photoURL);
      } else {
        changeUser(false);
      }
    });

    return {
      user,
    };
  },
};
</script>
