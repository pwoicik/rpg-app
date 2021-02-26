<template>
  <div id="sign-in">
    <section>
      <header><h1>WeLcoMe to tHe RPg APP</h1></header>
      <div class="login-text clickable" @click="signIn">
        <span>Sign in with </span>
        <img id="google-logo" src="@/assets/google.svg" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
import "@/style/colors.css";

export default {
  name: "SignIn",

  methods: {
    signIn() {
      this.$store.dispatch("auth/signIn");
    },
  },
};
</script>

<style scoped>
#sign-in {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: var(--main-bg-color);
  overflow: auto;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

section {
  opacity: 0;
  animation: fade-in forwards ease-out 3s;
  animation-delay: 150ms;
}

.login-text {
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.login-text {
  cursor: pointer;
}

#google-logo {
  height: 3rem;
  width: auto;
  filter: contrast(0.5) grayscale(0.2) hue-rotate(136deg) saturate(0.8);
}

h1 {
  font-size: 9rem;
  text-align: center;
  font-family: "Cinzel Decorative", cursive;
}
</style>
