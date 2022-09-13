<template>
  <div class="p-relative">
    <div class="categories-pills">
      <Category v-for="(item, index) in categories" :data="item" :key="index" />
    </div>
    <div class="btn-next">
      <img src="../../../assets/icons/118740.svg" />
    </div>
  </div>

</template>
  
<script>
import { mapState, mapActions } from 'vuex'

import Category from './Category.vue';

export default {
  name: "Categories",
  comments: {
    Category
  },
  data() {
    return {};
  },
  components: { Category },
  computed: mapState({
    categories: state => state.categories.categories
  }),
};
</script>
  
<style scoped  lang="scss">
.btn-next {
  background: #f5f4f4;
    width: 35px;
    height: 35px;
    border-radius: 10px;
    position: absolute;
    right: 0px;
    bottom: 45px;
    cursor: pointer;
    top: 63px;
    padding-right: 10px;

  img {
    width: 10px;
    margin-left: 13px;
    margin-top: 10px;
  }
}

.categories-pills {
  position: relative;
  text-align: left;
  margin-bottom: 45px;

  @media (max-width: 768px) {
    min-width: 74px;
    display: flex;
    overflow-x: auto;
    font-weight: 600;
    position: relative;
    border: 0px;
    margin-top: 15px;
    margin-right: -3px;
    margin-bottom: 32px;
  }
}

.categories {
  @media (max-width: 768px) {
    background: #ffffff;
    border-radius: 47px;
    height: 124px;
    font-size: 12px;
    font-weight: 600;
    position: relative;
    -webkit-box-shadow: -2px 7px 20px 3px #f1f1f0;
    box-shadow: -2px 7px 20px 3px #f1f1f0;
    border: 0px;
    margin-top: 15px;
    min-width: 75px;
    margin-right: 30px;
    margin-left: 13px;
    margin-bottom: 27px;
  }
}
</style>
  
  