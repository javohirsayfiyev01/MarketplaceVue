<template>
  <section class="product-item">
    <div class="product-item__container container">
      <a class="icon-right" @click="backpage">
        <img src="@/img/icon/arrow-right.svg" alt="404" width="35" height="35">
      </a>
      <div class="product-item__img-box">
        <img :src="selectedImage" alt="404" class="product-item__img" width="100%" height="600px">
      </div>
      <div class="product-item__description">
        <div class="product-item__description-title">
          <h3>{{ product.producttitle }}</h3>
        </div>
        <div class="product-item__description-info">
          <p>{{ product.description }}</p>
        </div>
        <div class="product-item__description-imgs">
          <img
            class="product-item__img1"
            :src="product.images[1]"
            alt="404"
            width="88px"
            height="150px">
          <img
            class="product-item__img2"
            :src="product.images[2]"
            alt="404"
            width="88px"
            height="150px">
        </div>
        
        <div>
          <p class="price">{{ product.tanNarxi }}$</p>
        </div>

        <button class="button product-item__btn"
        @click="addProducts(product.id)">
              Savatga qo'shish
        </button>
      </div>
    </div>
  </section>
</template>




<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    addProducts(id) {
      this.$store.dispatch('addProducts', id);
      alert("Mahsulot savatga qo'shildi !");
    },
    backpage() {
      this.$router.push('/shop');

    },
  },
};
</script>




<style scoped>
.product-item {
  margin-top: 90px;
}
.product-item__container {
  display: flex;
  justify-content: space-between;
  gap: 100px;
  color: white;
}
.icon-right{
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  cursor: pointer;
}
.icon-right:hover{
  opacity: 0.6;
}
.product-item__img-box{
  width: 350px;
  height: 600px;

}
.product-item__description {
  width: 600px;
  height: 660px;
}
.product-item__description-title {
  font-weight: 500;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 45px;
}
.product-item__description-info {
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 45px;
}
.product-item__description-imgs {
  width: 600px;
  height: auto;
  cursor: pointer;
  margin-bottom: 45px;
}
.product-item__description-imgs img:hover{
  cursor: pointer;
  opacity: 0.8;
}
.product-item__description-imgs img:not(:last-child){
  margin-right: 15px;
}

.product-item__btn{
  width: 300px;
  margin-top: 50px;
}
.product-item__btn:hover{
  background-color: white;
  color: #ab572d;
}
</style>
