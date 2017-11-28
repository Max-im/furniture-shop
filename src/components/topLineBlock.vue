<template> 
  <div class="topLine">
    <div class="container topLine__container">
     
      <ul class="flex topLine__inner topLine__setupList">
        <li class="topLine__item_money">
          <selectElement
            :items="money">
          </selectElement>

        </li>
        <li class="topLine__item_lang">
          <selectElement
            :items="lang">
          </selectElement>
        </li>
        <li class="topLine__item">
          <i class="fa fa-user" aria-hidden="true"></i>
          My Account
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </li>
        <li class="topLine__item">
          <i class="fa fa-heart" aria-hidden="true"></i>
          My Wishlist 
        </li>
        <li class="topLine__item">
          <i class="fa fa-lock" aria-hidden="true"></i>
          Login
        </li>
      </ul>  



      <ul class="flex topLine__inner topLine__contactsList">
        <li class="topLine__item">
          <i class="fa fa-comment-o" aria-hidden="true"></i>
          Start <b>live chat</b>
        </li>
        <li class="topLine__item">
          <i class="fa fa-phone" aria-hidden="true"></i>
          Call our customer service <b>096-999-8386</b>
        </li>
      </ul>
      
    </div>
  </div>
</template>




<script>
import selectElement from './topLineSelectElement.vue';


export default {
  name: 'topLineBlock',
  data () {
    return {
      money: [{ name:'UAH', img: false}, {name: 'USD', img: false}, {name:'EUR', img: false}],
      lang: [
        { name:'English', img: 'src/assets/flag-en.png'}, 
        {name: 'French', img:'src/assets/flag-fr.png'}, 
        {name:'German', img:'src/assets/flag-gr.png'},
        {name: 'Argentina', img:'src/assets/flag-ag.png'}, 
        {name: 'Bolivia', img:'src/assets/flag-bl.png'}] 
    }
  },
  components: {
    selectElement
  }
 
}



</script>






<style lang="scss">

  $accent: #279cc7;

  .topLine{
    border-bottom: 1px solid #ddd;
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    &__container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__inner{
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__item{
      width: 100%;
      color: #484848;
      padding: 15px 0px;
      cursor: pointer;
      transition: all .3s;
      &:last-child{
        padding-right: 0;
      }
      &:first-child{
        padding-left: 0;
      }
      &:hover{
        transition: all .3s;
        color: $accent;
      }
      &_money{
        width: 100%;
        min-width: 48px;
      }
      &_lang{
        width: 100%;
        min-width: 95px;
      }
    }
    &__selectEl{
      position: relative;
    }
    &__selected{
      display: flex;
      align-items: center;
    }
    &__subSelectEl{
      position: absolute;
      background: #fff;
      box-shadow: 0 0 6px rgba(0,0,0,.35);
      left: -7px;
      top: 35px;
      width: 100%;
      z-index: 10;
    }
    &__subItem{
      display: flex;
      padding: 7px;
      box-sizing: border-box;
      color: #484848;
      width: 100%;
      cursor: pointer;
      &:hover{
        background: $accent;
        color: #fff;
      }
    }
    &__flag{
      margin: 0 5px 0 0;
    }
  }

  .fa{
    margin: 0 5px 0 0;
    &-caret-down{
      margin: 0 0 0 5px;
    }
  }
  
  b{
    font-weight: 800;
    text-transform: uppercase;
  }





/*==========  Mobile First Method  ==========*/

/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) {




}

/* Extra Small Devices, Phones */
@media only screen and (min-width : 480px) {
.topLine{
    &__container{
      flex-wrap: wrap;
    }
    &__inner{
      flex-wrap: nowrap;
      width: 100%;
    }
    &__item{
      width: auto;
      padding: 15px 0px;
      &_money{
        width: auto;
      }
      &_lang{
        width: auto;
      }
    }
  }


}




/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {



}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {
.topLine{
    &__container{
      flex-wrap: nowrap;
    }
    &__inner{
      flex-wrap: nowrap;
      width: auto;
    }
    &__item{
      width: auto;
      padding: 15px 10px;
      &_money{
        width: auto;
      }
      &_lang{
        width: auto;
      }
    }
  }


}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {



}


</style>
