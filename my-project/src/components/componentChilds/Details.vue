<template>
  <div>
    <el-form :model="form">
      <el-form-item label="Phone :" :label-width="formLabelWidth">
        <span> {{ form.phone }}</span>
      </el-form-item>

      <el-form-item label="Name :" :label-width="formLabelWidth">
        <span> {{ form.name }}</span>
      </el-form-item>

      <el-form-item label="Date :" :label-width="formLabelWidth">
        <span> {{ form.date }}</span>
      </el-form-item>
      <el-form-item label="Time :" :label-width="formLabelWidth">
        <span>: {{ form.time }}</span>
      </el-form-item>

      <el-form-item label="Service :" :label-width="formLabelWidth">
        <span> {{ form.service }}</span>
      </el-form-item>
      <el-form-item label="Expected Price : " :label-width="formLabelWidth">
        <span> {{ priceVND(form.expectedPrice) }}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    form: Object,
  },
  data() {
    return {
      formLabelWidth: "140px",
    };
  },
  methods: {
    priceVND: (price) =>
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(price),
  },
};
</script>

<style scoped>
.el-button--text {
  margin-right: 15px;
}
</style>
