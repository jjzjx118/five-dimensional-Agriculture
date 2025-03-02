<template>
  <div class="body">
    <img class="top_img" src="@\assets\image\bgd_2.png" alt="本地图片" />

    <div id="cpn-des" class="company_des">
      <div class="cpn-left">
        <div class="mian-text-font">公司简介</div>
        <!-- <div class="sub-text">专注现代农业科技发展，打造绿色可持续未来</div> -->
      </div>
      <div class="cpn-right">
        &emsp;&emsp;九江五维农业科技开发有限公司是扎根于江西省九江市濂溪区的现代化农业科技企业，专注于羊肚菌产业的全链条开发与创新实践。公司依托九江市得天独厚的生态资源，通过"智能农业管理+生态种植"模式，构建了从菌种培育、标准化种植到精深加工的完整产业体系，致力于打造全国羊肚菌产业标杆品牌。
      
        作为九江市农业科技示范单位，公司已取得农产品初加工资质和多项实用新型专利，与省农科院建立产学研合作，持续推动羊肚菌种植技术迭代升级。未来将继续深化"公司+基地+农户"合作模式，通过技术输出带动区域特色农业发展，践行"让珍稀菌种走进百姓餐桌"的企业使命。
      </div>
    </div>

    <div id="prd-des" class="products_des">
      <div class="prd-top mian-text-font">产品简介</div>
      <div class="prd-body">
        &emsp;&emsp;羊肚菌以"天然珍馐·科技滋养"为核心价值，依托现代化农业科技与生态种植体系，为消费者提供高品质食用菌产品。羊肚菌作为药食同源的珍稀菌种，含18种氨基酸（包括8种人体必需氨基酸）、8种维生素及硒、锗等微量元素，其蛋白质含量与牛乳、鱼肉相当，被誉为"素中之荤"，兼具增强免疫、护肝养胃及抗氧化防癌等功效，其中有机锗成分可强化体质，硒元素协同维生素E抑制肿瘤细胞活性。公司通过自主研发菌种培育技术，结合物联网环境监测系统实现智能种植，创新"菌+菜"轮作套种模式提升土地利用率，并以菌渣还田形成生态闭环，亩产量较传统模式提升30%。产品涵盖干制羊肚菌、即食菌片、菌粉胶囊等品类，采用低温冻干、非油炸工艺及超微粉碎技术，保留90%以上活性成分；种植基地通过有机转换认证，产品经132项安全检测并符合出口欧盟标准，与江西省农科院联合研发保障技术领先性，以全产业链品控重新定义健康食材价值，让千年药典珍品焕发现代活力。
      </div>
      <div class="prd-img-container">
        <img
          class="prd-img"
          src="@/assets/image/Home_Product_IMG/morel_soup.png"
          alt="本地图片"
        />
        <img
          class="prd-img"
          src="@/assets/image/Home_Product_IMG/morel_doc.png"
          alt="本地图片"
        />
        <img
          class="prd-img"
          src="@/assets/image/Home_Product_IMG/morel_chaocai2.png"
          alt="本地图片"
        />
      </div>
    </div>

    <div id="shop-link" class="shop_link">
      <div class="prd-top mian-text-font">店铺链接</div>

      <div class="prd-link-container">
        <div class="prd-shop">
          <div class="prd-link-icon">
            <img
              class="svg-icon"
              src="@\assets\Icons\taobao.svg"
              alt="SVG Icon"
            />
          </div>
          <div class="prd-link-text">淘宝店铺</div>
          <el-button
            @click="handleClick('tb')"
            class="accessBtn"
            color="#2B7A0B"
            >立即访问</el-button
          >
        </div>

        <div class="prd-shop">
          <div class="prd-link-icon">
            <img class="svg-icon" src="@\assets\Icons\jd.svg" alt="SVG Icon" />
          </div>
          <div class="prd-link-text">京东店铺</div>
          <el-button class="accessBtn" disabled color="#2B7A0B"
            >暂未开通</el-button
          >
        </div>

        <div class="prd-shop">
          <div class="prd-link-icon">
            <img
              class="svg-icon"
              src="@\assets\Icons\wechat.svg"
              alt="SVG Icon"
            />
          </div>
          <div class="prd-link-text">微信小店</div>
          <el-button class="accessBtn" disabled color="#2B7A0B"
            >暂未开通</el-button
          >
        </div>
      </div>
    </div>

    <div id="contact-us" class="contact_us">
      <div>
        <div class="mian-text-font">联系我们</div>
        <div style="margin-top: 8px">期待与您建立长期合作关系</div>
      </div>
      <div class="contact-card shadowBorder">
        <div class="contact-card-inner">
          <div class="contact-item">
            <img
              class="svg-icon-small"
              src="@\assets\Icons\phone.svg"
              alt="SVG Icon"
            />
            <span class="contact-text">400-888-1234</span>
          </div>
          <div class="contact-item">
            <img
              class="svg-icon-small"
              src="@\assets\Icons\mail.svg"
              alt="SVG Icon"
            />
            <span class="contact-text">jjzjx118@qq.com</span>
          </div>

          <div class="contact-item">
            <img
              class="svg-icon-small"
              src="@\assets\Icons\address.svg"
              alt="SVG Icon"
            />
            <span class="contact-text">江西省九江市奥林匹克花园</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElImage, ElMenu, ElMenuItem, ElSubMenu, ElButton } from "element-plus";
// import imageUrl from 'src/assets/image/bgd_2.png';
// console.log(imageUrl);

const handleClick = (link) => {
  console.log(link);
  window.open("https://www.taobao.com", "_blank");
};

defineOptions({
  name: "Body",
});
</script>

<style scoped>
.body {
  width: 100%;
  height: fit-content;
  background-color: rgb(249 250 251);
}

.top_img {
  object-fit: cover;
}

.company_des {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  margin-top: 15px;
}

.cpn-left {
  flex: 0 0 30%;
  flex-direction: column;
  display: flex;

  padding: 20px; /* 添加内边距 */
  /* align-items: center;
  justify-content: center; */
}

.mian-text {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
}
.cpn-des-main-text {
  display: flex;
  left: 0;
  top: 0;
}

.sub-text {
  text-align: left;
  font-size: 1.125rem;
  color: rgb(75 85 99);
  margin-top: 8px;
}

/* 右边子容器样式 */
.cpn-right {
  flex: 1; /* 右边填充剩余宽度 */
  display: flex;
  justify-content: center;
  padding: 20px; /* 添加内边距 */
  text-align: left;
  font-size: 1.125rem;
  color: rgb(75 85 99);
}

.prd-top {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  margin: 8px 0px;
  text-align: center;
  margin: 0px 0px 30px 0px;
}

.prd-body {
  text-align: left;
  font-size: 1.125rem;
  color: rgb(75 85 99);
  margin: 20px 0px;
}

.prd-img-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin: 20px 0px;
}

.prd-img {
  aspect-ratio: 1 / 1;
  object-fit: cover; /* 让图片覆盖整个容器 */
  width: 20%;
  margin: 0px 50px;
}

.products_des,
.shop_link {
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: rgb(249 250 251);
  margin: 20px;
}

.company_des {
  /* background-color: red; */
}

.products_des {
  /* background-color: yellow; */
}

.prd-link-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin: 20px 0px;
  background-color: rgb(249 250 251);
}

.prd-shop {
  aspect-ratio: 1 / 1;
  width: 20%;
  margin: 0px 50px;
  border: 1px solid #ccc;
  box-shadow: 0 8px 10px -0 rgba(0, 0, 0, 0.1);
  background-color: rgb(255 255 255);
  transition-duration: 0.3s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}
.prd-link-icon {
  width: 30%;
  aspect-ratio: 1 / 1;
  background-color: rgb(219, 29, 178);
  border-radius: 9999px;
  background-color: rgb(43 122 11 / 0.1);

  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-icon {
  width: 50%;
  height: 50%;
}

.prd-link-text {
  font-size: 1.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  transform: translateY(20px);
}
.accessBtn {
  width: 70%;
  aspect-ratio: 1/4;

  margin-top: 40px;
}

.shop_link {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
  margin: 30px 0px;
}

/* CONTACT US */

.contact_us {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact-card {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
  margin-bottom: 20px;

  background-color: rgb(255 255 255);
  height: 250px;
}

.contact-card-inner {
  display: flex; /* 启用 Flex 布局 */
  flex-direction: column; /* 子元素垂直排列 */
  align-items: flex-start;
}

.svg-icon-small {
  width: 20px;
  height: 20px;
  /* margin-right: 10px; */
}

.contact-text {
  font-size: 1.25rem;
  text-align: left;
  margin-left: 10px;
}

.contact-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}
</style>
