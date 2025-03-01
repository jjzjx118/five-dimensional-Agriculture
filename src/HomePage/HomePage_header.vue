<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="0">LOGO Here</el-menu-item>
    <el-menu-item index="1">公司简介</el-menu-item>
    <el-menu-item index="2">产品简介</el-menu-item>
    <el-menu-item index="3">店铺链接</el-menu-item>
    <el-menu-item index="4">联系我们</el-menu-item>
  </el-menu>
  <img class="top_img" src="@/assets/image/bgd_2.png" alt="本地图片" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMenu, ElMenuItem, ElSubMenu } from "element-plus";

const activeIndex = ref("1");
const activeIndex2 = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

defineOptions({
  name: "Header",
});
</script>

<style>
.el-menu--horizontal {
  --el-menu-horizontal-height: 50px;
  align-items: center;
  display: block;
}


.top_img {
  width: 100%;
  height: 435px; 
}
</style>
