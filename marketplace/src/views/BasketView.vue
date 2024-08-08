<template>
  <div>
<BasketShop v-for="product in korProducts" :key="product.id"
            :product="product"  />
  </div>
</template>
<script>
import BasketShop from "../components/BasketShop.vue";
export default {
  components:{
    BasketShop,
  },
  computed:{
    korProducts(){
      return this.$store.getters.getKorzinka
    }
  }

}
</script>
<style scoped>

</style>