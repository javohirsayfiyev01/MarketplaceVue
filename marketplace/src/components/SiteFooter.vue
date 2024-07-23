<template>
  <section class="footer">
    <div class="footer__content container">
      <div class="footer__infoblock">
        <nav class="footer__sitenav sitenav">
          <p class="footer__title" @click="home">prom.uz</p>
        <ul class="footer__sitenav-list sitenav-list">
          <li class="sitenav__item"><RouterLink class="sitenav__link" to="/">Bosh sahifa</RouterLink></li>
          <li class="sitenav__item"><RouterLink class="sitenav__link" to="/about">Mahsulotlar</RouterLink></li>
        </ul>

        <div class="footer__infoblock-socials">
          <div class="footer__infoblock-social">
           <a href="#" class="footer__infoblock-icon">
            <img class="footer__icon" src="../img/icon/facebook-f.svg" alt="Facebook icon" width="25" height="25">
           </a>
           <a href="#" class="footer__infoblock-icon">
            <img class="footer__icon" src="../img/icon/instagram.svg" alt="Instagram icon" width="25" height="25">
           </a>
           <a href="#" class="footer__infoblock-icon">
            <img class="footer__icon" src="../img/icon/telegram.svg" alt="Telegram icon" width="25" height="25">
           </a>
          </div>
        </div>
      </nav>

      <div class="footer__links">
        <p>Kompaniya haqida</p>
        <a href="">Bizning hamkorlarimiz</a>
        <a href="">Maxfiylik siyosati</a>
        <a href="">Foydalanish shartlari</a>
        <a href="">Prom.uz da ishlash</a>
        <a href="">Ko'rgazmalar</a>
      </div>
      <div class="footer__links">
        <p>Foydalanuvchilar uchun</p>
        <a href="">Qanday xarid qilish lozim</a>
        <a href="">Xafsiz bitim qoidalari</a>
        <a href="">Reyting va sharhlar</a>
        <a href="">Biz bilan bog'lanish</a>
      </div>
      </div>




    <div class="footer__subscription">
      <hr>
      <p class="footer__description">© 2023, prom.uz
        Barcha huquqlar himoyalangan</p>
    </div>

    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    home(){
      this.$router.push({ name: "home" });
    },
  },

}
</script>
<style scoped>
.footer{
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  margin-top: 330px;
  background-color: rgb(48, 45, 45);
}

.footer__content {
  width: 100%;
  padding-top: 30px;

}

.footer__infoblock{
  display: flex;
  height: 295px;
  gap: 150px;
}

.footer__title{
  font-weight: 400;
  font-size: 36px;
  margin-bottom: 30px;
  color: #AB572D;
  cursor: pointer;

}

.footer__title:hover{
  opacity: 0.7;
  color: #AB572D;
}

.sitenav-list {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 25px;
  margin-bottom: 30px;
}

.sitenav__item {

  position: relative;
}

.sitenav__link {
  color: white;
  text-decoration: none;
  font-size: 1em;
  transition: color 0.3s;
}


.sitenav__link:hover {
  color: #AB572D;
}
.footer__infoblock-social{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    margin: 0;
    padding: 0;
    margin-top: 20px;
    color: white;
}
/* .footer__icon:hover{
  color: #AB572D;
  opacity: 0.7;
  background-color: #AB572D;
} */


.footer__links{
  display: flex;
  text-decoration: none;
  flex-direction: column;
  gap: 20px;
}

.footer__links, p{
  color: white;
  font-weight: 700;
  font-size: 17px;
}

.footer__links, a{
color: white;
font-weight: 400;
font-size: 16px;
text-decoration: none;
cursor: pointer;
}

.foooter__links, a:hover{
  color: #AB572D;
  opacity: 0.7;
}


.footer__subscription hr{
  width: 100%;
  color: #242424;
  background-color: #242424;
}
.footer__description{
  text-align: center;
  margin-top: 45px;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 0;
  padding-bottom: 15px;
}

</style>
