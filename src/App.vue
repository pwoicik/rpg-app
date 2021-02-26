<template>
  <sign-in v-if="!user" />
  <user-dropdown v-else />
  <router-view v-show="user" />
</template>

<script>
import { defineAsyncComponent } from "vue";

import SignIn from "@/components/SignIn";

import "@/style/global.css";
import "@/style/colors.css";

export default {
  components: {
    SignIn,
    UserDropdown: defineAsyncComponent(() => import("@/components/UserDropdown")),
  },

  beforeCreate() {
    this.$store.dispatch("initializeFirebase");
    this.$store.dispatch("auth/initializeAuthentication");
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>
