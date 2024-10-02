import { createStore } from 'vuex'

export default createStore({
/// stateda `products` va `korzinka` (savatcha) bor. Ular localStoragedan olinadi yoki bo‘sh bo‘lsa, bo‘sh massiv bo‘lib boshlanadi.
  state: {
    products: JSON.parse(localStorage.getItem('products')) || [],

    korzinka: JSON.parse(localStorage.getItem('korzinka')) || []
  },

  mutations: {
/// Bu `add_Obj` yangi mahsulotni products massiviga qo‘shadi va natijani localStoragega yozadi.
    add_Obj(state, product)  {
      state.products.push(product),
      localStorage.setItem('products', JSON.stringify(state.products))
    },


/// Bu `id_Obj` korzinkaga mahsulot qo‘shadi. Agar mahsulot allaqachon korzinkada bo‘lsa, uning count qiymatini oshiradi. Agar mahsulot korzinkada bo‘lmasa, yangi mahsulot qo‘shiladi va count 1 ga teng bo‘ladi.Oxirida, korzinka yangilangan holatda localStoragega yoziladi.
    id_Obj(state, id) {
      let allProducts = state.products;
      let productExists = state.korzinka.some((product) => product.id === id);
      let foundProduct = allProducts.find((product) => product.id === id);
      let clonedProduct = JSON.parse(JSON.stringify(foundProduct));

      if (productExists) {
        let foundProductKorzinka = state.korzinka.find(
          (product) => product.id === id
        );
        foundProductKorzinka.count++;
      } else {
        clonedProduct.count = 1;
        state.korzinka.push(clonedProduct);
      }
      localStorage.setItem('korzinka', JSON.stringify(state.korzinka));
    },


/// Bu `updateKorzinka` korzinkaning yangilangan holatini saqlaydi va yangilangan ma'lumotlarni localStoragega yozadi.
    updateKorzinka(state, updatedKorzinka) {
      state.korzinka = updatedKorzinka;
      localStorage.setItem('korzinka', JSON.stringify(state.korzinka));
    }
  },



/// `addProduct` mahsulotni productsga qo‘shish uchun add_Obj mutatsiyasini ishga tushiradi. `addProducts` esa` id_Obj`ni chaqirib, mahsulotni korzinkaga qo‘shadi yoki uning miqdorini oshiradi.
  actions: {
    addProduct({commit}, product){
      commit('add_Obj', product)
    },
    addProducts({commit}, id){
      commit('id_Obj', id)
    }
  },


  /// `getProducts` va `getKorzinka` getterlari mahsulotlar va korzinkadagi ma'lumotlarni olish uchun ishlatiladi.
  getters: {
    getProducts: state => state.products,
    getKorzinka: state => state.korzinka
  },

})