<template>
  <div class="body">
    <img class="top_img" src="@\assets\image\bgd_2.png" alt="本地图片" />

    <div id="cpn-des" class="company_des">
      <div class="cpn-left">
        <div class="mian-text">公司简介</div>
        <div class="sub-text">专注现代农业科技发展，打造绿色可持续未来</div>
      </div>
      <div class="cpn-right">
        &emsp;&emsp;九江五维农业科技开发有限公司是扎根于江西省九江市濂溪区的现代化农业科技企业，专注于羊肚菌产业的全链条开发与创新实践。公司依托九江市得天独厚的生态资源，通过"智能农业管理+生态种植"模式，构建了从菌种培育、标准化种植到精深加工的完整产业体系，致力于打造全国羊肚菌产业标杆品牌。
        <br />
        <br />
        &emsp;&emsp;作为九江市农业科技示范单位，公司已取得农产品初加工资质和多项实用新型专利，与省农科院建立产学研合作，持续推动羊肚菌种植技术迭代升级。未来将继续深化"公司+基地+农户"合作模式，通过技术输出带动区域特色农业发展，践行"让珍稀菌种走进百姓餐桌"的企业使命。
      </div>
    </div>

    <div id="prd-des" class="products_des">
      <div class="prd-top">产品简介</div>
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
      <span>店铺链接</span>
      <span> </span>
    </div>

    <div id="contact-us" class="contact_us">
      <span>联系我们</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElImage, ElMenu, ElMenuItem, ElSubMenu } from "element-plus";
// import imageUrl from 'src/assets/image/bgd_2.png';
// console.log(imageUrl);

const urls = ["@/assets/image/Home_Product_IMG/morel_chaocai2.png"];

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

.company_des {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
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
  display: flex;
  left: 0;
  top: 0;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
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
  justify-content: flex-end;
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
  /* margin: 12px 0px; */
}

.prd-body {
  text-align: left;
  font-size: 1.125rem;
  color: rgb(75 85 99);
}

.prd-img-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content:center ;
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
  /* padding: 20px; */
  margin: 20px;
}

.company_des {
  /* background-color: red; */
}

.products_des {
  background-color: yellow;
}

.shop_link {
  background-color: rgb(219, 29, 178);
}
</style>
