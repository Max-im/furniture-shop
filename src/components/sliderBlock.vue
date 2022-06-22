<template> 
  <div class="slider">
    <div 
      v-for="item of sliderItems"
      class="slider__item">
      <img 
        :src="item.img" 
        alt="furniture" 
        class="slider__img">
        
        <div class="container slider__container">
          
          <h3 
            class="slider__title">
            {{item.title}}
          </h3>
          
          <h4 
            v-if="item.subTitle" 
            class="slider__subtitle">
            {{item.subTitle}}
          </h4>
          
          <h2 
            class="slider__collection">
            collection
          </h2>

          <a class="slider__btn" href="#">shop now</a>

        </div>
    </div>
  </div><!-- slider -->
</template>




<script>
import owlCarousel from 'owl.carousel';

export default {
  name: 'slider',
  data () {
    return {
      sliderItems: [
        {
          title: 'livingroom',
          subTitle: '',
          img: "src/assets/slider3.jpg"
        },
        {
          title: 'furniture',
          subTitle: 'survive the reality of everyday life',
          img: "src/assets/slider2.jpg"
        },
        {
          title: 'furniture',
          subTitle: 'survive the reality of everyday life',
          img: "src/assets/slider1.jpg"
        }
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
  $yel: #e4d16b;

  .slider{
    position: relative;
    z-index: 250;
    margin: 108px 0 0 0;
    &__container{
      position: absolute;
      top: 0px;
      left: 0;
      right: 0;
      height: 100%;
      margin: 0 auto;
      text-align: center;
      box-sizing: border-box;
      padding: 5% 0 0 0;
    }
    &__item{
      position: relative;
      z-index: 100;
    }
    &__img{
      width: 100%;
    }
    &__title{
      color: $yel;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 16px;
      display: inline-block;
      vertical-align: middle;
    }
    &__subtitle{
      vertical-align: middle;
      display: inline-block;
      color: #fff;
      font-weight: 700;
      border-left: 1px solid #fff;
      margin: 0 0 0 15px;
      padding: 0 0 0 15px;
      width: 150px;
      text-align: left;
      display: none;
      text-transform: capitalize;
    }
    &__collection{
      color: #fff;
      font-weight: 800;
      text-transform: uppercase;
    }
    &__btn{
      display: inline-block;
      color: #fff;
      margin: 30px 0 0 0;
      padding: 5px 15px;
      cursor: pointer;
      text-transform: uppercase;
      border: 1px solid #fff;
      position: relative;
      z-index: 150;
      font-size: 12px;
      font-weight: 700;
      font-family: 'Open Sans', sans-serif;
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
    height: 0;
    display: flex;
    padding: 0 3%;
    box-sizing: border-box;
    justify-content: space-between;
    z-index: 100;
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
      font-size: 30px;
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
      font-size: 30px;
    }
  }


  .owl-dots{
    position: absolute;
    bottom: 5%;
    width: 100%;
    left: 0;
    height: 10px;
    display: flex;
    justify-content: center;
  }

  .owl-dot{
    display: block;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    &:hover{
      background: #beae59
    }
    &.active{
      background: #beae59;
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
    &__container{
      padding: 10% 0 0 0;
    }
    &__title{
      font-size: 25px;
    }
    &__collection{
      font-size: 40px;
    }
    &__btn{
      padding: 5px 15px;
    }
    &__subtitle{
      font-size: 10px;
      width: 100px;
      line-height: 11px;
      display: inline-block;
    }
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
    margin: 0;
    &__container{
      padding: 11% 0 0 0;
    }
    &__title{
      font-size: 30px;
    }
    &__collection{
      font-size: 50px;
    }
    &__btn{
      padding: 10px 25px;
    }
    &__subtitle{
      font-size: 10px;
      width: 100px;
      line-height: 13px;
    }
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

  .owl-dots{
    bottom: 15%;
  }

}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {
.slider{
    &__title{
      font-size: 40px;
    }
    &__collection{
      font-size: 70px;
    }
    &__btn{
      padding: 15px 25px;
    }
    &__subtitle{
      font-size: 14px;
      width: 150px;
      line-height: 17px;
    }
  }

  .owl-dots{
    bottom: 80px;
  }

}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {
.slider{
    &__title{
      font-size: 48px;
      line-height: 60px;
    }
    &__collection{
      font-size: 80px;
    }
  }

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
