const state = () => ({
  products: [],
  total: 0,
  isShowCart: true
});

// getters
const getters = {};

// actions
const actions = {
  addProductToCart({ state, commit }, product) {
    state.products.push(product);

    let totalPrice = 0;
    for (const item in state.products) {
      const price = state.products[item].price;
      totalPrice += price;
    }

    state.total = totalPrice.toFixed(2);
  },
  removeProductFromCart({ state, commit }, index) {
    state.products.splice(index, 1);

    let totalPrice = 0;
    for (const item in state.products) {
      const price = state.products[item].price;
      totalPrice += price;
    }

    state.total = totalPrice.toFixed(2);
  },
  checkout({ commit, state }, products) {
    state.products = [];
    state.total = 0;
  },

  showCartMethod({ state, commit }, index) {
    state.isShowCart = !state.isShowCart;
  }
};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
