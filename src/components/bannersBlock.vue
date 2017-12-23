<template> 
  <div class="banners">
    <div class="container">
      
    <ul class="banners__list">
      <li class="banners__item" v-for="banner in bannersList">
        <img :src="banner" class="banners__img" alt="banner">
      </li>
    </ul>
    </div>
    
  </div><!-- banners -->
</template>




<script>

export default {
  name: 'banners',
  data () {
    return {
      bannersList: [
        'src/assets/img-1.jpg',
        'src/assets/img-2.jpg',
        'src/assets/img-3.jpg'
      ]
    }
  }
}



</script>






<style lang="scss">
  
  .banners{
    z-index: 100;
    &__list{
      display: flex;
      flex-wrap: wrap;
    }
    &__item{
      position: relative;
      width: 100%;
      &:after{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 10;
        background: rgba(255,255,255,.25);
        display: none;
      }
      &:hover{
        &:after{
          display: block;
        }
      }
    }
    &__img{
      width: 100%;
    }
  }



/*==========  Mobile First Method  ==========*/

/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) {




}

/* Extra Small Devices, Phones */
@media only screen and (min-width : 480px) {
  .banners{
    &__list{
      flex-wrap: nowrap;
    }
    &__item{
      width: auto;
    }
  } 
 

}




/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {

}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {
.banners{
   margin: -112px 0 0 0;
}
}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {


}


</style>
