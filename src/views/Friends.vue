<template>
  <div id="friends">
    <label id="friends-label" for="friends">Friends</label>
    <main v-if="haveFriends">
      <friends-list />
      <chat />
    </main>
    <main id="no-friends" v-else>
      <button id="add-friend-button" class="clickable" @click="null">Add friend</button>
    </main>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "Friends",
  components: {
    FriendsList: defineAsyncComponent(() => import("@/components/FriendsList")),
    Chat: defineAsyncComponent(() => import("@/components/Chat")),
  },
  data() {
    return {
      haveFriends: false,
    };
  },
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: space-around;
  font-size: 1.3rem;
  padding: 0 15%;
  gap: 3rem;
}

main#no-friends {
  flex-direction: column;
  align-items: center;
}

#add-friend-button {
  text-decoration: underline white;
  margin-bottom: 1.5rem;
}

#friends-label {
  position: absolute;
  top: 0.7rem;
  left: 1rem;
  font-size: 1.6rem;
}
</style>
