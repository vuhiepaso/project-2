<template>
  <div class="containerA">
    <el-tabs type="border-card" class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><calendar /></el-icon> Schedule
          </span>
        </template>
        <CalendarHair />
      </el-tab-pane>
      <el-tab-pane label="Service">Service</el-tab-pane>
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script  setup>
import { Calendar } from "@element-plus/icons-vue";
import CalendarHair from "./CalendarHair.vue";
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  background-color: #f4f5f7;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>

