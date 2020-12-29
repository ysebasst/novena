<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {
    this.obtenerSize();
  },
  methods: {
    ...mapActions(["obtenerSize"]),
  },
};
</script>

<style>
:root {
  --bgPrimary: rgba(21, 32, 43, 1);
  --bgSecondary: rgba(25, 39, 52, 0.8);
  --textPrimary: #fff;
}
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-image: url("../public/img/novena.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.card {
  background-color: var(--bgSecondary);
  color: var(--textPrimary);
  border-radius: 0.5rem;
}
.card-header {
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.card-body {
  padding: 1rem;
}
</style>
