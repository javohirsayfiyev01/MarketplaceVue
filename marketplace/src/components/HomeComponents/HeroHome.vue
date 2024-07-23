<template>
<div class="hero">
  <div class="hero__container container">
    <div class="hero__text-wrapper">
      <h1 class="hero__title">
        G'alabaning xushbo'y hidlari bilan ruhingizni ko'taring!
      </h1>
      <p class="hero__description">
        Hozir xarid qiling va Local Face bilan g'alabaning yoqimli hidini qabul qiling.
      </p>
      <a href="/shop">
        <button  class="button">Hozir xarid qiling</button>
      </a>
    </div>
    <div class="hero__picture">
      <img class="hero-img" src="@/img/hero-img.svg" alt="404">
    </div>

  </div>
</div>
</template>
<script>
export default {

}
</script>
<style scoped>
.hero{
  width: 100%;
  height: auto;
}
.hero__container {
  display: flex;
  width: 100%;
  height: 760px;
  align-items: center;
}
.hero__text-wrapper{
  width: 752px;
  height: 400px;
  color: white;
  margin: 0;
  padding: 0;
  margin-right: 53px;
}
.hero__title{
font-weight: 300;
font-size: 60px;
margin: 0;
padding: 0;
margin-bottom: 15px;
}
.hero__description{
  font-weight: 300;
  font-size: 24px;
  margin: 0;
  padding: 0;
  margin-bottom: 64px;
}


</style>