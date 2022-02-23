<template>
  <div class="item_service">
    <div class="containerImg">
      <img
        class="rounded image"
        :src="itemService.img"
        :alt="itemService.imgAlt"
      />

      <div class="overlay">
        <div>
          <el-button
            type="primary"
            class="bg-blue-500"
            :icon="Edit"
            circle
            @click="$emit('editClick')"
          ></el-button>
          <el-button
            type="danger"
            class="bg-red-500"
            :icon="Delete"
            circle
            @click="$emit('deleteClick')"
          ></el-button>
        </div>
      </div>
    </div>

    <div class="mt-2">
      <div>
        <div
          class="
            text-xs text-slate-600
            uppercase
            font-bold
            tracking-wider
            truncate
            w-2/3
          "
        >
          {{ itemService.serviceName }}
        </div>
        <div class="font-bold text-slate-700 text-xl">
          <p class="truncates cursor-pointer" @click="$emit('detailClick')">
            {{ itemService.title }}
          </p>
        </div>
        <div class="mt-2 text-sm text-slate-600">{{ itemService.pricing }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Edit, Delete } from "@element-plus/icons-vue";
</script>

<script>
export default {
  props: {
    itemService: Object,
  },
};
</script>
<style scoped>
.containerImg {
  position: relative;
  width: 100%;
  height: 250px;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.466);
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  opacity: 0;

  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

.containerImg:hover .overlay {
  opacity: 1;
}
.truncates {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>