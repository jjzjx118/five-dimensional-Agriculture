<template>
  <ElAffix class="top-part">
    <el-menu
     :default-active="activeIndex"
      text-color="#075234"
      active-text-color="#075234"
      class="header"
      mode="horizontal"
      @select="handleSelect"
    >
      <div class="logo-part">
        <img class="logo" src="@/assets/logo2.png" alt="本地图片" />
        九江五维农业科技开发有限公司
      </div>
      <div class="menu-part">
        <el-menu-item index="cpn-des">公司简介</el-menu-item>
        <el-menu-item index="prd-des">产品简介</el-menu-item>
        <el-menu-item index="shop-link">店铺链接</el-menu-item>
        <el-menu-item index="contact-us">联系我们</el-menu-item>
      </div>
    </el-menu>
  </ElAffix>
</template>

<script lang="ts" setup>
import { ElAffix, ElMenu, ElMenuItem, ElSubMenu } from "element-plus";
import { ref } from 'vue'
const activeIndex = ref('cpn-des')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
  scrollToSection(key);
};

const scrollToSection = (id) => {
  console.log(1111, String(id));
  const targetElement = document.querySelector(`#${id}`);
  console.log(2222, targetElement);

  if (id === "cpn-des") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else if (targetElement) {
    const offset = 50; // 偏移量，单位为像素
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  } else {
    console.log("Element not found");
  }
};

defineOptions({
  name: "Header",
});
</script>

<style>
.el-menu--horizontal {
  --el-menu-horizontal-height: 56px;
  align-items: center;
  display: block;
}

/* .el-menu-item.is-active {
    color: #E8F1EE
} */

.el-menu--horizontal.el-menu {
    border-bottom: solid 1px var(--el-menu-border-color);
}

.logo-part {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}

.top-part {
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ebeef5;
}

.logo {
  margin-left: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  aspect-ratio: 269/211;
  margin-right: 15px;
}

.menu-part {
  display: flex;
  flex-direction: row;
  right: 0px;
}

.top_img {
  width: 100%;
  height: 435px;
  display: block;
}
</style>
