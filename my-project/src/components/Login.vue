<template>
  <div class="bg-cover bg-center bg-hero-pattern">
    <div class="logiPg px-3 py-7">
      <div class="container max-w-lg mx-auto p-5 py-14 rounded-lg bgcl">
        <h2 class="text-center text-3xl font-bold text-zinc-100">Login</h2>
        <p class="text-zinc-100">Phone</p>
        <el-input v-model="input" type="tel" placeholder="Phone" />

        <p class="text-zinc-100">Password</p>
        <el-input
          v-model="inputPass"
          type="password"
          placeholder="Password"
          show-password
        />
        <div class="flex justify-center">
          <el-button type="warning" class="mt-4 w-full max-w-xs"
            >Login</el-button
          >
        </div>
        <br />
        <span class="text-zinc-100 text-xs"
          >Choose to
          <button class="text-sm text-amber-500">Register</button> ?</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      inputPass: "",
    };
  },
};
</script>
<style scoped>
.logiPg {
  height: 700px;
  background-color: rgba(0, 0, 0, 0.623);
}
.bgcl {
  position: -webkit-sticky;
  position: sticky;
  top: 30%;
  /* background-color: rgb(210, 105, 30); */
  border: 0.1px solid darkgoldenrod;
}
</style>