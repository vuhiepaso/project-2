<template>
  <div class="affix-container">
    <el-affix target=".affix-container" :offset="0">
      <div class="">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <!-- <el-menu-item index="1" disabled>Home</el-menu-item> -->
          <!-- <el-menu-item index="1">Home</el-menu-item> -->
          <el-menu-item index="1">Quản Lý</el-menu-item>
          <el-menu-item index="2">Thông kê</el-menu-item>

          <el-sub-menu class="bg-c">
            <template #title>
              <i class="fas fa-user-alt" style="font-size: 18px"></i>
            </template>
            <el-menu-item index="4-1">Cài đặt</el-menu-item>
            <el-menu-item index="4-2">Đăng xuất</el-menu-item>
          </el-sub-menu>
          <!-- <el-menu-item index="5">Orders</el-menu-item> -->
        </el-menu>
      </div>
      <div></div>
    </el-affix>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const activeIndex2 = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style scoped>
.affix-container {
  text-align: center;
  height: auto;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
}
</style>
