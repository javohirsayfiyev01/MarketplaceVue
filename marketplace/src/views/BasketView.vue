<template>
  <div>
<BasketShop :product="korProducts" />
  </div>
</template>
<script>
import BasketShop from "../components/BasketComponents/BasketShop.vue";
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

</style>+3