<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col cols="12" md="4" v-for="(item, index) in productItems" :key="index">
        <a class="product-cards" @click="addProductCart(item)">
          <div class="card-produt">
            <div class="image-product">
              <img :src="item.image" />
              <div class="time">
                <p>{{item.time}}</p>
              </div>
            </div>
            <div class="description-prod">
              <div class="title">
                <p>{{item.name}}</p>
              </div>
              <b-row class="card-prod">
                <b-col cols="3" class="pl-0">
                  <span class="puntuacion"> <span class="start">✰</span> {{item.qualification}}</span>
                </b-col>
                <b-col cols="2"><span>Deli</span></b-col>
                <b-col cols="2"><span>Bagets</span></b-col>
                <b-col cols="2">$$</b-col>
              </b-row>
            </div>
          </div>
        </a>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "ProductsCard",
  data() {
    return {};
  },
  computed: mapState({
    productItems: state => state.products.products
  }),
  methods: {
    addProductCart(item) {
      this.$store.dispatch("cart/addProductToCart", item);

    },
  }
};
</script>

<style scoped  lang="scss">
.card-prod {
  width: 100%;
}

.card-produt {
  width: 100%;
  margin-top: 20px;
  border-radius: 25px;
  position: relative;
  background: white;

  @media (max-width: 768px) {
    margin-top: 0px;
  }

  img {
    border-radius: 25px;
    width: 100%;
    height: 120px;
    object-fit: cover;
  }
}

span.start {
  font-size: 17px;

}

.image-product {
  position: relative;
}

.time {
  background: #fafbf8;
  position: absolute;
  bottom: 0px;
  border-top-right-radius: 12px;
  padding: 12px;
  height: 40px;
  font-size: 13px;
  letter-spacing: -1px;
  font-weight: 600;
}

.description-prod {
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 11px;
  color: gray;
  font-weight: 600;

  .title {
    font-size: 18px;
    text-align: left;
    letter-spacing: 0px;
    color: black;

    .title p {
      margin-bottom: 10px;
    }
  }
}

.puntuacion {
  color: black;
  position: relative;
  left: -5px;
  top: -6px;
}

a.product-cards {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
</style>

