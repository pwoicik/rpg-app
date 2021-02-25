<template>
  <div class="chat-message" :class="[isSentByCurrentUser ? 'right-aligned' : 'left-aligned']">
    <span class="msg-date">{{ date }}</span>
    <div class="msg">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatMessage",
  props: {
    date: {
      type: String,
      required: true,
    },
    isSentByCurrentUser: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.chat-message {
  padding: 0.4rem 1rem 0.6rem 1rem;
  display: flex;
  flex-direction: column;
  --border-radius: 20px;
}

.left-aligned {
  align-self: flex-start;
  background-color: #4b5338;
  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);
  margin-right: 15%;
  align-items: flex-start;
}

.right-aligned {
  align-self: flex-end;
  background-color: #586598;
  border-radius: var(--border-radius) 0 var(--border-radius) var(--border-radius);
  margin-left: 15%;
  align-items: flex-end;
}

.msg {
  width: fit-content;
}

.msg-date {
  opacity: 0.7;
  font-size: 0.7em;
}
</style>
