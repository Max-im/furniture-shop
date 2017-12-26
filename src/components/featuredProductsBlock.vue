<template> 
  <div class="featuredProducts">
    <div class="container featuredProducts__container">
      <titleComponent :data="titleData"></titleComponent>
      <productCarousel 
        :addItemToCard="addItemToCard"
        :data="data">
      </productCarousel>


    </div>
  </div><!-- featuredProducts -->
</template>




<script>
import titleComponent from './titleComponent.vue';
import productCarousel from './productCarouselComponent.vue';

export default {
  name: 'featuredProducts',
  data () {
    return {
      titleData: {
        mainText: 'featured',
        slaveText: 'products'
      }
    }
  },
  components: {
    titleComponent,
    productCarousel
  },
  props: ["data", "addItemToCard"]
}



</script>






<style lang="scss">
  
.featuredProducts{
  padding: 45px 0 40px 0;
  &__container{
    position: relative;
  }
}


/*==========  Mobile First Method  ==========*/

/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) {




}

/* Extra Small Devices, Phones */
@media only screen and (min-width : 480px) {
  
 

}




/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {

}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {

}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {


}


</style>
