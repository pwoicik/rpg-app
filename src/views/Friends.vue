<template>
  <div id="friends">
    <label id="friends-label" for="friends">Friends</label>
    <main>
      <section>
        <button id="add-friend-button" @click="null">Add friend</button>
        <div id="friends-list">
          <div class="friend-list-el active clickable">
            <img
              class="friend-photo"
              src="https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg"
              alt=""
            />
            <div class="friend-summary">
              <h3>Adam Krucan</h3>
              <span class="last-msg">Dlaczego TEDE kurwą jest</span>
            </div>
          </div>
          <div class="friend-list-el clickable">
            <img
              class="friend-photo"
              src="https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg"
              alt=""
            />
            <div class="friend-summary">
              <h3>Adam Krucan</h3>
              <span class="last-msg">Dlaczego TEDE kurwą jest</span>
            </div>
          </div>
          <div class="friend-list-el clickable">
            <img
              class="friend-photo"
              src="https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg"
              alt=""
            />
            <div class="friend-summary">
              <h3>Adam Krucan</h3>
              <span class="last-msg">Dlaczego TEDE kurwą jest</span>
            </div>
          </div>
        </div>
      </section>
      <section id="chat">Chat</section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Friends",
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

#friends-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.friend-photo {
  height: 3.5rem;
  width: auto;
  border-radius: 50%;
}

.last-msg {
  font-size: 0.85em;
}

#chat {
  min-height: 80vh;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.56);
}
</style>
