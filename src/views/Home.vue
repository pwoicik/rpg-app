<template>
  <div id="home">Future content here</div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  created() {
    if (!firebase.auth().currentUser) {
      this.$router.replace({ name: "SignIn" });
    }
  }
};
</script>

<style scoped></style>