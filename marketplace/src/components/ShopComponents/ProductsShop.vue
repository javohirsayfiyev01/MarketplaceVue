<template>
  <div>
  <section class="products-shop">
    <div class="products-shop__container container">
      <div class="products-shop-catalog">
        <div class="products-shop-catalog__content">
          <li  class="products-shop-catalog-card">
            <div class="products-shop-catalog-card__img" @mouseover="isHeddin">
              <a href="#">
                <img :src="product.images[0]" alt="404" width="100%" height="100%">
              </a>
            </div>
            <div class="products-shop-catalog-card__info">
                <h2 class="products-shop-catalog-card__title">{{ product.producttitle }}</h2>
              <div class="products-shop-catalog-card__wrapper">
                <div class="products-shop-catalog-card__price-info">
                  <p class="products-shop-catalog-card__price">{{ product.narxi }}$</p>
                  <span class="products-shop-catalog-card__ml">{{ product.olcham }}ml</span>
                </div>
                <button class="products-shop-catalog-card__btn button">
                  Add to Bag
                </button>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
</section>

<section class="product-item"
:class="{ active: isActive }">
  <div class="product-item__container container">
    <div class="product-item__img-box">
      <img :src="product.images[0]" alt="404" class="product-item__img" width="100%" height="auto">
    </div>
    <div class="product-item__description">
      <div class="product-item__description-title">
        <h3>{{product.producttitle}}</h3>
      </div>
      <div class="product-item__description-info">
        <p>{{product.description}}</p>
      </div>
      <div class="product-item__description-imgs">
        <img :src="product.images[1]"  alt="404" width="88px" height="150px">
        <img :src="product.images[2]"  alt="404" width="88px" height="150px">
      </div>
      <div class="product-item__description-price">
        <p>{{product.narxi }}$</p>
      </div>
    </div>
  </div>
</section>
</div>
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
      isActive: false
    }
  },

  methods: {
    isHeddin(){
      this.isActive = !this.isActive
console.log('salom');

    }

    // openModal(){
    //   this.openModal('ModalShop')
    // },
    // AddProductItem(){
    //   this.push()
    // },
    // addProItem(){
    //   this.$AddProduct.push('ProductItem')
    // },
  },

}
</script>
<style scoped>
        .activ {
          display: block;
        }

            /* ProductsShop */
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


          /* ProductItem */
.product-item{
  margin-top: 90px;
  background-color: #a3a3a3;
}

.product-item__container{
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: white;
}
.product-item__description{
  width: 500px;
  height: 500px;
}
.product-item__description-title{
font-weight: 500;
font-size: 40px;
line-height: 50px;
margin-bottom: 45px;
}
.product-item__description-info{
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 45px;
}
.product-item__description-imgs{
  width: 230px;
  height: auto;
  cursor: pointer;
}
  /*
.product-item__description-price{
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 45px;
  color: #AB572D;
} */
</style>