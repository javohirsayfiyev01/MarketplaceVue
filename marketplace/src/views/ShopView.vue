<template >
  <div>

    <!-- <OfferShop/>  -->
    <HeroShop/>
    <FilterShop/>
    <ul class="productsshop container">
      <ProductsShop v-for="product in products" :key="product.id" :product="product"/>
    </ul>

    <SiteFooter/>
  </div>

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
},
computed:{
    products(){
      return this.$store.getters.getProducts
    }
  }
}
</script>
<style>
.productsshop{
  display: grid;
  margin: 0 auto 0 auto;
  padding: 0;
  grid-row-gap: 32px;
  grid-column-gap: 30px;
  grid-template-columns: repeat(4, 0fr);
  margin-top: 30px;
}



</style>
