<template>
  <div>
    <b-container class="bv-search-row ">
      <b-row>

        <b-col cols="12">

          <div class="search">
            <img class="icon-search" src="../../../assets/icons/lupa.svg" />
            <input id="input-formatter" placeholder="Search" />
          </div>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>



export default {
  name: 'Search',

}
</script>

<style scoped  lang="scss">
.search {

  background: #f8f8f8;
  border: 0rem;
  border-radius: 19px;
  padding: 15px 11px 36px 10px;
  font-size: 13.8px;
  width: 100%;
  position: relative;
  margin-left: 10px;

  input {
    background: #f8f8f8;
    border: 0px;
    font-size: 14.4px;
    filter: opacity(0.5);
    position: absolute;
    top: 13px;
    left: 64px;
    font-weight: 500;
    max-width: 100%;
    @media (max-width: 768px) {
      width: 112px;
  }
  }

  .icon-search {
    width: 17px;
    position: absolute;
    left: 28px;
  }

  input:focus-visible {
    outline: none;
  }
}
</style>
