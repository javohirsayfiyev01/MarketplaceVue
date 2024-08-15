<template>
  <div>
    <ProductItem :product="product"/>
  </div>
</template>

<script>
import ProductItem from '../components/ItemsProductComponents/ProductItem.vue';

export default {
  components: {
    ProductItem
  },
  computed: {
    product() {
      let products = this.$store.getters.getProducts
      let id = this.$route.query.id
      let product = products.find(product => product.id === id);
      return product;
    },
  },
};
</script>

<style>

</style>
