<template>
  <section class="product-item">
    <div class="product-item__container container">
    <div class="product-item__img-box">
      <img src="../img/product/Old_fashion_blecpreview 2.svg" alt="404" class="product-item__img" width="100%" height="auto">
    </div>

    <div class="product-item__description">
      <div class="product-item__description-title">
        <h3>Luxurious Elixir</h3>
      </div>
      <div class="product-item__description-info">
        <p>Step into a world of unparalleled opulence with Luxurious Elixir, an exquisite fragrance that weaves an enchanting symphony of gold and luxury. This gilded elixir is a celebration of sophistication, crafted with the finest essences and imbued with the allure of precious golden hues.</p>
      </div>
      <div class="product-item__description-imgs">
        <img src="../img/product/Old_fashion_balck_and_gold_color_perfume-removebg-preview 1.png"  alt="404" width="88px" height="150px">
        <img src="../img/product/Old_fashion_balck_and_gold_color_perfume-removebg-preview 1.png"  alt="404" width="88px" height="150px">
      </div>
      <div class="product-item__description-price">
        <p>{{}}$</p>
      </div>

    </div>
  </div>
  </section>
</template>
<script>
export default {

}
</script>
<style scoped>
.product-item{
  margin-top: 90px;
}
.product-item__container{
  display: flex;
  justify-content: space-between;
  gap: 100px;
  color: white;
}
.product-item__description{
  width: 600px;
  height: 660px;
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
  width: 600px;
  height: auto;
  cursor: pointer;
  margin-bottom: 45px;
}
.product-item__description-price{
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 45px;
  color: #AB572D;
}
</style>