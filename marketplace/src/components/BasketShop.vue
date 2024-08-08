<template>
  <section class="basket-shop">
    <div class="container">
      <div class="basket-form">
        <div class="basket-form__content">
          <div class="basket-form__cart cart-section">
            <div class="cart-section__header">
              <h3>Sizning mahsulotlaringiz !</h3>
            </div>
            <div class="cart-section__body">
              <ul class="cart-section__list">
                <li>
                  <div class="cart-section__item">
                    <div class="cart-section__item-img">
                      <img :src="product.images[0]" width="100px" height="100px" alt="404">
                    </div>
                    <div class="cart-section__item-content">
                      <div class="cart-section__item-info">
                        <h4 class="cart-section__item-name">{{ product.producttitle }}</h4>
                        <div class="cart-section__item-vendor">
                          <span>{{ product.olcham }}</span>
                        </div>
                      </div>

                      <div class="cart-section__item-count">
                        <div class="count">
                        <button>
                          <img src="@/img/icon/minus-solid.svg" alt="404" width="24" height="24">
                        </button>
                         <input class="input" type="number">
                        <button>
                          <img src="@/img/icon/plus-solid.svg" alt="404" width="24" height="24">
                        </button>
                        </div>

                      </div>

                      <div class="cart-section__item-price">
                        <div class="price">
                          <span class="price__main">{{ product.narxi }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="basket-form__sidebar cart-section">
            <h3 class="cart-section__header">Sizning malumotlaringiz</h3>
            <div class="cart-section__body">
              <form action="" class="similar-auth">
                <div>
                  <label for="">Name</label><br>
                  <input type="text">
                </div>
                <div>
                  <label for="">Number</label>
                  <div class="input__wrapper">
                    <div class="input__prefix">
                      <div class="input__prefix-value">
                        +998
                      </div>
                      <svg data-v-79608461="" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style=""><path data-v-79608461="" d="M12.7105 15.54L18.3605 9.87998C18.4542 9.78702 18.5286 9.67642 18.5793 9.55456C18.6301 9.4327 18.6562 9.30199 18.6562 9.16998C18.6562 9.03797 18.6301 8.90726 18.5793 8.78541C18.5286 8.66355 18.4542 8.55294 18.3605 8.45998C18.1731 8.27373 17.9196 8.16919 17.6555 8.16919C17.3913 8.16919 17.1378 8.27373 16.9505 8.45998L11.9505 13.41L7.00045 8.45998C6.81309 8.27373 6.55964 8.16919 6.29545 8.16919C6.03127 8.16919 5.77781 8.27373 5.59045 8.45998C5.49596 8.5526 5.42079 8.66304 5.3693 8.78492C5.3178 8.90679 5.291 9.03767 5.29045 9.16998C5.291 9.30229 5.3178 9.43317 5.3693 9.55505C5.42079 9.67692 5.49596 9.78737 5.59045 9.87998L11.2405 15.54C11.3341 15.6415 11.4477 15.7225 11.5742 15.7779C11.7007 15.8333 11.8373 15.8619 11.9755 15.8619C12.1136 15.8619 12.2502 15.8333 12.3767 15.7779C12.5032 15.7225 12.6168 15.6415 12.7105 15.54Z" fill="#111111"></path></svg>
                    </div>
                    <input type="text">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="basket-form__sidebar">
          <div class="basket-section__sidebar">
            <div class="cart-form__cart-section cart section">
              <div class="cart-form__sidebar-price">
                <h3 class="cart-form__sidebar-price__label">Jami:</h3>
                <h3 class="price">$ 220.00</h3>
              </div>
              <hr>
              <div class="cart-form__detail">
                <div>
                  <p>Yetkazib berish tekin !</p>
                </div> ............................................................
                  <div>
                  <img src="../img/icon/car-solid.svg" alt="404" width="24" height="24">
                </div>
              </div>
              <div class="cart-form__bottom">
                <button class="button" type="button" @click="bos">Hoziroq hariq qiling</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  methods: {
    bos(){

    }
  },
  props:{
    product:{
      type: Object,
      requared: true
    }
  }

}
</script>

<style scoped>
.basket-shop{
  color: white;
  margin-top: 80px;
}
.cart-section__header{
  font-size: 42px;
  font-weight: 600;
  line-height: 49px;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
}
.similar-auth{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
}
.similar-auth input{
    border: 2px solid #111;
    border-radius: 12px;
    color: white;
    width: 300px;
    height: 40px;
    padding: 5px;
    background: transparent;
    margin: 0;
}
.input__wrapper{
  display: flex;
  width: 300px;
  align-items: center;
  border: 2px solid #111;
  border-radius: 12px;
  color: white;
  margin: 2px;
}
.input__wrapper input{
  border: 0;
}
.input__prefix{
  display: flex;
  margin: 5px;
}
.input__prefix .icon{
  color: white;
}
.basket-form__sidebar{
  padding: 10px;
}
.basket-form{
  display: flex;
  flex: 1;
  gap: 30px;
}
.basket-form__content{
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: calc(100% - 380px);
}
.cart-section__list li{
  list-style: none;
}
.cart-section__item-img{
  width: 100px;
  height: 100px;
}
.cart-section__item{
  display: flex;
  align-items: center;
  background-color: #393838;
}
.cart-section__item-content{
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  padding-left: 20px;

}
.cart-section__item-name{
  font-weight: 600;
  font-size: 15px;
  line-height: 1px;
  color: white;
  margin-bottom: 10px;
  top: 0;
}
.cart-section__item-vendor{
  font-weight: 500;
  font-size: 15px;
  color: white;
  margin-top: 55px;
}
.price{
  margin: 10px;
  color: rgb(171, 87, 45);;
}

.cart-section__item-count{
  height: 40px;
  position: relative;
  width: 120px;
}
.count{
  background-color: transparent;
  display: flex;
  border: 1px solid;
  border-radius: 10px;
}
.count .input{
  background-color: transparent;
    border: none;
    color: #111;
    display: flex;
    flex: 1;
    font-size: 16px;
    width: 100%;
    font-weight: 500;
    height: 36px;
    line-height: 24px;
    min-height: 36px;
    padding: 6px 0;
    text-align: center;
}
.count button{
    background-position: 50%;
    border: none;
    cursor: pointer;
    font-size: 36px;
    height: 36px;
    color: white;
    background: transparent;
    width: 36px;
    margin-bottom: 5px;
}

.basket-form__sidebar{
  background-color: #393838;

}


/* basket-form__sidebar */
.basket-form__sidebar{
  width: 100%;
  height: 200px;
  padding: 15px;
}
.cart-form__sidebar-price{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart-form__detail{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

}
.cart-form__bottom{
  margin-top: 20px;
  width: 100%;

}
.cart-form__bottom button{
  width: 100%;
  height: 35px;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
}
</style>