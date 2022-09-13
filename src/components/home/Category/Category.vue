<template>


    <button class="categories">

        <div class="icon">

          <img src="../../../assets/icons/pizza.svg" />
          <!--<img :src="data.icon" />-->
        </div>
        <div>
            <p class="text">{{data.name}}</p>

        </div>
    </button>
</template>

<script>
export default {
    name: "Category",
    props: {
        data: Object
    },

    data() {
        return {};
    },
};
</script>


<style scoped  lang="scss" >
.categories {
    width: 70px;
    background: #ffffff;
    border-radius: 47px;
    height: 124px;
    font-size: 12px;
    font-weight: 600;
    position: relative;
    box-shadow: -2px 7px 20px 3px #f1f1f0;
    border: 0px;
    margin-top: 15px;
    margin-right: 20px;

}

.categories p.text {
    position: absolute;
    bottom: 15px;
    text-align: center;
    width: 55px;
}

.categories:hover {
    background: #fcd661;
}

.categories:active {
    background: #fcd661;
}

.icon {
    background: white;
    border-radius: 50%;
    padding: 15px;
    width: 60px;
    position: absolute;
    top: 7px;
    left: 5px;
}

.categories-pills {
    display: flex;
    column-gap: 25px;
    width: 100%;
}
</style>

