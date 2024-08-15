<template>
  <section class="products-shop">
    <div class="products-shop__container container">
      <div class="products-shop-catalog">
        <div class="products-shop-catalog__content">
          <li  class="products-shop-catalog-card">
            <RouterLink :to="`/itemsproductView?id=${product.id}`" class="products-shop-catalog-card__img">
              <a href="#">
                <img :src="product.images[0]" alt="404" width="100%" height="345px">
              </a>
            </RouterLink>

            <div class="products-shop-catalog-card__box">
              <div class="products-shop-catalog-card__info">
                <h2 class="products-shop-catalog-card__title">{{ product.producttitle }}</h2>
              <div class="products-shop-catalog-card__wrapper">
                <div class="products-shop-catalog-card__price-info">
                  <p class="products-shop-catalog-card__price">{{ product.narxi }}$</p>
                  <span class="products-shop-catalog-card__ml">{{ product.olcham }}ml</span>
                </div>
                <button class="products-shop-catalog-card__btn button"
                 @click="addProducts(product.id)">
                  Savatga qo'shish
                </button>
              </div>
            </div>
            </div>
          </li>
        </div>
      </div>
    </div>
</section>
</template>
<script>


export default {
  name: 'ProductsShop',

  props:{
    product:{
      type: Object,
      requared: true
    }
  },
  data() {
    return {
    }
  },

  methods: {
    addProducts(id){
      this.$store.dispatch('addProducts', id)
      alert("Mahsulot savatga qo'shildi")
    }
    }


}
</script>
<style scoped>
            /* ProductsShop */
.products-shop-catalog-card{
  width: 260px;
  margin: 0;
  padding: 0;
  background: linear-gradient(to right, rgb(170, 170, 170), #a3a3a3);
}
.products-shop-catalog-card__img{
  width: 100%;
  height: 350px;
  margin: 0;
  padding: 0;
}
.products-shop-catalog-card__box{
  width: 260px;
  height: 100px;
}
.products-shop-catalog-card__info{
  margin: 0px 25px 0 25px;
}
.products-shop-catalog-card__title{
  width: 100%;
  height: 45px;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
}
.products-shop-catalog-card__wrapper{
  margin: 0;
}
.products-shop-catalog-card__price-info{
  display: flex;
  gap: 100px;
  align-items: center;
  justify-content: center;
}
.products-shop-catalog-card__price{
  font-weight: 700;
  font-size: 16px;
  color: rgb(171, 87, 45);
}
.products-shop-catalog-card__ml{
  font-weight: 400;
  font-size: 16px;
}
.products-shop-catalog-card__btn{
  width: 100%;
  height: 30px;
  font-weight: 300;
  font-size: 15px;
  margin: 3px 0 0 0;
  padding: 0;
  border-radius: 10px;
}
.products-shop-catalog-card__btn:hover{
  opacity: 0.7;
  background-color: white;
  color: rgb(171, 87, 45);
  font-weight: 300;
  font-size: 15px;
}

</style>