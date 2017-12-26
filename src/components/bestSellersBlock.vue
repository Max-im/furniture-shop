<template> 
  <div class="bestSellers">
    <div class="container bestSellers__container">
      <titleComponent :data="titleData"></titleComponent>
      <productCarousel :data="carouselItems"></productCarousel>


    </div>
  </div><!-- bestSellers -->
</template>




<script>
import titleComponent from './titleComponent.vue';
import productCarousel from './productCarouselComponent.vue';

export default {
  name: 'bestSellers',
  data () {
    return {
      titleData: {
        mainText: 'best',
        slaveText: 'sellers'
      },
      carouselItems: [
        { 
          img: 'src/assets/prod2-1.jpg',
          title: 'auzam mipane', 
          stars: 5,
          price: 74 
        },
        { 
          img: 'src/assets/prod2-2.jpg',
          title: 'sazen kutemas', 
          stars: 5,
          oldPrice: 84,
          price: 80
        },
        { 
          img: 'src/assets/prod2-3.jpg',
          title: 'dumas chume', 
          stars: 5,
          oldPrice: 99,
          price: 90 
        },
        { 
          img: 'src/assets/prod2-4.jpg',
          title: 'amire tracemis', 
          stars: 5,
          price: 85, 
        },
        { 
          img: 'src/assets/prod2-1.jpg',
          title: 'auzam mipane', 
          stars: 5,
          price: 74 
        },
        { 
          img: 'src/assets/prod2-2.jpg',
          title: 'sazen kutemas', 
          stars: 5,
          oldPrice: 84,
          price: 80
        },
        { 
          img: 'src/assets/prod2-3.jpg',
          title: 'dumas chume', 
          stars: 5,
          oldPrice: 99,
          price: 90 
        },
        { 
          img: 'src/assets/prod2-4.jpg',
          title: 'amire tracemis', 
          stars: 5,
          price: 85, 
        }
      ]
    }
  },
  components: {
    titleComponent,
    productCarousel
  }
}



</script>






<style lang="scss">
  
.bestSellers{
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
