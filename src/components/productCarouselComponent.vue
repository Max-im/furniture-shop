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
        items: 1,
        nav: true,
        navText: ['&#x27;','&#x27'],
        margin: 30,
        dots: false,
        dotsEach: false,
        responsive:{
          480: {
              items: 2
          },
          768: {
              items: 3
          },
          992: {
              items: 4
          }
      }
      });
    });
  }
}



</script>






<style lang="scss">

$accent: #279cc7;

  
.productCarousel{
  margin: 30px 0 0 0;
  position: relative;
  &__list{
    display: flex;
    justify-content: space-between;
  }
  &__item{
    box-sizing: border-box;
    position: relative;
  }


  .owl-prev, .owl-next{
    font-size: 0;
    display: none;
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
.productCarousel{
  .owl-prev, .owl-next{
    display: block;
    &:before{
      position: absolute;
      width: 35px;
      height: 35px;
      display: block;
      line-height: 35px;
      text-align: center; 
      color: #9d9d9d;
      font-size: 22px;
      border: 1px solid #ddd;
    }
  } 
  .owl-prev{
    &:before{
      left: 0;
      border-left: 1px solid rgba(0,0,0,.0);
    }
  } 
  .owl-next{
    &:before{
      right: 0;
      border-right: 1px solid rgba(0,0,0,.0);
    }
  } 
}


}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {

}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {


}


</style>
