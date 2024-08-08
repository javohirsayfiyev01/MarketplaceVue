import { createStore } from 'vuex'

export default createStore({
  state: {
    products: JSON.parse(localStorage.getItem('products')) || [],

    korzinka: JSON.parse(localStorage.getItem('korzinka')) || []

  },

  mutations: {
    add_Obj(state, product){
      state.products.push(product),
      localStorage.setItem('products', JSON.stringify(state.products))
    },
    ape_Obj(state, ape){
      state.korzinka.push(ape),
      localStorage.setItem('korzinka', JSON.stringify(state.korzinka))

    }
  },

  actions: {
    addProduct({commit}, product){
      commit('add_Obj', product)
    },
    addProducts({commit}, ape){
      commit('ape_Obj', ape)
    }
  },
  getters: {
    getProducts: state => state.products,
    getKorzinka: state => state.korzinka
  },

  modules: {
  }

})