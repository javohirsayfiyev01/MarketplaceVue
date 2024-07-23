<template>
  <div class="sale-banner">
    <div class="sale-banner__container container">
      <img class="sale-banner__img" src="@/img/sale-img.svg" alt="404">
      <div class="sale-banner__info">
        <h1 class="sale-banner__title">
          Yil yakuni bo'yicha atir sotuvi! 50% gacha chegirma
        </h1>
        <p class="sale-banner__description">
          Bizning eksklyuziv parfyumeriya sotuvi davomida aql bovar qilmaydigan narxlarda premium atirlarning ajoyib kolleksiyasini kashf eting!
        </p>
        <a href="/shop">
          <button class="button">Ko'proq bilish</button>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.sale-banner{
  position: relative;
  margin-top: 70px;
  width: 100%;
  height: 540px;
}
.sale-banner__info{
  position: fixed;
  width: 600px;
  height: 312px;
  bottom: 0;
  margin: 0;
  padding: 0;
  margin-bottom: 115px;
  padding-left: 15px;
  color:white;
}
.sale-banner__title{
  font-weight: 500;
  font-size: 50px;
  background-color: transparent;

}
.sale-banner__description{
  font-weight: 300;
  font-size: 20px;
  margin-top: 17px;
  margin-bottom: 65px;
  background-color: transparent;

}
.sale-banner__container {
position: relative;
}
.sale-banner__img{
  width: 100%;
  height: auto;
  opacity: 0.6;
}
.sale-banner__info{
position: absolute;

}
</style>