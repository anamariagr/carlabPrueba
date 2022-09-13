<template>
  <div class="filter">
    <b-container class="bv-filter-row">
      <b-row align-h="between">
        <b-col cols="6" md="4">
          <p class="text-restaurant">
            Restaurants
            <img class="icon-text" src="../../assets/icons/hamburguer-color.png" />
          </p>
        </b-col>
        <b-col cols="6" md="4"><button>
            <img class="icon-clock" src="../../assets/icons/reloj.svg" />
            <div class="delivery">
              Delivery:
            </div>
            <div class="when">
              Now
            </div>
            <img class="icon-arrow-clock" src="../../assets/icons/118740.svg" />
          </button></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "FilterProduct",
  data() {
    return {};
  },
};
</script>

<style scoped  lang="scss">
img.icon-arrow-clock {
  filter: invert(1);
  width: 13px;
  transform: rotate(90deg);
  margin-left: 10px;
  margin-top: 1px;
}

img.icon-text {
  width: 30px;
}

.icon-clock {
  filter: invert(1);
  width: 13px;
  margin-right: 10px;
}

.bv-filter-row {
  padding-left: 0px;
}

.filter {
  position: relative;

  button {
    background-color: #fb6d3b;
    border: 0;
    border-radius: 20px;
    color: #fff;
    font-size: 11px;
    padding: 10px 15px;
    right: 0px;
    position: absolute;
    display: flex;
  }

  .when {
    padding-left: 5px;
  }

  p {
    text-align: left;
    font-size: 32px;
    font-weight: 700;
    margin-top: 7px;
    letter-spacing: -2px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 25px;
    }
  }

  .icon-text {
    width: 27px;
    margin-bottom: 5px;
    margin-left: 10px;
  }
}
</style>
