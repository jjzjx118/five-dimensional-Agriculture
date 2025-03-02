<template>
  <el-container>
    <el-header class="header">
      <Header />
    </el-header>
    <el-main class="main"> <Body /> </el-main>
    <el-footer><Footer /></el-footer>
  </el-container>
</template>

<script lang="ts" setup>
import { ElContainer, ElMain, ElFooter, ElHeader } from "element-plus";
import Header from "./HomePage_header.vue";
import Body from "./HomePage_body.vue";
import Footer from "./HomePage_footer.vue";

defineOptions({
  name: "HomePage",
});
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
  /* object-fit: cover; */
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  /* padding: 0 40px; */
}

.el-header {
  background-color: unset;
  color: unset;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: unset;
}

.el-footer {
  padding: unset;
  height: unset;
  margin-bottom: 8px;
}

.el-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header {
  background-color: #3269b1;
}

.el-header {
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
