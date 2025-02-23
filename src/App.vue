<template>
    <el-container>
      <el-header class="header" style="height: 500px"><div class="header">五维农业</div> </el-header>
      <el-main class="main">
      
      </el-main>
      <el-footer class="footer">Footer</el-footer>
    </el-container>
</template>


<script lang="ts" setup>
import { Menu as IconMenu, Message, Setting } from "@element-plus/icons-vue";
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";


</script>

<style>
.app{
  width: 100% !important;
}
</style>

<style scoped>



.main{
  width: 100%;
  display: block;
  height: 1000px;
  background-color: red;
}

.footer{
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

.header{
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
