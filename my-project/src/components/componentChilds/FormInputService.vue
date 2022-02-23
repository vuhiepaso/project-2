<template>
  <div class="text-lg uppercase">
    <span class="text-5xl text-zinc-600">{{ nameTitle }}</span>
    <div class="h-1 bg-slate-500 mt-1"></div>
    <br />
    <p>Service Name</p>
    <el-input v-model="formInput.sName" placeholder="Service name" />
    <span class="text-sm normal-case text-red-500">{{
      textErrForm.sName
    }}</span>

    <p>Title</p>
    <el-input v-model="formInput.title" placeholder="Title" />
    <span class="text-sm normal-case text-red-500">{{
      textErrForm.title
    }}</span>
    <p>Content</p>
    <el-input
      v-model="formInput.content"
      rows="5"
      type="textarea"
      placeholder="Content"
    />
    <span class="text-sm normal-case text-red-500">{{
      textErrForm.content
    }}</span>
    <p>Image</p>
    <!-- list-type="picture" -->
    <!-- :auto-upload="false" -->
    <div class="upload">
      <el-upload
        class="upload-demo"
        action="#"
        limit="1"
        :before-upload="beforeImageUpload"
        :on-change="handleChange"
        :on-success="handleSuccess"
        :auto-upload="false"
      >
        <el-button>Click to upload</el-button>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 2m
          </div>
        </template>
      </el-upload>
    </div>

    <p>Pricing</p>
    <el-input v-model="formInput.pricing" placeholder="Pricing" />
    <span class="text-sm normal-case text-red-500">{{
      textErrForm.pricing
    }}</span>
    <br />
    <el-button
      type="info"
      class="mt-7 w w-2/4 bg-gray-500 text-white"
      plain
      @click="onSubmit(formInput)"
      >{{ nameButton }}</el-button
    >
  </div>
</template>

<script setup>
import { Plus, ZoomIn, Download, Delete } from "@element-plus/icons-vue";
import { UploadFile } from "element-plus/es/components/upload/src/upload.type";
</script>

<script>
export default {
  props: {
    updateAndAdd: Boolean,
    nameTitle: Text,
    nameButton: Text,

    id: Text,
    serviceName: Text,
    title: Text,
    pricing: Text,
    content: Text,
    imgAlt: Text,
  },
  data() {
    return {
      formInput: {
        sName: this.serviceName,
        title: this.title,
        content: this.content,
        imageUrl: "",
        imgAlt: this.imgAlt,
        pricing: this.pricing,
      },
      textErrForm: {
        sName: "*abc err",
        title: "title",
        content: "content",
        img: "img",
        pricing: "pricing",
      },
      disabled: false,
    };
  },
  methods: {
    handleChange(file, fileList) {
      alert("hiep" + file.name);
      this.formInput.imgAlt = file.name;
      console.log(file);
    },
    beforeImageUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("Image picture must be JPG format!");
      }
      if (!isLt2M) {
        this.$message.error("Image picture size can not exceed 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },

    onSubmit(formInput) {
      if (this.updateAndAdd) {
        this.updateService(formInput);
      } else {
        this.addService(formInput);
      }
    },
    addService(formInput) {
      alert(formInput + "Add");
    },
    updateService(formInput) {
      alert(formInput + "Udate");
    },
  },

  created() {},
};
</script>

<style scoped>
p {
  margin-top: 20px;
}
</style>