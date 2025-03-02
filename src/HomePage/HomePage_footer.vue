<template>
    <div class="footer">
        ©2025 九江五维农业科技开发有限公司  粤A2-20044005号  粤公网安备44030702002388号
    </div>
</template>

<script lang="ts" setup>
import { ElContainer, ElMain, ElFooter, ElHeader } from "element-plus";
import Header from "./HomePage_header.vue";
import Body from "./HomePage_body.vue";

defineOptions({
  name: "Footer",
});
</script>

<style>

.footer {
 height: 30px;
 background-color: rgb(249 250 251);
 display: flex;
 justify-content: center;
 align-items: center;
 /* color: white; */

}

</style>
