<template>
  <section>
    <button id="add-friend-button" class="clickable" @click="null">Add friend</button>
    <div id="friends-list">
      <friend-list-element v-for="i in list" :key="i" :active="!!i">
        This is an example
      </friend-list-element>
    </div>
  </section>
</template>

<script>
import FriendListElement from "@/components/FriendListElement";

export default {
  name: "FriendsList",
  components: { FriendListElement },
  data() {
    return {
      list: [true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
  },
};
</script>

<style scoped>
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
  width: max-content;
  direction: rtl;
}

#friends-list > * {
  direction: initial;
}
</style>
