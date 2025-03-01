<template>
  <div class="body">
    <div class="company_des">
      <span>公司简介</span>
      <span
        >九江五维农业科技开发有限公司是扎根于江西省九江市濂溪区的现代化农业科技企业，专注于羊肚菌产业的全链条开发与创新实践。公司依托九江市得天独厚的生态资源，通过"智能农业管理+生态种植"模式，构建了从菌种培育、标准化种植到精深加工的完整产业体系，致力于打造全国羊肚菌产业标杆品牌。
        公司核心优势体现在三方面：
        科技赋能种植：自主研发羊肚菌菌种培育技术，结合智能温控大棚和物联网监测系统，实现生长环境精准调控，亩产量较传统模式提升30%；
        生态循环模式：创新采用"菌+菜"轮作套种体系，既提高土地利用率，又通过菌渣还田技术实现土壤改良，形成绿色可持续的种植闭环；
        全产业链布局：拥有标准化种植基地200亩，配套建设冷链物流中心和深加工车间，开发羊肚菌干品、即食食品、营养提取物等多元产品。
        作为九江市农业科技示范单位，公司已取得农产品初加工资质和多项实用新型专利，与省农科院建立产学研合作，持续推动羊肚菌种植技术迭代升级。未来将继续深化"公司+基地+农户"合作模式，通过技术输出带动区域特色农业发展，践行"让珍稀菌种走进百姓餐桌"的企业使命。</span
      >
    </div>

    <div class="products_des">
      <span>产品简介</span>
      <span>
        羊肚菌以"天然珍馐·科技滋养"为核心价值，依托现代化农业科技与生态种植体系，为消费者提供高品质食用菌产品。羊肚菌作为药食同源的珍稀菌种，含18种氨基酸（包括8种人体必需氨基酸）、8种维生素及硒、锗等微量元素，其蛋白质含量与牛乳、鱼肉相当，被誉为"素中之荤"，兼具增强免疫、护肝养胃及抗氧化防癌等功效，其中有机锗成分可强化体质，硒元素协同维生素E抑制肿瘤细胞活性。公司通过自主研发菌种培育技术，结合物联网环境监测系统实现智能种植，创新"菌+菜"轮作套种模式提升土地利用率，并以菌渣还田形成生态闭环，亩产量较传统模式提升30%。产品涵盖干制羊肚菌、即食菌片、菌粉胶囊等品类，采用低温冻干、非油炸工艺及超微粉碎技术，保留90%以上活性成分；种植基地通过有机转换认证，产品经132项安全检测并符合出口欧盟标准，与江西省农科院联合研发保障技术领先性，以全产业链品控重新定义健康食材价值，让千年药典珍品焕发现代活力。
      </span>
    </div>
    <div class="shop_link">
      <span>店铺链接</span>
      <span> </span>
    </div>
    <div class="contact_us">
      <span>联系我们</span>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMenu, ElMenuItem, ElSubMenu } from "element-plus";

defineOptions({
  name: "Body",
});
</script>

<style>
.body {
  width: 100%;
  height: fit-content;
  background-color: aqua;
  display: flex;
  flex-direction: column;
}

.company_des,
.products_des,
.shop_link {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
}

.company_des {
  background-color: red;
}

.products_des {
  background-color: yellow;
}

.shop_link {
  background-color: rgb(219, 29, 178);
}
</style>
