<template>
  <div>
    <section class="signup" v-if="openButton">
      <div class="signup__container container">
        <div class="signup-box">
          <h1 class="signup-box__title">Ro'yxatdan o'tish</h1>
        </div>

        <form class="input-group__signup" @submit.prevent="clickButton">
          <input class="input-group__input" type="text" v-model="name" id="name" required placeholder="Ism">
          <input class="input-group__input" type="text" v-model="number" id="number" name="number" required placeholder="Number">

          <div class="signup-btn__box">
            <button class="input-group__input-btn button" type="submit">Tasdiqlash</button>
          </div>
        </form>
      </div>
    </section>

          <!-- Add - Product -->
    <section class="add-product" v-if="closeButton">
      <div class="add-product__container container">
        <h1 class="add-product__title">Mahsulot qo'shish</h1>

        <form @submit.prevent="addProduct">
          <div class="add-product__info">
            <div class="input-group">
              <label for="title">Sarlavha qo'shing</label>
              <input class="input-group__input" v-model="producttitle" id="title" name="title"  type="text" required placeholder="For example, Giorgio Armani">
            </div>
            <select class="filter-shop__item" v-model="bolim">
              <option value="">Bo'lim</option>
              <option value="ayollar atiri">Ayollar atiri</option>
              <option value="erkaklar atiri">Erkaklar atiri</option>
              <option value="hamma uchun">Uniseks</option>
            </select>

            <select class="filter-shop__item" v-model="davlat">
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
              Birinchi fotosurat reklamangizning asosiy tasviri bo'ladi. Fotosuratlarni bosish va sudrab borish orqali ularning tartibini o'zgartirishingiz mumkin!
            </p>
            <div class="add-product-img__list">
              <label  class="add-product-img__item">
                <img src="@/img/icon/camera-solid.svg" alt="404" width="25" height="25">
                <input type="file" @change="previewImage($event, 0)">
              </label>
              <label  class="add-product-img__item">
                <img src="@/img/icon/camera-solid.svg" alt="404" width="25" height="25">
                <input type="file" @change="previewImage($event, 1)">
              </label>
              <label class="add-product-img__item">
                <img src="@/img/icon/camera-solid.svg" alt="404" width="25" height="25">
                <input type="file" @change="previewImage($event, 2)">
              </label>
            </div>
          </div>

          <div class="add-product-description">
            <div class="add-product-description__box">
              <label class="add-product-description__title" for="desc">Malumot</label>
              <textarea class="add-product-description__text" v-model="description" id="desc" cols="30" rows="10" placeholder="Mahsulot haqida batafsil ma'lumotni kiriting!"></textarea>
              <p>Kamida 40 ta so'z kiriting!</p>
            </div>
          </div>

          <div class="location">
            <div class="location__box">
              <label for="city">Manzil</label>
              <input type="text" v-model="location" id="city" name="city" placeholder="New York" required>
              <div>
                <label for="narxi">Narxi</label>
                <input type="number" v-model="narxi" id="narxi" name="narxi" placeholder="Narxi" required>
              </div>
              <div>
                <label for="olcham">O'lchami</label>
                <input type="text" v-model="olcham" id="olcham" name="olcham" placeholder="O'lchami" required>
              </div>
            </div>
          </div>

          <div class="contact-information">
            <h1 class="contact-information__title">Bog'lanish uchun ma'lumot</h1>
            <div class="contact-information__box">
              <div>
                <label for="namee">Ism</label>
                <input type="text" v-model="namee" id="namee" name="namee" required placeholder="Jon">
              </div>
              <div>
                <label for="emaill">Email</label>
                <input type="text" v-model="emaill" id="emaill" name="emaill" required placeholder="">
              </div>
              <div>
                <label for="numberr">Telefon raqam</label>
                <input type="text" v-model="numberr" id="numberr" name="numberr" required placeholder="777 77 77">
              </div>
            </div>
          </div>

          <div class="add-product-buttons">
            <div class="add-product-buttons__box">
              <button class="add-product-buttons__btn button" type="submit">Joylashtirish</button>
            </div>
          </div>
        </form>
      </div>
    </section>

<SiteFooter/>
  </div>
</template>
<script>
import SiteFooter from "@/components/SiteFooter.vue";
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'SignUpView',
data() {
  return {
      name: '',
      number: '',
      producttitle: '',
      bolim: '',
      davlat:'',
      description: '',
      location: '',
      narxi: '',
      olcham: '',
      namee: '',
      emaill: '',
      numberr: '',
      images: ['', '', ''],
      closeButton: false,
      openButton: true,
    }
},
methods: {
  clickButton(){
    if (this.name == "admin" && this.number == "admin") {
      this.closeButton = true;
      this.openButton = false;
    } else if(this.name == "" && this.number == ""){
      alert("Maydonni to'ldiring !")
    }else{
      this.$router.push({ name: "shop" });
    }
 },
 previewImage(event, index) {
      const input = event.target;
      const file = input.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.images.splice(index, 1, e.target.result);
        };
        reader.readAsDataURL(file);
      }
    },

 addProduct() {
      const newProduct = {
        producttitle: this.producttitle,
        bolim: this.bolim,
        davlat: this.davlat,
        description: this.description,
        location: this.location,
        narxi: this.narxi,
        olcham: this.olcham,
        namee: this.namee,
        emaill: this.emaill,
        numberr: this.numberr,
        images: this.images,
        id: generateUUID(),
      };
    this.$store.dispatch('addProduct', newProduct)


      this.producttitle = '';
      this.bolim = '';
      this.davlat = '';
      this.description = '';
      this.location = '';
      this.narxi = '';
      this.olcham = '';
      this.namee = '';
      this.emaill = '';
      this.numberr = '';
      this.images = ['', '', ''];


    },
},
computed:{

},


  components:{
    SiteFooter,
  }
}

function generateUUID() {
  return uuidv4();
  }
</script>
<style scoped>
.javohdev{
  background-color: #d1cfcf;
  color: #AB572D;
}
/* SignUpAccess CSS */
.signup{
  margin-top: 80px;
  padding-bottom: 30px;
}
.signup-box{
  display: flex;
  justify-content: center;
}
.signup-box__title{
  width: 350px;
  height: 100px;
  margin: 0 0 16px;
  padding: 0;
  text-align: center;
  font-weight: 600;
  font-size: 50px;
  line-height: 55px;
  color: white;
}
.input-group__signup{
  border-radius: 4px;
  width: 550px;
  height: 150px;
  margin: 0px auto 90px auto;
  padding: 0;
  gap: 10px 50px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
}
.input__container, h5{
  color: rgb(166, 166, 166);
  margin: 10px 0 0 0;
  margin-left: 26.5%;
  width: 140px;
}
.input__container, hr{
  width: 100%;
  height: auto;
  margin: 10px;
  border: 1px solid #302f2f;
}
.input-group__input{
  padding: 0 81px 3px 4px;
  border: none;
  width: 245px;
  height: 40px;
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
.input-group__input:not(:last-child){
  margin-right: 30px;
  margin-top: 25px;
}
.signup-btn__box{
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.input-group__input-btn{
  height: 48px;
  border: none;
  border-radius: 30px;
  text-align: center;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
}


/* AddProduct CSS */
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
.location__box div{
  margin-top: 15px;
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