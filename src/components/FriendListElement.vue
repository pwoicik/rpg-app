<template>
  <div class="friend-list-el clickable" :class="{ active: active }">
    <img
      class="friend-photo"
      src="https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg"
      alt=""
    />
    <div class="friend-summary">
      <header>Adam Krucan</header>
      <span class="last-msg">
        <slot />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendListElement",
  props: {
    active: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<style scoped>
.friend-list-el {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 0.5rem 0.8rem;
  border-radius: 14px;
}

.friend-list-el:hover:not(.active) {
  background-color: rgba(51, 69, 76, 0.4);
}

.active {
  background-color: #33454c;
}

.friend-photo {
  height: 3.5rem;
  width: auto;
  border-radius: 50%;
}

.last-msg {
  font-size: 0.8em;
  opacity: 0.75;
}
</style>
