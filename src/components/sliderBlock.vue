<template> 
  <div class="slider">
    <div 
      v-for="item of sliderItems"
      class="slider__item">
      <img 
        :src="item.img" 
        alt="furniture" 
        class="slider__img">
        
        <div class="container">
          
        </div>

    </div>
  </div><!-- slider -->
</template>




<script>

export default {
  name: 'slider',
  data () {
    return {
      sliderItems: [
        {img: "src/assets/slider1.jpg"},
        {img: "src/assets/slider2.jpg"},
        {img: "src/assets/slider3.jpg"}
      ]
    }
  },
  created: function(){
    $(document).ready(function(){
      $(".slider").owlCarousel({
        items: 1,
        nav: true,
        navText: [],
        dots: true,
        dotsEach: true
      });
    });
  }
 
}



</script>






<style lang="scss">
  $accent: #279cc7;

  .slider{
    position: relative;
    margin: 108px 0 0 0;
    &__item{
      position: relative;
    }
    &__img{
      width: 100%;
    }
  }


  .owl-item{
    display: inline-block;
  }
  .owl-stage-outer{
    overflow: hidden;
  }

  .owl-nav{
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    display: flex;
    padding: 0 3%;
    box-sizing: border-box;
    justify-content: space-between;
    z-index: 200;
  }

  .owl-prev{
    cursor: pointer;
    color: #fff;
    &:hover{
      color: $accent;
    }
    &:before{
      content: "\f104";
      font-family: 'FontAwesome';
    }
  }

  .owl-next{
    cursor: pointer;
    color: #fff;
    &:hover{
      color: $accent;
    }
    &:before{
      content: "\f105";
      font-family: 'FontAwesome';
    }
  }




/*==========  Mobile First Method  ==========*/

/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) {




}

/* Extra Small Devices, Phones */
@media only screen and (min-width : 480px) {
   
  .slider{
    margin: 54px 0 0 0;
  }


  .owl-prev{
    &:before{
      font-size: 46px;
    }
  }

  .owl-next{
    &:before{
      font-size: 46px;
    }
  }

}




/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {
.slider{
    margin: 0px;
  }

  .owl-prev{
    &:before{
      font-size: 76px;
    }
  }

  .owl-next{
    &:before{
      font-size: 76px;
    }
  }

}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {


}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {


.owl-prev{
    &:before{
      font-size: 85px;
    }
  }

  .owl-next{
    &:before{
      font-size: 85px;
    }
  }


}


</style>
