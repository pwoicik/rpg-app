<template>
  <div id="friends">
    <label id="friends-label" for="friends">Friends</label>
    <main>
      <section>
        <button id="add-friend-button" class="clickable" @click="null">Add friend</button>
        <div id="friends-list">
          <friend-list-element v-for="i in list" :key="i" :active="!!i">
            This is an example
          </friend-list-element>
        </div>
      </section>
      <section id="chat">
        <div id="chat-messages">
          <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="false">
            Seems fine
          </chat-message>
          <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="true">
            It works
          </chat-message>
          <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="false">
            Test message
          </chat-message>
          <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="false">
            Testing
          </chat-message>
          <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="false">
            This is a test message
          </chat-message>
          <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="false">
            This is a very long message it can overflow so we want to check this before we deploy
            this shit on the live server
          </chat-message>
          <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="true">
            This is a very long message it can overflow so we want to check this before we deploy
            this shit on the live server
          </chat-message>
          <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="true">
            This is a very long message it can overflow so we want to check this before we deploy
            this shit on the live server
          </chat-message>
          <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="true">
            This is a very long message it can overflow so we want to check this before we deploy
            this shit on the live server
          </chat-message>
          <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="true">
            This is a very long message it can overflow so we want to check this before we deploy
            this shit on the live server
          </chat-message>
          <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="true">
            This is a very long message it can overflow so we want to check this before we deploy
            this shit on the live server
          </chat-message>
          <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="true">
            This is a very long message it can overflow so we want to check this before we deploy
            this shit on the live server
          </chat-message>
          <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="true">
            This is a very long message it can overflow so we want to check this before we deploy
            this shit on the live server
          </chat-message>
        </div>
        <div class id="chat-input-form">
          <label class="visually-hidden" for="chat-input">Type message here:</label>
          <input id="chat-input" type="text" placeholder="Aa" />
          <button id="send-button" class="clickable">
            <img src="../assets/send.svg" alt="Send" />
          </button>
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
    ChatMessage: defineAsyncComponent(() => import("@/components/ChatMessage")),
  },
  data() {
    return {
      list: [true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
  overflow-y: auto;
  max-height: 80vh;
  direction: rtl;
}

#friends-list > * {
  direction: initial;
}

#chat {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: calc(80vh + 3rem);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.56);
}

#chat-messages {
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
  min-height: fit-content;
  overflow-y: auto;
}

#chat-input-form {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
  padding: 0.7rem;
  background-color: var(--main-bg-color);
  margin-right: 0;
  box-shadow: 0 -2px 1px 0 rgba(67, 67, 67, 0.5);
}

#chat-input {
  flex: 1;
  background-color: var(--main-bg-color);
  border: none;
  font-size: 0.8em;
  cursor: text;
}

#chat-input:focus {
  outline: unset;
}

#send-button > img {
  height: 1.75rem;
  filter: invert(100%);
}
</style>
