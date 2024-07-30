<template>
  <section class="products-shop">
    <div class="products-shop__container container">
      <div class="products-shop-catalog">
        <div class="products-shop-catalog__content">

          <li  class="products-shop-catalog-card">
            <div class="products-shop-catalog-card__img">
              <a href="#"><img src="@/img/product/Atir/Element 8_1.jpg" alt="404" width="100%" height="100%"></a>
            </div>
            <div class="products-shop-catalog-card__info">
                <h2 class="products-shop-catalog-card__title">{{ state.producttitle }}</h2>
              <div class="products-shop-catalog-card__wrapper">
                <div class="products-shop-catalog-card__price-info">
                  <p class="products-shop-catalog-card__price">{{ product.narxi }}</p>
                  <span class="products-shop-catalog-card__ml">{{ product.olcham}}</span>
                </div>
                <button class="products-shop-catalog-card__btn button" @click="loadProduct">
                  Add to Bag
                </button>
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
  computed:{

  },
  methods: {
    openModal(){
      this.openModal('ModalShop')
    },
    AddProductItem(){
      this.push()
    },
    addProItem(){
      this.$AddProduct.push('ProductItem')
    },


  },

}
</script>
<style scoped>
.products-shop{
  margin-top: 30px;
}
.products-shop-catalog__content{
  display: grid;
  margin: 0 auto 0 auto;
  padding: 0;
  grid-row-gap: 32px;
  grid-column-gap: 40px;
  grid-template-columns: repeat(4, 0fr);
}
.products-shop-catalog-card{
  width: 260px;
  height: 450px;
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

.products-shop-catalog-card__info{
  width: 210px;
  height: 90px;
  margin: 0px 25px 0 25px;
}
.products-shop-catalog-card__title{
  font-weight: 500;
  font-size: 20px;
  text-align: center;
}
.products-shop-catalog-card__wrapper{
  margin: 10px 0 0 0;
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
  margin: 15px 0 0 0;
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