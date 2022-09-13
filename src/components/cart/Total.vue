<template>
  <b-container class="bv-total-row">
    <b-row>
      <b-col cols="6">
        <p class="text-total">Total</p>
      </b-col>
      <b-col cols="6">
        <p class="price-total">${{total}}</p>
      </b-col>
      <hr />
      <b-col cols="6" class="">
        <p class="subtitle">personas</p>
        <div class="action-product">- 1 +</div>
      </b-col>
      <b-col cols="6"><button @click="checkout" class="btn-checkout">Checkout <img
            src="../../assets/icons/109617.svg" /></button></button></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
  name: "Total",
  data() {
    return {};
  },
  computed: mapState({
    total: state => state.cart.total
  }),
  methods:{
    checkout(){
      this.$store.dispatch("cart/checkout", {});

    }
  }
};
</script>

<style scoped  lang="scss">
.action-product {
  background: white;
  width: 65px;
  border: solid 1px #cdcdcd;
  border-radius: 9px;
  padding: 4px;
  font-size: 17px;
  letter-spacing: 2px;
  cursor: pointer;
}

.bv-total-row {
  position: absolute;
  right: 0px;
  padding: 34px 9px 10px 60px;
  bottom: 0px;
  background: #fafbf8;
  margin-bottom: 15px;
}

p.subtitle {
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: gray;
  text-transform: capitalize;
}

p.text-total {
  font-size: 21px;
  letter-spacing: -1px;
  text-align: left;
}

p.price-total {
  font-size: 26px;
  font-weight: 700;
}

button.btn-checkout {
  font-size: 14px;
  display: flex;
  width: 150px;
  padding: 26px;
  border: 0px;
  background: #fcd661;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  font-weight: 600;
  position: absolute;
  right: 0px;

  img {
    width: 15px;
    margin-left: 15px;
    margin-top: 3px;
  }
}
</style>
