<script setup>
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Navbar from "./components/Navbar.vue";
import Carousel from "./components/Carousel.vue";
import Manage from "./components/manage/index.vue";
</script>

<template>
  <div class="app">
    <Login />
    <Register />
    <Navbar />
    <div class="container">
      <Carousel />
      <Manage />
    </div>
    <footer class="footer">
      <p>© 2022 Vu Dinh Hiep</p>
    </footer>
  </div>
</template>
<script>
export default {
  data() {},
  methods: {
    onClick() {
      alert("hiep");
    },
  },
};
</script>

<style>
.app {
}
.footer {
  background-color: rgba(0, 0, 0, 0.856);
  display: flex;
  justify-content: center;
  padding: 5px;
  color: #fff;
}
</style>
