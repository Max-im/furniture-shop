<template> 
  <div class="mixBlock">
    <div class="container mixBlock__container">
      
      <div class="mixBlock__node mixBlock__node_titleWrap logo">
          <h2 class="logo__title">furniture</h2>
          <p class="logo__subTitle">
            home 
            furniture 
            store
          </p>
      </div>
      
      <div class="mixBlock__node mixBlock__node_searchWrap search">
        <form 
          action="GET" 
          class="search__form"
          :class="[isFocused ? 'search__form_focused' :'']">
          <div 
            class="search__icon"
            :class="[isFocused ? 'search__icon_focused' : '']">
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
          <input 
            type="text" 
            placeholder="Enter your keyword..." 
            class="search__inp" 
            name="searchInp" 
            @focus="searchFocus"
            @blur="searchBlur"
            id="searchInp">
          <button type="button" class="btn search__btn">search</button>
        </form>
      </div>

      <div class="mixBlock__node mixBlock__node_shippingWrap shipping">
        <i class="fa fa-truck" aria-hidden="true"></i>
        <div>
          <h4 class="shipping__title">everyday free shipping</h4>
          <p class="shipping__subTitle">& no sales tax</p>
        </div>
      </div>
      <div class="mixBlock__node mixBlock__node_cardWrap myCard">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        <h4 class="myCard__title">my card</h4>
        <p class="myCard__itemAmount">{{cardItemAmount}} item (s)</p>

      </div>
    </div>
  </div>
</template>




<script>


export default {
  name: 'mixBlock',
  data () {
    return {
      cardItemAmount: 1,
      isFocused: false
    }
  },
  methods: {
    searchFocus: function(){
      this.isFocused = true;
    },
    searchBlur: function(){
      this.isFocused = false;
    }
  }

 
}



</script>






<style lang="scss">
  $accent: #279cc7;

.mixBlock{
  display: flex;

  &__container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-item: center;
  }
  &__node{
    box-sizing: border-box;
    padding: 15px 0;
  }
}

.logo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  &__title{
    color: $accent;
    font-size: 34px;
    font-weight: 900;
    text-transform: uppercase;
  }
  &__subTitle{
    text-transform: capitalize;
    font-size: 14px;
    color: #969696;
    line-height: 20px;
    letter-spacing: 2px;
    word-spacing: 5px;
  }
}
  

.search{
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
 
  &__form{
    display: flex;
    height: 40px;
    width: 100%;
    background: #f5f5f5;
    &_focused{
      box-shadow: 0px 0px 7px rgba(39,156,199,.4);
    }
  }
  &__icon{
    border: 1px solid #dadada;
    border-right: none;
    color: #828282;
    line-height: 40px;
    width: 40px;
    text-align: center;
    position: relative;
    &:after{
      content: '';
      position: absolute;
      width: 1px;
      height: 34px;
      right: 0;
      top: 3px;
      background: #dadada;
    }
    &_focused{
      color: $accent;
      border-color: $accent;
      background: #fff;
      &:after{
        display: none;
      }
    }
  }
  &__inp{
    border: none;
    background: none;
    border-top: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    border-radius: 0;
    font-size: 12px;
    text-indent: 15px;
    width: calc(100% - 40px);
    color: #999999;
    &:focus{
      background: #fff;
      color: #484848;
      border-color: $accent;
    }
  }
  &__btn{
    border-radius: 0;
    border: none;
    background: $accent;
    font-size: 14px;
    color: #fff;
    font-weight: 700;
    padding: 0 15px;
    cursor: pointer; 
    text-transform: capitalize;
  }
}


.shipping{
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  .fa{
    color: $accent;
    font-size: 30px;
    margin: 0 10px 0 0;
  }
  &__title{
    font-family: 'Lobster Two', cursive;
    font-weight: 700;
    font-style: italic;
    text-transform: capitalize;
    font-size: 18px;
    line-height: 22px;
    color: #444;
  }
  &__subTitle{
    color: #999;
    font-size: 14px;
    line-height: 20px;
    text-transform: capitalize;
  }
}



.myCard{
  background: $accent;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .fa{
    font-size: 24px;
    margin: 0 0 10px;
  }
  &__title{
    font-size: 14px;
    font-weight: 800;
    line-height: 20px;
    text-transform: uppercase;
  }
  &__itemAmount{
    font-size: 12px;
  }
}


/*==========  Mobile First Method  ==========*/

/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) {




}

/* Extra Small Devices, Phones */
@media only screen and (min-width : 480px) {

.logo{
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  order: 2;
}
  

.search{
  order: 1;
  align-items: center;
  &__form{
    width: auto;
  }
  &__inp{
    width: 330px;
  }
  &__btn{
    padding: 0 15px;
  }
}


.shipping{
  order: 3;
  align-items: center;
  width: 50%;
  justify-content: start;
}



.myCard{
  order: 4;
  flex-direction: column;
  justify-content: center;
  width: 170px;
}

}




/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {
.logo{
  flex-direction: column;
  justify-content: center;
  width: 30%;
  align-items: center;
  order: 2;
}
  

.search{
  order: 1;
  align-items: center;
  &__form{
    width: auto;
  }
  &__inp{
    width: 330px;
  }
  &__btn{
    padding: 0 15px;
  }
}


.shipping{
  order: 3;
  align-items: center;
  width: 30%;
}




}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {



}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {

.logo{
  width: auto;
  order: 1;
}
  

.search{
  padding-right: 45px;
   &:after{
    content: '';
    position: absolute;
    width: 1px;
    height: 75px;
    background: #dadada;
    right: 0;
    top: 15px;
  }
  order: 2;
  width: auto;
  &__form{
    width: auto;
  }
  &__inp{
    width: 330px;
  }
  &__btn{
    padding: 0 15px;
  }
}


.shipping{
  width: auto;
}





}


</style>
