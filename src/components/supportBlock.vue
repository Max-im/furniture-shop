<template> 
  <div class="supportBlock">
    <div class="container supportBlock__container">
      <ul class="supportBlock__list">
        <li 
          class="supportBlock__item" 
          v-for="item in infoList">
          <img 
            :src="item.img" 
            class="supportBlock__img" 
            alt="support icon">
          <div class="supportBlock__content">
            <h3 class="supportBlock__title">{{item.title}}</h3>
            <p class="supportBlock__text">{{item.text}}</p>
          </div>
        </li>
      </ul>
      

    </div>
  </div><!-- supportBlock -->
</template>




<script>

export default {
  name: 'supportBlock',
  data () {
    return {
      infoList: [
        {img:'src/assets/icon1.png', title: 'free shipping', text: 'Vestibulum dolor purus porta'},
        {img:'src/assets/icon2.png', title: 'money back guarantee', text: 'Vestibulum dolor purus porta'},
        {img:'src/assets/icon3.png', title: '24 hours support', text: 'Vestibulum dolor purus porta'}        
      ]
    }
  },
  
}



</script>






<style lang="scss">
  
.supportBlock{
  &__list{
    display: flex;
    flex-wrap: wrap;
  }  
  &__item{
    width: 100%;
    background: #49ccf3;
    height: 120px;
    display: flex;
    padding: 0 0 0 13px;
    box-sizing: border-box;
    align-items: center;
    &:nth-child(2){
      position: relative;
      background: #13b5e6;
    }
    
  }
  &__img{
    margin: 0 12px 0 0;
    display: block;
    box-shadow: 0 0 6px rgba(0,0,0,.15);
    border-radius: 50%;
  }
  &__title{
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 900;
  }
  &__text{
    color: #fff;
    font-size: 12px;
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
.supportBlock{
  &__list{
    flex-wrap: nowrap;
  }  
  &__item{
    width: calc(100% / 3);
    height: 160px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0 10px 23px;
    &:nth-child(2){
      position: relative;
      background: #13b5e6;
      &:before{
        content: '';
        position: absolute;
        top: 0;
        left: -45px;
        width: 0; 
        height: 0; 
        border-top: 80px solid transparent;
        border-bottom: 80px solid transparent;
        border-right: 45px solid #13b5e6;
      }
      &:after{
        content: '';
        position: absolute;
        top: 0;
        right: -45px;
        width: 0; 
        height: 0; 
        border-top: 80px solid transparent;
        border-bottom: 80px solid transparent;
        border-left: 45px solid #13b5e6;
      }
    }
  }
  &__img{
    margin: 0 12px 10px 0;
    display: block;
    box-shadow: 0 0 6px rgba(0,0,0,.15);
    border-radius: 50%;
  }
  &__title{
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 900;
  }
  &__text{
    color: #fff;
    font-size: 12px;
  }
  &__content{
    width: 100%;
    text-align: center;
  }
}

}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {

.supportBlock{
  &__list{
    flex-wrap: nowrap;
  }  
  &__item{
    width: calc(100% / 3);
    height: 140px;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 0px 0 0px 23px;
    &:nth-child(2){
      position: relative;
      background: #13b5e6;
      &:before{
        content: '';
        position: absolute;
        top: 0;
        left: -45px;
        width: 0; 
        height: 0; 
        border-top: 70px solid transparent;
        border-bottom: 70px solid transparent;
        border-right: 45px solid #13b5e6;
      }
      &:after{
        content: '';
        position: absolute;
        top: 0;
        right: -45px;
        width: 0; 
        height: 0; 
        border-top: 70px solid transparent;
        border-bottom: 70px solid transparent;
        border-left: 45px solid #13b5e6;
      }
    }
    &:nth-child(3){
      padding: 0 0 0 68px;
    }
  }
  &__img{
    margin: 0 12px 0 0;
    display: block;
    box-shadow: 0 0 6px rgba(0,0,0,.15);
    border-radius: 50%;
  }
  &__title{
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 900;
  }
  &__text{
    color: #fff;
    font-size: 12px;
  }
  &__content{
    text-align: left;
  }
}

}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {


}


</style>
