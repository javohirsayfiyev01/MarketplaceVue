<template>
  <section class="singup">
    <div class="singup__container container">
      <div>
          <h1 class="singup__title">Aloqa</h1>
      </div>
      <div class="input-group">
        <input class="input-group__input" type="text" placeholder="Name">
        <input class="input-group__input" type="text" placeholder="EmailAddress">
        <input class="input-group__input" type="text" placeholder="Sarlavha">
        <input class="input-group__input input-group__input-mes" type="text" placeholder="Xabar">
        <button class="input-group__input-btn button" type="button">Yuborish</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {

}
</script>
<style scoped>
.singup{
  margin-top: 100px;
}
.singup__container{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.singup__title{
  width: 350px;
  height: 100px;
  margin: 0 0 16px;
  padding: 0;
  font-weight: 700;
  font-size: 64px;
  line-height: 100px;
  color: white;
}

.input-group{
  width: 542px;
  height: 420px;
  margin: 0;
  padding: 0;
}
.input-group__input{
  width: 540px;
  margin: 0 0 24px 0;
  padding: 0 81px 17px 14px;
  border: none;
  border-bottom: 1px solid #979797;
  font-weight: 600;
  font-size: 15px;
  opacity: 60%;
  line-height: 25px;
  background-color: transparent;
  color: white;
}

.input-group__input::placeholder{
  color: #979797;
}
.input-group__input-mes{
  padding: 0 81px 59px 14px;
  height: 84px;
}
.input-group__input-btn{
  height: 48px;
  border: none;
  border-radius: 30px;
  padding: 9px 32px 11px 32px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;

}
</style>