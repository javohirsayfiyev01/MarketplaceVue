<template>
  <div>
    <div class="cart-section__body">
              <ul class="cart-section__list">
                <li>
                  <div class="cart-section__item">
                    <div class="cart-section__item-img">
                      <img :src="productitem.images[0]" width="100px" height="100px" alt="404">
                    </div>
                    <div class="cart-section__item-content">
                      <div class="cart-section__item-info">
                        <h4 class="cart-section__item-name">{{ productitem.producttitle }}</h4>
                        <div class="cart-section__item-vendor">
                          <span>{{ productitem.olcham }}ml</span>
                        </div>
                      </div>

                      <div class="cart-section__item-count">
                        <div class="count">
                          <button @click="minus(productitem)">
                            <img src="@/img/icon/minus-solid.svg" alt="404" width="24" height="24">
                          </button>
                          <input class="input"
                           type="number"
                           min="1"
                           readonly
                           v-model.number="productitem.count"

                           >
                          <button @click="plus(productitem)">
                            <img src="@/img/icon/plus-solid.svg" alt="404" width="24" height="24">
                          </button>
                        </div>
                      </div>

                      <div class="cart-section__item-price">
                        <div class="price">
                          <a class="price-delete__btn" @click="deleteItem(productitem)">
                            <img src="@/img/icon/delete-svg.svg" alt="delete" width="25" height="25">
                          </a>
                          <span class="price__main">{{productitem.joriyNarxi}} $ </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

  </div>
</template>
<script>
export default {
  props: {
    productitem: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      korzinka: JSON.parse(localStorage.getItem('korzinka')) || []
    }
  },

  // mounted() {
  //   this.counting()
  // },

  methods: {
    deleteItem() {
  let index = this.korzinka.findIndex(item => item.id === this.productitem.id);
  if (index !== -1) {
    this.korzinka.splice(index, 1)
    this.sendParent()
  }
 },

//  counting(index) {
//   if(index === undefined) {
//     this.korzinka.forEach(element => {
//        element.joriyNarxi = element.tanNarxi * element.count
//     });
//   } else {
//     this.korzinka[index].joriyNarxi = this.korzinka[index].tanNarxi * this.korzinka[index].count
//   }
//     this.sendParent()
//  },

 plus(productitem) {
  let index = this.korzinka.findIndex(item => item.id === productitem.id);
  debugger
  if (index !== -1 && this.korzinka[index].count >= 1) {
    this.korzinka[index].count++;
    // this.counting(index)
    this.sendParent()
  }
},

 minus(productitem) {
  let index = this.korzinka.findIndex(item => item.id === productitem.id);
  if (index !== -1 && this.korzinka[index].count > 1) {
    this.korzinka[index].count--;
    // this.counting(index)
    this.sendParent()
  }
 },

 sendParent() {
    localStorage.setItem('korzinka', JSON.stringify(this.korzinka));
    this.$store.commit('updateKorzinka', this.korzinka);
 },
},


}
</script>
<style scoped>
/* Card */
.cart-section__body{
  margin-top: 15px;
}
.cart-section__list li{
  list-style: none;
}
.cart-section__item{
  display: flex;
  align-items: center;
  background-color: #393838;
}
.cart-section__item-img{
  width: 100px;
  height: 100px;
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
.cart-section__item-info{
  width: 200px;
  height: auto;
}
.cart-section__item-name{
  width: 200px;
  height: auto;
  font-weight: 600;
  font-size: 15px;
  line-height: 1px;
  color: white;
  top: 0;
}
.cart-section__item-vendor{
  font-weight: 500;
  font-size: 15px;
  width: 100px;
  height: auto;
  color: white;
  margin-top: 55px;
}

.price{
  width: 100px;
  height: auto;
  margin: 0;
  padding: 0;
  text-align: center;
  color: rgb(171, 87, 45);;
}
.price-delete__btn{
  display: block;
  cursor: pointer;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
}
.price-delete__btn:hover{
  opacity: 0.6;
}
.cart-section__item-count{
  height: 40px;
  position: relative;
  width: 120px;
}


/* Count */
.count{
  background-color: transparent;
  display: flex;
  border: 1px solid;
  border-radius: 10px;
}
.count .input{
  background-color: transparent;
    border: none;
    color: white;
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

</style>