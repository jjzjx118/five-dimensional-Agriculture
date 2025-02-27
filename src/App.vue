<template>
  <el-container>
    <el-header class="header" >
      <div class="header">
        <!-- <div class="demo-image__lazy"> -->
          <!-- 使用变量绑定图片路径 -->
           <div class="navigator">

           </div>
       
          <img class="img" src="@/assets/image/bgd_2.png" alt="本地图片" />
        <!-- </div> -->
      </div>
    </el-header>
    <el-main class="main"> </el-main>
    <el-footer class="footer">Footer</el-footer>
  </el-container>
</template>

<script lang="ts" setup>
import "swiper/css";
// 引入图片
// import img1 from '../assets/image/home_header_bgd.jpg';
const localImage = new URL('../assets/image/home_header_bgd.jpg', import.meta.url).href;
console.log(localImage);
const urls = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
];
</script>

<style>
.app {
  width: 100% !important;
}
</style>

<style scoped>

.navigator {
 width: 100%;
  height: 84px;
  background-color: #ffffff;
}

.img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.el-image {
  width: 100%;
  /* height: 640px; */
  object-fit: cover; 
}
.demo-image__lazy {
  /* height: 400px; */
  width: 100%;
  overflow-y: auto;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}

.main {
  width: 100%;
  display: block;
  height: 1000px;
  background-color: red;
}

.footer {
  display: block;
  width: 100%;
  height: 100px;
  background-color: #3269b1;
}

.el-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header {
  height: 200px;
  background-color: #3269b1;
}

.el-header {
  height: 200px;
  background-color: #3269b1;
  color: #333;
  text-align: center;
}
.el-header,
.el-main,
.el-footer {
  width: 100%;
}
</style>
