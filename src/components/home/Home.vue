<template>
  <b-container class="container-xxl bv-app-row">
    <b-row>
      <b-col lg="9" class="home-container">
        <Navbar />
        <Banner />
        <FilterProduct />
        <Categories />
        <Products />
      </b-col>
      <Cart :class="{ showCart: showCart, hideCart: !showCart }" class="cart-container" />
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Navbar from './Navbar/Navbar.vue';
import Banner from './Banner.vue';
import FilterProduct from './FilterProduct.vue';
import Categories from './Category/Categories.vue';
import Products from './Products.vue';


import Cart from '../cart/Cart.vue'

export default {
  name: "Home",
  components: {
    Navbar,
    Banner,
    FilterProduct,
    Categories,
    Products,
    Cart
  },
  computed: mapState({
    showCart: state => state.cart.isShowCart
  }),
};
</script>

<style   lang="scss">
.home-container {
  padding-right: 60px;

  @media (max-width: 768px) {
    padding-right: 10px;
  }
}

#app {
  font-family: 'Sen', sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;

}

.text-bold {
  font-weight: 700;
}

.mb-0 {
  margin-bottom: 0px;
}

.p-0 {
  padding: 0px;
}

.p-relative {
  position: relative;
}

@media (max-width: 768px) {
  .showCart {
    display: inline;
  }

  .hideCart {
    display: inline !important;
  }

  .cart-container {
    display: none;
  }
}
</style>
    
