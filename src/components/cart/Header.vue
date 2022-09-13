<template>
  <b-container class="bv-header-row">
    <b-row align-h="end" class="">
      <div class="close" @click="hideCartMethod()">
        <img src="../../assets/icons/109617.svg" />
      </div>
      <b-col cols="5">
        <div class="icon-user">
          <img src="../../assets/icons/user.svg" />
        </div>
      </b-col>
      <b-col cols="4" class="quantity-items">{{products.length}}</b-col>
    </b-row>
    <b-row align-h="start">
      <b-col cols="4" class="text-card">
        <p class="text">My Order </p>
        <img class="icon-card" src="../../assets/icons/cool.png" />
      </b-col>

    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {

    }
  },
  computed: mapState({
    products: state => state.cart.products
  }),
  methods: {

    hideCartMethod() {
      this.$store.dispatch("cart/showCartMethod", {});
    }
  }
}
</script>

<style scoped  lang="scss">
.icon-user {
  width: 15px;
  margin-top: 10px;
}

.text-card {

  display: flex;
  font-size: 25px;
  font-weight: 800;
  text-align: left;
  line-height: 28px;
}

img.icon-card {
  width: 25px;
  height: 25px;
  position: absolute;
  left: 43px;
}

.quantity-items {
  background-color: #fcd661;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 900;
  height: 38px;
  width: 38px;
  line-height: 39px;
  position: absolute;
  right: 49px;
  top: 54px;
}

.shopping-cart {

  .text-card {
    position: relative;
    margin-top: 73px;
    padding-left: 0px;
  }
}

.close {
  display: none;
}

@media (max-width: 768px) {
  .close {
    position: absolute;
    top: 60px;
    left: 40px;
    width: 45px;
    -webkit-transform: rotate(179deg);
    transform: rotate(179deg);
    display: block;

  }
}
</style>
