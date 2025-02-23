<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css';

</script>

<template>
  <div>
    <!-- 轮播器 -->
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img src="https://via.placeholder.com/1920x200?text=Slide+1" alt="Slide 1">
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/1920x200?text=Slide+2" alt="Slide 2">
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/1920x200?text=Slide+3" alt="Slide 3">
      </swiper-slide>
    </swiper>
    <!-- 菜单栏 -->
    <div class="menu-bar">
      <button v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === index }" @click="activeTab = index">
        {{ tab }}
      </button>
    </div>
    <!-- 内容展示区域 -->
    <div class="content">
      <div v-if="activeTab === 0">这是第一个 tab 的内容</div>
      <div v-if="activeTab === 1">这是第二个 tab 的内容</div>
      <div v-if="activeTab === 2">这是第三个 tab 的内容</div>
      <div v-if="activeTab === 3">这是第四个 tab 的内容</div>
      <div v-if="activeTab === 4">这是第五个 tab 的内容</div>
    </div>
  </div>

  
</template>


<style scoped>
.swiper {
  width: 100%;
  height: 200px;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-bar {
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 10px 0;
}

.menu-bar button {
  margin: 0 10px;
  padding: 5px 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.menu-bar button.active {
  font-weight: bold;
  color: #646cff;
}

.content {
  padding: 20px;
}
</style>
