<template>
  <b-col lg="3" class="shopping-cart">
    <Header />
    <Address />
    <div class="productos-card-now">
      <ProductsCard v-for="(item, index) in products" :key="index" :index="index" :item="item" />

    </div>
    <Total />
  </b-col>
</template>
  
<script>
import { mapState, mapActions } from 'vuex'

import Header from './Header.vue'
import Address from './Address.vue';
import ProductsCard from './ProductsCard.vue';
import Total from './Total.vue';
export default {
  name: "Cart",
  data() {
    return {};
  },

  components: {
    Header,
    Address,
    ProductsCard,
    Total
  },
  computed: mapState({
    products: state => state.cart.products
  }),

};
</script>
  
 
  
  
<style scoped  lang="scss">
.productos-card-now {
  height: 326px;
  position: relative;
  overflow: auto;
  width: 112%;
  margin: 5px;
}

.shopping-cart {
  max-width: 360px;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  background-color: #fafbf8;
  border-left: 1px solid #f3f3f3;
  height: 100vh;
  padding-left: 3rem;
  position: fixed;
  right: 0;
  padding-right: 3rem;
  padding-top: 50px;
}

.address {
  background-color: #503e9d;
  border-radius: 20px;
  color: #fff;
  font-size: 10px;
  font-weight: 100;
  padding: 23px 11px;
  margin-top: 17px;
  margin-bottom: 57px;
}
</style>
  
  