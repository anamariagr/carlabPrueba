<template>
  <b-container class="bv-product-card-row p-0" @click="removeFromCart(index)">
    <b-row>

      <b-col cols="4" md="5" class="image-product-card">
        <img :src="item.image" />
      </b-col>
      <b-col cols="4" md="5" class="description p-0">
        <b-container class="bv-product-row">
          <b-row>
            <b-col cols="6" md="2" class="p-0">
              <p class="text-bold">1</p>
            </b-col>
            <b-col cols="6" md="2" class="p-0">
              <p class="text-bold">x</p>
            </b-col>
            <b-col cols="6" md="8" class="p-0">
              <p class="text-bold mt-0 product-name">
                {{item.name}}
              </p>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
      <b-col cols="4" md="2" class="price p-0">
        <p>{{item.price}}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Products",
  props: {
    index: Number,
    item: Object
  },

  data() {
    return {};
  },
  methods: {
    removeFromCart(index) {

      this.$store.dispatch("cart/removeProductFromCart", index);

    }
  }
};
</script>

<style scoped  lang="scss">
.bv-product-card-row {

  cursor: pointer;

  p {
    margin-bottom: 0px;
    margin-top: 8px;
  }

  position: relative;

  .image-product-card {
    margin-bottom: 30px;
    width: 33%;
    height: 30px;

    img {
      width: 100%;
      border-radius: 8px;
      object-fit: cover;
      height: 100%;
    }
  }

  p {
    font-size: 11px;
    text-align: left;
    line-height: 14px;
  }
}

.price {
  position: absolute;
  right: 0px;

  p {
    color: #a3a3a3;
  }
}
</style>
