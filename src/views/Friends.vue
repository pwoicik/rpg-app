<template>
  <div id="friends">
    <label id="friends-label" for="friends">Friends</label>
    <main>
      <section>
        <button id="add-friend-button" @click="null">Add friend</button>
        <div id="friends-list">
          <friend-list-element v-for="i in list" :key="i" :active="i" />
        </div>
      </section>
      <section id="chat">Chat</section>
    </main>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "Friends",
  components: {
    FriendListElement: defineAsyncComponent(() => import("@/components/FriendListElement")),
  },
  data() {
    return {
      list: [true, false, false],
    };
  },
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: space-around;
  font-size: 1.3rem;
  padding: 0 6rem;
  gap: 2rem;
}

main > * {
  flex: 1;
}

#friends-label {
  position: absolute;
  top: 0.7rem;
  left: 1rem;
  font-size: 1.6rem;
}

#add-friend-button {
  text-decoration: underline white;
  margin-bottom: 1.5rem;
}

#friends-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

#chat {
  min-height: 80vh;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.56);
}
</style>
