<template>
  <div class="address">
    <b-container class="bv-example-row">
      <b-row class="adress-edit">
        <b-col cols="9" class="direction">
          <p>625 St Marks Ave</p>
        </b-col>
        <b-col cols="3"><button>Edit</button></b-col>
      </b-row>
      <b-row>
        <b-col cols="3" md="3">
          <div class="clock-addreess"><img src="../../assets/icons/reloj.svg" /></div>
        </b-col>
        <b-col cols="4" md="4" class="minuts">35 min</b-col>
        <b-col cols="5" md="5" class="p-0">
          <p class="text-yellow mb-0 text-address">Choose time</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Address",
  data() {
    return {};
  },
};
</script>

<style   lang="scss">
.minuts {
  padding: 8px 18px 10px 0px;

}

.text-yellow {
  color: #fcd661;
}

.text-address {
  margin-top: 8px;
}

.adress-edit {
  button {
    color: #fcd661;
    border: 0pc;
    background: none;
  }
}

.direction {
  text-align: left;
}

.clock-addreess {
  background: #fcd6611f;
  border-radius: 9px;
  width: 30px;
  height: 29px;

  img {
    margin-top: 9px;
    width: 13px;
    margin: 7px;
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(29deg) brightness(118%) contrast(119%);
  }


}
</style>
