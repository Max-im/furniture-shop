<template> 
  <div class="featuredProducts">
    <div class="container featuredProducts__container">
      <titleComponent :data="titleData"></titleComponent>
      <productCarousel :data="carouselItems"></productCarousel>


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
      },
      carouselItems: [
        { 
          img: 'src/assets/prod1-1.jpg',
          title: 'kazens dimans', 
          stars: 5,
          price: 84 
        },
        { 
          img: 'src/assets/prod1-2.jpg',
          title: 'gazenas mutre', 
          stars: 5,
          price: 65
        },
        { 
          img: 'src/assets/prod1-3.jpg',
          title: 'gazenas mitra', 
          stars: 5,
          price: 84 
        },
        { 
          img: 'src/assets/prod1-4.jpg',
          title: 'pizan matrme', 
          stars: 5,
          price: 50, 
          oldPrice: 53,
          flags: ['flag_sale', 'flag_new']
        },
        { 
          img: 'src/assets/prod1-1.jpg',
          title: 'kazens dimans', 
          stars: 5,
          price: 84 
        },
        { 
          img: 'src/assets/prod1-2.jpg',
          title: 'gazenas mutre', 
          stars: 5,
          price: 65
        },
        { 
          img: 'src/assets/prod1-3.jpg',
          title: 'gazenas mitra', 
          stars: 5,
          price: 84 
        },
        { 
          img: 'src/assets/prod1-4.jpg',
          title: 'pizan matrme', 
          stars: 5,
          price: 50, 
          oldPrice: 53,
          flags: ['flag_sale', 'flag_new']
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
