<template>
  <div id="sign-in">
    <section>
      <header><h1>WeLcoMe to tHe RPg APP</h1></header>
      <div class="login-text" @click="signIn">
        <span>Log in with </span>
        <img id="google-logo" src="@/assets/google.svg" alt="" />
      </div>
    </section>
  </div>
</template>

<style scoped>
@import "../style/colors.css";

#sign-in {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.login-text {
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.login-text:hover {
  cursor: pointer;
}

#google-logo {
  height: 3rem;
  filter: contrast(0.5) grayscale(0.2) hue-rotate(136deg) saturate(0.8);
}

section {
  opacity: 0;
  animation: fade-in forwards ease-out 3s;
  animation-delay: 150ms;
}

h1 {
  font-size: 9rem;
  text-align: center;
  font-family: "Cinzel Decorative", cursive;
}
</style>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "SignIn",
  created() {
    if (firebase.auth().currentUser) {
      this.$router.replace({ name: "Home" });
    }
  },
  methods: {
    signIn: async function() {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .catch(console.log);
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch(console.log);
    }
  }
};
</script>
