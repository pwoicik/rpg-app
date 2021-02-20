<template>
  <div class="home">
    <header><h1>Welcom to RPG APP</h1></header>
    <div>
      <span>Log in with </span>
      <img id="google-logo" src="@/assets/google.svg" alt="" />
    </div>
  </div>
</template>

<style scoped>
@import "../style/colors.css";

.home {
  position: absolute;
  background-color: var(--main-bg-color);
  z-index: 2;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.home > div {
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 100%;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

#google-logo {
  height: 3rem;
  animation: rotate forwards cubic-bezier(1,-1.66,0,.08) 5s;
}

.home > * {
  opacity: 0;
  animation: fade-in forwards ease-out 3s;
  animation-delay: 150ms;
}

h1 {
  font-size: 10rem;
}
</style>

<script>
export default {
  name: "Home"
};
</script>
