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
      <section id="chat">
        <div id="chat-messages"></div>
        <div class="separator" />
        <div class id="chat-input">
          <input id="chat-text" type="text" placeholder="Aa" />
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23">
            <path
              id="Polygon_3"
              data-name="Polygon 3"
              d="M11.5,0,23,26H0Z"
              transform="translate(26) rotate(90)"
              fill="#0191ff"
            />
          </svg>
        </div>
      </section>
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
  padding: 1rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 80vh;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.56);
}

#chat-messages {
  flex: 1;
}

.separator {
  width: 100%;
  border-top: 1px solid #606060;
  align-self: center;
}

#chat-input {
  display: flex;
  width: 100%;
  gap: 0.5rem;
  background-color: var(--main-bg-color);
  margin-right: 0;
}

#chat-text {
  flex: 1;
  background-color: var(--main-bg-color);
  border: none;
  font-size: 0.8em;
}

#chat-text:focus {
  outline: unset;
}
</style>
