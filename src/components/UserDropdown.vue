<template>
  <div id="user-dropdown" @mouseleave="active = false">
    <div class="user-summary" @click.prevent="active = !active">
      <img class="user-photo" :src="user.photoURL" alt="" />
      <div class="dropdown-caret" />
    </div>
    <div v-show="active" class="dropdown-menu">
      <div class="dropdown-items">
        <header>
          Logged in as <b>{{ user.name }}</b>
        </header>
        <div class="separator" />
        <button @click="signOut">Sign out</button>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref } from "vue";

import firebase from "firebase/app";
import "firebase/auth";

import "@/style/colors.css";

export default {
  name: "UserDropdown",
  setup() {
    const user = inject("user");
    const active = ref(false);

    return {
      user,
      active
    };
  },
  methods: {
    signOut: function() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style scoped>
#user-dropdown {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  z-index: 2;
  top: 0.7rem;
  right: 1rem;
}

.user-summary > * {
  vertical-align: middle;
  display: inline;
}

.user-photo {
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 0.7rem;
}

.dropdown-caret {
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: "";
  border-top-style: solid;
  border-top-width: 5px;
  border-right: 5px solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 5px solid transparent;
}

.user-summary:hover {
  cursor: pointer;
}

.dropdown-menu {
  font-weight: 600;
  background-color: white;
  opacity: 0.66;
  margin-top: 0.5rem;
  border-radius: 7px;
  padding: 0.25rem 0;
}

b {
  font-weight: 700;
}

.dropdown-menu * {
  color: var(--seconadary-dark-fg-color);
}

.dropdown-items {
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.dropdown-items > *:not(.separator) {
  text-align: left;
  padding: 0.25rem 0.5rem;
  width: 100%;
}

button:hover {
  background-color: #42b983;
  cursor: pointer;
}

.separator {
  width: 100%;
  border-top: 1px solid #606060;
}

button {
  all: inherit;
  padding: 0;
}
</style>
