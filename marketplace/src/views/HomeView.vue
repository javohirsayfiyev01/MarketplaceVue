<template lang="">
  <div>
        <HeroHome/>
        <OurValuesHome/>
       <SaleBannerHome/>
  </div>
       <SiteFooter/>
       <!-- <ProductItem/> -->
</template>

<script>
import HeroHome from "@/components/HomeComponents/HeroHome.vue";
import OurValuesHome from "@/components/HomeComponents/OurValuesHome.vue";
import SaleBannerHome from "@/components/HomeComponents/SaleBannerHome.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import ProductItem from "@/components/ProductItem.vue";
export default {
data() {
  return {

  }
},
components:{
  HeroHome,
  OurValuesHome,
  SaleBannerHome,
  SiteFooter,
  ProductItem,
}
}
</script>
<style lang="">

</style>