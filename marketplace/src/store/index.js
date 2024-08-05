import { createStore } from 'vuex'

export default createStore({
  state: {
    products: JSON.parse(localStorage.getItem('products')) || []


  },

  mutations: {
    add_Obj(state, product){
      state.products.push(product),
      localStorage.setItem('products', JSON.stringify(state.products))
    }
  },

  actions: {
    addProduct({commit}, product){
      commit('add_Obj', product)
    }
  },
  getters: {
    getProducts: state => state.products
  },

  modules: {
  }

})