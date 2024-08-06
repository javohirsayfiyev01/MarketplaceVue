<template>
  <section class="product-item">
    <div class="product-item__container container">
      <div class="product-item__img-box">
        <img :src="product.images[0]" alt="404" class="product-item__img" width="100%" height="600px">
      </div>
      <div class="product-item__description">
        <div class="product-item__description-title">
          <h3>{{ product.producttitle }}</h3>
        </div>
        <div class="product-item__description-info">
          <p>{{ product.description }}</p>
        </div>
        <div class="product-item__description-imgs">
          <img :src="product.images[1]" alt="404" width="88px" height="150px">
          <img :src="product.images[2]" alt="404" width="88px" height="150px">
        </div>
        <button class="button product-item__btn">
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
