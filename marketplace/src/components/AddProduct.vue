<template>
  <div>
    <!-- Bu hali ulanmagan ! -->
  <section class="add-product">
    <div class="add-product__container container">
      <h1 class="add-product__title">Mahsulot qo'shish</h1>
      <div class="add-product__info">
          <div class="input-group">
            <label for="title">Sarlavha qo'shing</label>
            <input class="input-group__input" v-model="title" id="title" name="title" type="text" required placeholder="For example, Giorgio Armani">
          </div>
          <select class="filter-shop__item" v-model="turi">
              <option  value="">Turi</option>
              <option value="women">Ayollar atiri</option>
              <option value="male">Erkaklar atiri</option>
              <option value="everyone">Bolalar atiri</option>
          </select>

          <select class="filter-shop__item" :value="davlat" @input="davlat = $event.target.value">
              <option value="">Davlat</option>
              <option value="usa">USA</option>
              <option value="turkiya">Turkiya</option>
              <option value="xitoy">Xitoy</option>
              <option value="yevropa">Yevropa</option>
             </select>
      </div>

      <div class="add-product-img">
        <h3 class="add-product-img__title">Rasmlar</h3>
        <p class="add-product-img__description">
          Birinchi fotosurat reklamangizning asosiy tasviri bo'ladi. Fotosuratlarni bosish va sudrab borish orqali ularning tartibini o'zgartirishingiz mumkin !</p>
        <form class="add-product-img__list" >
          <label for="" class="add-product-img__item">
            <img src="../img/icon/camera-solid.svg" alt="404" width="25" height="25">
            <input type="file" value="Submit">
          </label>
          <label for="" class="add-product-img__item">
            <img src="../img/icon/camera-solid.svg" alt="404" width="25" height="25">
            <input type="file" value="Submit">
          </label>
          <label for="" class="add-product-img__item">
            <img src="../img/icon/camera-solid.svg" alt="404" width="25" height="25">
            <input type="file" value="Submit">
          </label>
        </form>
      </div>

      <div class="add-product-description">
        <div class="add-product-description__box">
          <label class="add-product-description__title" for="desc">Malumot</label>
          <textarea class="add-product-description__text" v-model="description" name="desc" id="desc" cols="30" rows="10" placeholder="Enter more detailed information about the product!">

          </textarea>
        <p>Kamida 40 ta so'z kiriting !</p>
        </div>
      </div>

      <div class="location">
        <div class="location__box">
          <label for="city">Manzil</label>
          <input type="text" id="city" name="city" v-model="location" placeholder="New York" required>
        </div>
      </div>

      <div class="contact-information">
        <h1 class="contact-information__title">Bog'lanish uchun ma'lumot</h1>
        <div class="contact-information__box">
          <div>
            <label for="name">Ism</label>
            <input type="text" id="name" name="name" required placeholder="Jon">
          </div>
          <div>
          <label for="email">Email</label>
          <input type="text" id="email" name="email" required placeholder="">
          </div>
          <div>
          <label for="number">Telefon raqam</label>
          <input type="text" id="number" name="number" required placeholder="777 77 77">
          </div>
        </div>
      </div>


      <div class="add-product-buttons">
        <div class="add-product-buttons__box">
          <button class="add-product-buttons__btn button" type="button">Joylashtirish</button>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
export default {
  name:'AddProduct',
  data() {
    return {
      title: '',
      turi: '',

      description: '',
      location: '',
    }
  },

  methods:{

  }

}
</script>
<style scoped>

.add-product{
  margin-top: 50px;
  color: white;
}
.add-product__title{
  margin-bottom: 20px;
  color: white;
}
.add-product__info{
  width: 100%;
  height: 150px;
  padding: 30px;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #3f3f3f;
}
.filter-shop__item{
  width: 300px;
  height: 30px;
  margin-top: 30px;
  border: 1px solid black;
  color: white;
  background-color:  #3f3f3f;

}
.filter-shop__item:hover{
  box-shadow: 0px 8px 16px #AB572D;
  opacity: 0.8;
}
.filter-shop__item option{
  font-weight: 500;
  font-size: 15px;
}

.input-group{
  width: 542px;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0;
}
.input-group label{
  color: white;
  margin-right: 10px;
}
.input-group__input{
  width: 540px;
  height: 30px;
  margin: 0 0 0 0;
  padding: 0 10px 0 10px;
  border: none;
  border-bottom: 1px solid #979797;
  font-weight: 400;
  font-size: 17px;
  opacity: 50%;
  line-height: 15px;
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

/* Add Product IMG */
.add-product-img{
padding: 30px;
border-radius: 4px;
background-color: #3f3f3f;
}
.add-product-img__title{
  font-weight: 600;
  font-size: 17px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.add-product-img__description{
  margin-bottom: 13px;
}
.add-product-img__list{
  display: grid;
  grid-template-columns: repeat(auto-fill, 187px);
  gap: 16px;
}
.add-product-img__item{
    border: 2px solid transparent;
    border-radius: 4px;
    background: rgb(177, 177, 177);
    width: 188px;
    height: 141px;
    padding: 0px 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    outline: none;
}
.add-product-img__item input{
  position: absolute;
    opacity: 0;
    left: 0px;
    width: 100%;
    height: 100%;
    top: 0px;
    cursor: pointer;
}


/* IMG Description */
.add-product-description{
  margin-top: 10px;
  background-color: #3f3f3f;
}
.add-product-description__title{
  font-weight: 400;
  font-size: 13px;
  margin: 0;
  padding: 0;
}
.add-product-description__box{
  width: 750px;
  padding: 30px;
  margin: 0;
}
.add-product-description__text{
  width: 100%;
  height: 300px;
  margin-top: 5px;
  background-color: #d1cfcf;
  color: black;
  font-weight: 400;
  font-size: 17px;
}
.add-product-description__box p{
  font-weight: 400;
  font-size: 12px;
}


/* Location */
.location{
  background-color: #3f3f3f;
  width: 100%;
  height: auto;
  margin-top: 10px;
}
.location__box{
  padding: 30px;
}
.location__box label{
  display: block;
  font-weight: 400;
  font-size: 15px;
  color: white;
}
.location__box input{
  width: 250px;
  height: 40px;
  border: none;
  border-radius: 10px;
  margin-top: 7px;
  padding: 10px;
}


/* Information */
.contact-information{
  background-color: #3f3f3f;
  width: 100%;
  height: auto;
  margin-top: 10px;
}
.contact-information__title{
  padding: 20px 0px 0px 20px;
}
.contact-information__box{
  padding: 15px 30px 30px 30px;
}
.contact-information__box label{
  display: block;
  font-weight: 400;
  font-size: 15px;
  color: white;
}
.contact-information__box input{
  width: 250px;
  height: 40px;
  border: none;
  border-radius: 10px;
  padding: 10px;
}
.contact-information__box div{
  margin-bottom: 16px;
}


/* add-product-buttons */
.add-product-buttons{
  background-color: #3f3f3f;
  width: 100%;
  height: auto;
  margin-top: 10px;
}
.add-product-buttons__box{
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 30px;
}
</style>