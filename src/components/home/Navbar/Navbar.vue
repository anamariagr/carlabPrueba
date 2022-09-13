<template>
  <b-container class="bv-example-row">
    <b-row class="navbar-home">
      <b-col cols="5" md="3" class="icon-nav" @click="showCartMethod()">
        <Icon />
        <Textlogo />
      </b-col>

      <b-col cols="7" md="9">
        <Search />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Icon from './Icon.vue'

import Search from './Search.vue'

import Textlogo from './Textlogo.vue'


export default {
  name: 'Navbar',
  components: {

    Icon,
    Search,
    Textlogo,
  },

  methods: {
    showCartMethod() {
      this.$store.dispatch("cart/showCartMethod", {});
    }
  }
}
</script>

<style scoped  lang="scss">
.navbar-home {
  margin-top: 46px;
}

.navbar-home {
  margin-top: 46px;

  p {
    margin-bottom: 0px;
    line-height: 50px;
    font-size: 23px;
    font-weight: 600;
  }

}

.icon-nav {
  display: flex;
}
</style>
