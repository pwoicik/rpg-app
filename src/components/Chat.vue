<template>
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
        This is a very long message it can overflow so we want to check this before we deploy this
        shit on the live server
      </chat-message>
      <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="true">
        This is a very long message it can overflow so we want to check this before we deploy this
        shit on the live server
      </chat-message>
      <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="true">
        This is a very long message it can overflow so we want to check this before we deploy this
        shit on the live server
      </chat-message>
      <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="true">
        This is a very long message it can overflow so we want to check this before we deploy this
        shit on the live server
      </chat-message>
      <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="true">
        This is a very long message it can overflow so we want to check this before we deploy this
        shit on the live server
      </chat-message>
      <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="true">
        This is a very long message it can overflow so we want to check this before we deploy this
        shit on the live server
      </chat-message>
      <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="true">
        This is a very long message it can overflow so we want to check this before we deploy this
        shit on the live server
      </chat-message>
      <chat-message :date="'25.02.2021 16:29'" :is-sent-by-current-user="true">
        This is a very long message it can overflow so we want to check this before we deploy this
        shit on the live server
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
</template>

<script>
import ChatMessage from "@/components/ChatMessage";

export default {
  name: "Chat",
  components: { ChatMessage },
};
</script>

<style scoped>
#chat {
  display: flex;
  flex-direction: column;
  flex: 1;
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
