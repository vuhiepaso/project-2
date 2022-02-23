<template>
  <div class="flex">
    <div class="flex-none w-1/5">
      <el-input
        v-model="search"
        class="w-4/5 m-2"
        placeholder="Type something"
        :prefix-icon="Search"
      />
      <el-button class="bg-blue-400" type="primary" @click="drawerAdd = true"
        >More services</el-button
      >
      <el-drawer v-model="drawerAdd" :with-header="false">
        <FormInputService
          nameTitle="Add service"
          nameButton="ADD SERVICE"
          :updateAndAdd="false"
        />
      </el-drawer>

      <el-drawer v-model="drawerUpdate" :with-header="false" direction="ltr">
        <FormInputService
          nameTitle="Update service"
          nameButton="UPDATE SERVICE"
          :updateAndAdd="true"
          :id="itemDrawer.id"
          :serviceName="itemDrawer.serviceName"
          :title="itemDrawer.title"
          :pricing="itemDrawer.pricing"
          :content="itemDrawer.content"
          :imgAlt="itemDrawer.imgAlt"
        />
      </el-drawer>

      <div class="w-11/12 text-ellipsis">
        <br />
        <p class="text-xs uppercase font-bold tracking-wider">
          {{ detailItem.serviceName }}
        </p>
        <div class="bg-gray-500 h-1"></div>

        <p
          class="
            text-2xl text-slate-600
            uppercase
            font-bold
            tracking-wider
            mt-5
          "
        >
          {{ detailItem.title }}
        </p>
        <p class="text-xs font-bold tracking-wider mt-3">
          {{ detailItem.content }}
        </p>

        <div class="mt-2 text-sm text-slate-600">{{ detailItem.pricing }}</div>
      </div>
    </div>
    <div class="flex-initial">
      <div class="grid grid-cols-4 gap-4 place-items-center" v-if="!search">
        <ItemService
          v-for="(item, index) in pagedData"
          :key="index"
          :itemService="item"
          @editClick="editClick(index, item)"
          @deleteClick="(dialogVisible = true), (itemDialog = item)"
          @detailClick="detailItem = item"
        />
      </div>
      <div class="grid grid-cols-4 gap-4 place-items-center" v-else>
        <div
          v-for="(item, index) in itemService.filter(
            (data) =>
              data.title.toLowerCase().includes(search.toLowerCase()) ||
              data.serviceName.toLowerCase().includes(search.toLowerCase())
          )"
          :key="index"
        >
          <ItemService
            :itemService="item"
            @editClick="editClick(index, item)"
            @deleteClick="(dialogVisible = true), (itemDialog = item)"
            @detailClick="detailItem = item"
          />
        </div>
      </div>

      <div class="bg-slate-500 h-1 op"></div>

      <el-pagination
        v-if="!search"
        v-model:currentPage="currentP"
        background
        layout="prev, pager, next"
        :class="itemService.length <= 8 ? 'opacity-0' : 'opacity-100'"
        :page-size="pageSize"
        :total="itemService.length"
      >
      </el-pagination>
      <el-dialog v-model="dialogVisible" title="Delete" width="20%" center>
        <span>Do you want to delete this service ?</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>

            <el-button
              type="primary "
              class="bg-blue-500"
              @click="deleteClick(itemDialog)"
              >Confirm</el-button
            >
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import { Search } from "@element-plus/icons-vue";
import ItemService from "../componentChilds/ItemService.vue";
import FormInputService from "../componentChilds/FormInputService.vue";
</script>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dialogVisible: false,
      drawerAdd: false,
      drawerUpdate: false,
      currentP: 1,
      pageSize: 8,
      search: "",
      detailItem: [],
      itemDialog: [],
      itemService: [],
      itemDrawer: [],
    };
  },
  methods: {
    deleteClick(item) {
      // alert("deleteClick" + item.id);
      this.itemService = this.itemService.filter((obj) => obj.id !== item.id);
      this.dialogVisible = false;
    },
    editClick(index, item) {
      // alert("editClick" + index);
      this.itemDrawer = item;
      this.drawerUpdate = true;
    },
  },
  computed: {
    pagedData() {
      return this.itemService.slice(
        this.pageSize * this.currentP - this.pageSize,
        this.pageSize * this.currentP
      );
    },
  },
  created() {
    axios
      .get(`https://www.mockachino.com/38708087-6aad-4c/service`)
      .then((response) => {
        this.itemService = response.data.service;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style scoped>
.image {
  width: 100%;
  max-width: 250px;
  max-height: 250px;
}
.item_service {
  max-width: 250px;
  height: 380px;
}
</style>