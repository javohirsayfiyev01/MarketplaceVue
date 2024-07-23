<template>
  <div class="our-values">
    <div class="our-values__container container">
      <div class="img-text-info">
        <div class="img-text-info__picture-box">
          <img src="@/img/oure-values__img.svg" alt="404">
        </div>
        <div class="img-text-info__info">
          <h1 class="img-text-info__title">Ansar Collection</h1>
          <p class="img-text-info__description">
            Ansar Collection - bu yuqori darajadagi zamonaviy ayollar kiyim brendi bo'lib, hashamatli va sifatli liboslari bilan tanilgan. Brend o'z mijozlariga noyob va eksklyuziv dizaynlarni taqdim etadi, har bir libos o'ziga xos bo'lib, zamonaviy modaning eng so'nggi tendensiyalarini aks ettiradi. Yuqori sifatli materiallar va nozik detallar bilan ishlangan bu kiyimlar, nafaqat tashqi ko'rinishni, balki qulaylikni ham ta'minlaydi. Ansar Collection moda ixlosmandlari orasida katta obro'ga ega bo'lib, har bir libos haridorning shaxsiy uslubini va o'ziga xosligini namoyish etadi. Bu brendning kiyimlari har qanday tadbirda o'ziga jalb qiluvchi ko'rinishni ta'minlaydi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.our-values{
  width: 100%;
  height: auto;
  background-color: rgb(14, 13, 13);
}
.img-text-info{
  display: flex;
  align-items: center;
  gap: 110px;
  /* justify-content: space-between; */
}
.img-text-info__picture{
  margin: 0;
  padding: 0;
}
.img-text-info__picture-box{
  margin-left: -163px;
}
.img-text-info__info{
  width: 587px;
  height: 425px;
  margin: 0;
  padding: 0;
  /* margin-left: 80px; */
  margin-top: 70px;
  margin-bottom: 70px;
  color: white;
}
.img-text-info__title{
  font-weight: 500;
  font-size: 50px;
  padding-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
}
.img-text-info__info{
  font-weight: 400;
  font-size: 20px;
}
</style>