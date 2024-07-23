<template>
  <section class="offer">
    <div class="offer__container container">
        <a class="offer__item" href="https://olcha.uz/ru/category/s-ruki-olcha">
          <img src="@/img/ElonOlcha.jpg" alt="404" width="100%" height="100%">
        </a>
    </div>
  </section>
</template>
<script>
export default {

}
</script>
<style scoped>
.offer{
  width: 100%;
  height: auto;
  background-color: white;
  margin: 0;
  padding: 0;
  margin-top: 10px;
}
.offer__item{
  width: 100%;
  height: auto;
  align-items: center;
  cursor: pointer;
}
.offer__item:hover{
  opacity: 0.9;
}
</style>