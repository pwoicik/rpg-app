<template>
  <div id="user-dropdown">
    <div class="user-summary" @click="active = !active">
      <img class="user-photo" :src="photoURL" alt="" />
      <div class="dropdown-caret" />
    </div>
    <div v-if="active" class="dropdown-menu">
      <div class="dropdown-items">
        <header>
          Logged in as <b>{{ userName }}</b>
        </header>
        <div class="separator" />
        <button @click="signOut">Sign out</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "UserDropdown",
  inject: ["user"],
  data() {
    return {
      userName: "",
      photoURL: null,
      active: false
    };
  },
  created() {
    const usr = this.user.value;
    this.userName = usr.displayName;
    this.photoURL = usr.photoURL;
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
  display: inline-block;
  position: relative;
}

.user-summary > * {
  vertical-align: middle;
  display: inline;
}

.user-photo {
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 0.4rem;
}

.dropdown-caret {
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: "";
  border-top-style: solid;
  border-top-width: 4px;
  border-right: 4px solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 4px solid transparent;
}

.user-summary:hover {
  cursor: pointer;
}

.dropdown-menu {
  background-color: white;
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  border-radius: 5px;
  border: 1px solid #606060;
  padding: 0.25rem 0;
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
