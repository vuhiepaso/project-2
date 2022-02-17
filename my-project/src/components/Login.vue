<template >
  <!-- <div class="bg-cover bg-center bg-hero-pattern"> -->
  <div class="bg-image bg-hero-pattern" id="login">
    <div class="logiPg px-3 py-7">
      <h2 class="text-zinc-50 text-center text-4xl mt-20">
        Lets your hair do the talking
      </h2>
      <br />
      <div class="container max-w-lg mx-auto p-5 py-14 bgcl">
        <h2 class="text-center text-3xl font-bold text-zinc-100">Login</h2>
        <p class="text-zinc-100">Phone</p>
        <el-input
          v-model="input"
          type="tel"
          placeholder="Phone"
          :prefix-icon="Iphone"
        />
        <p class="text-red-500 text-sm">{{ errPhone }}</p>

        <p class="text-zinc-100 mt-3">Password</p>
        <el-input
          v-model="inputPass"
          type="password"
          placeholder="Password"
          show-password
          :prefix-icon="Key"
        />
        <p class="text-red-500 text-sm">{{ errPass }}</p>

        <div class="flex justify-center">
          <el-button type="warning" class="mt-4 w-full max-w-xs"
            >Login</el-button
          >
        </div>
        <br />
        <p class="text-zinc-100 text-xs">
          Select
          <a class="text-sm text-amber-500" href="#register">Register</a> if you
          do not have an account
        </p>
      </div>
      <p class="text-zinc-50 text-center text-xs mt-5">
        &copy; 2022 Register Form and Login. All rights reserved | Design by
      </p>
    </div>
  </div>
</template>


<script  setup>
import { Iphone, Key } from "@element-plus/icons-vue";
</script>
<script >
export default {
  data() {
    return {
      input: "",
      inputPass: "",
      errPhone: "err",
      errPass: "err",
    };
  },
};
</script>


<style scoped>
.logiPg {
  height: 900px;
  background-color: rgba(0, 0, 0, 0.623);
}
.bgcl {
  background: rgba(255, 255, 255, 0.07);
  -webkit-box-shadow: 0 6px 12px 0 rgb(37, 37, 37);
  -moz-box-shadow: 0 6px 12px 0 rgb(37, 37, 37);
  box-shadow: 0 6px 43px 0 rgba(0, 0, 0, 0.4);
}
.bg-image {
  font-family: "Open Sans", sans-serif;
  background-size: cover;
  -webkit-background-size: cover;
  -ms-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>