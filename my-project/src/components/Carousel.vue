<template>
  <el-carousel
    :interval="5000"
    height="550px"
    arrow="always"
    class="el-carousel"
  >
    <el-carousel-item v-for="item in carousel" :key="item">
      <div class="bg-black">
        <img :src="item.url" alt="Italian Trulli" class="image-carousel" />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return {
      carousel: [
        {
          content: "1",
          url: "https://barbershop.vn/static/adsense/2017/images/1504843794_the-gioi-barber-shop.jpg",
        },
        {
          content: "2",
          url: "https://barbershop.vn/static/adsense/2017/images/1504843676_barbershop.jpg",
        },
        {
          content: "3",
          url: "https://barbershop.vn/static/adsense/2017/images/1504843739_barbershop-tong-do.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.image-carousel {
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>
