import { createStore } from 'vuex'

export default createStore({
  state: {
    products: JSON.parse(localStorage.getItem('products')) || [],

    korzinka: JSON.parse(localStorage.getItem('korzinka')) || []
  },

  mutations: {
    add_Obj(state, product)  {
      state.products.push(product),
      localStorage.setItem('products', JSON.stringify(state.products))
    },

    // id_Obj(state, id) {
    //   let allProducts = state.products;
    //   let productExists = state.korzinka.some((product) => product.id === id);
    //   let foundProduct = allProducts.find((product) => product.id === id);

    //   // Mahsulotni nusxalash
    //   let clonedProduct = JSON.parse(JSON.stringify(foundProduct));

    //   if (productExists) {
    //     let foundProductKorzinka = state.korzinka.find(
    //       (product) => product.id === id
    //     );
    //     foundProductKorzinka.count++;
    //   } else {
    //     clonedProduct.count = 1;
    //     state.korzinka.push(clonedProduct);
    //   }
    //   localStorage.setItem('korzinka', JSON.stringify(state.korzinka));
    // },

    // id_Obj(state, id){
    //   let allProducts = state.products
    //   let productExists = state.korzinka.some(product => product.id === id);
    //   let foundProduct = allProducts.find(product => product.id === id);
    //   if(productExists) {
    //     let foundProductKorzinka = state.korzinka.find(product => product.id === id);
    //     // foundProductKorzinka.count++
    //   } else {

    //     // debugger
    //     foundProduct.count = 1
    //     state.korzinka.push(foundProduct)
    //   }
    //   localStorage.setItem('korzinka', JSON.stringify(state.korzinka))
    // },

id_Obj(state, id){
  let allProducts = state.products
  state.korzinka.push(allProducts.find(product => product.id === id)),
  localStorage.setItem('korzinka', JSON.stringify(state.korzinka))
},


    updateKorzinka(state, updatedKorzinka) {
      state.korzinka = updatedKorzinka;
      localStorage.setItem('korzinka', JSON.stringify(state.korzinka));
    }
  },

  actions: {
    addProduct({commit}, product){
      commit('add_Obj', product)
    },
    addProducts({commit}, id){
      commit('id_Obj', id)
    }
  },
  getters: {
    getProducts: state => state.products,
    getKorzinka: state => state.korzinka
  },

  modules: {
  }

})