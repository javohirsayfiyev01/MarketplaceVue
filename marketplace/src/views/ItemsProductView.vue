<template>
  <div>
<ProductItem/>
  </div>
</template>
<script>
import ProductItem from '@/components/ProductItem.vue';
export default {
  components:{
    ProductItem
  },
  products(){
      return this.$store.getters.getProducts
  }

}
</script>
<style>

</style>