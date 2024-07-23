<template >
  <ul>

    <!-- <OfferShop/>  -->
    <HeroShop/>
    <FilterShop/>
    <!-- <ProductsShop v-for="product in products" :key="product" :product="product"/> -->
    <ProductsShop/>
    <SiteFooter/>
  </ul>

</template>
<script>
import OfferShop from "../components/ShopComponents/OfferShop.vue";
import HeroShop from "../components/ShopComponents/HeroShop.vue";
import FilterShop from "../components/ShopComponents/FilterShop.vue";
import ProductsShop from "../components/ShopComponents/ProductsShop.vue";
import SiteFooter from "../components/SiteFooter.vue";
export default {
data() {
  return {
    data() {
      return {
        // products:[
        //   {
        //     title: 'Golden Luminary',
        //     bolim: 'Erkak',
        //     davlat: 'Usa',
        //     img: '',
        //     malumot: '',
        //     joylashuv: 'Bukhara',
        //     price: '$ 220.00',
        //     ml: '100ml',
        //     btn: 'Add to Bag',
        //   },
        //   {
        //     title: 'Gucci',
        //     bolim: 'Erkak',
        //     davlat: 'Turkiy',
        //     img: '',
        //     malumot: '',
        //     joylashuv: 'Bukhara',
        //     price: '$ 100.00',
        //     ml: '150ml',
        //     btn: 'Add to Bag',
        //   },
        // ]
      }
    },
  }
},
methods: {

},
components:{
  OfferShop,
  HeroShop,
  FilterShop,
  ProductsShop,
  SiteFooter,
}
}
</script>
<style>

</style>
