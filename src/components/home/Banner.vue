<template>
  <div class="banner">
    <b-container class="bv-banner-row bv-banner-row-flex-cols">
      <b-row>
        <b-col cols="6" md="4" align-self="end"><img class="header-image" src="../../assets/images/headerimage.png" />
        </b-col>
       
        <b-col cols="6" align-self="center">
          <div class="text-principal-banner">
            <h1 class="title">$0 delivery for 30 days! </h1>
            <img class="icon-party" src="../../assets/images/d.png" />
            <h2 class="subtitle">$0 delivery free for orders over $10 for 30 days</h2>
          </div>

        </b-col>
        <b-col cols="2" align-self="end">
          <div class="conten-btn-learn"><button class="show-more">Learn more </button> <img class="arrow-banner"
              src="../../assets/icons/109617.svg" /> </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import imageBanner from "../../assets/images/d.png";
export default {
  name: "Banner",
  components: {
    imageBanner,
  },
  data() {
    return {};
  },
};
</script>

<style scoped  lang="scss">
.bv-banner-row {
  position: relative;
  height: 100%;
}

button.show-more {
  color: #fd6e3c;
  font-size: 11px;
  text-decoration: none;
  border: 0px;
  background: none;
  width: 100px;
  text-align: right;
  padding: 0px;
  font-weight: 700;
  position: relative;
  left: 10px;
  letter-spacing: 0.2px;
}


.banner {
  background-color: #fef7ec;
  border-radius: 20px;
  position: relative;
  width: 100%;
  margin: 64px 8px 8px 3px;
  margin-bottom: 63px;
  height: 180px;

  .conten-btn-learn {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(10px, auto);
    position: absolute;
    bottom: 27px;
    right: -35px;
    

    @media (max-width: 768px) {
      top: 10px;
      right: 0px;
      bottom: auto;
    }
  }

  color: #fd6e3c;
  font-size: 24px;
  font-weight: 700;

  .title {
    color: #fd6e3c;
    font-size: 24px;
    font-weight: 600;
    position: relative;
    letter-spacing: -1px;
    margin-bottom: 1px;
    top: -4px;
  }

  .text-principal-banner {
    position: relative;
    margin-top: 60px;
    right: 42px;
    top: 3px;
    margin-left: 41px;
  }

  .header-image {
    width: 221px;
    position: absolute;
    left: 39px;
    bottom: 0px;

    @media (max-width: 768px) {
      left: 0px;
      width: 180px;
    }
  }

  .subtitle {
    color: #9a928d;
    font-size: 12px;
  }

  .arrow-banner {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(330deg) brightness(118%) contrast(119%);
    padding-top: 2px;
    padding-left: 2px;
    width: 15px;
    position: relative;
    left: 16px;
  }

  .icon-party {
    width: 25px;
    position: absolute;
    right: 5px;
    top: 0px;
    @media (max-width: 768px) {
      right: -26px;
  }
  }
}
</style>
