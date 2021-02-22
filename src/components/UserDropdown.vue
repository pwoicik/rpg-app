<template>
  <div id="user-dropdown" @mouseleave="active = false">
    <div class="user-summary clickable" @click.stop="active = !active">
      <img class="user-photo" :src="user.photoURL" alt="" />
      <div class="dropdown-caret" />
    </div>
    <div v-show="active" class="dropdown-menu">
      <div class="dropdown-items">
        <header>
          Signed in as &nbsp;<span id="username">{{ user.name }}</span>
        </header>
        <div class="separator" />
        <button @click="$router.push({ name: 'Home' })">Home</button>
        <button @click="$router.push({ name: 'Friends' })">Friends</button>
        <button @click="signOut">Sign out</button>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref } from "vue";

import "@/style/colors.css";

export default {
  name: "UserDropdown",
  setup() {
    const auth = inject("auth");
    const user = inject("user");
    const active = ref(false);

    function signOut() {
      auth.signOut();
    }

    return {
      user,
      active,
      signOut,
    };
  },
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

#user-dropdown * {
  color: gainsboro;
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

.dropdown-menu {
  background-color: var(--main-bg-color);
  margin-top: 0.5rem;
  border: solid var(--light-fg-color) 1px;
  border-radius: 7px;
  padding: 0.25rem 0;
}

#username {
  font-weight: bold;
}

.dropdown-items {
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.dropdown-items > *:not(.separator) {
  text-align: left;
  padding: 0.4rem 1rem;
  width: 100%;
}

button:hover {
  background-color: #42b983;
  cursor: pointer;
}

.separator {
  width: 100%;
  border-top: 1px solid #606060;
  align-self: center;
  margin-top: 0.24rem;
}

button {
  all: inherit;
  padding: 0;
}
</style>
