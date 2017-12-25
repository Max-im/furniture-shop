<template> 
  <div class="productCarousel">
    <ul class="productCarousel__list">
      <li class="productCarousel__item" v-for="item in data">
        <productCard :data="item"></productCard>
        
      </li>
    </ul>
    
  </div>
</template>




<script>
import productCard from './productCard.vue';

export default {
  name: 'productCarousel',
  data () {
    return {

    }
  },
  components: {
    productCard
  },
  props: ['data'],
  created: function(){
    $(document).ready(function(){
      $(".productCarousel__list").owlCarousel({
        items: 4,
        nav: true,
        navText: [],
        margin: 30,
        dots: false,
        dotsEach: true
      });
    });
  }
}



</script>






<style lang="scss">

$accent: #279cc7;

  
.productCarousel{
  margin: 30px 0 0 0;
  &__list{
    display: flex;
    justify-content: space-between;
  }
  &__item{
    box-sizing: border-box;
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
