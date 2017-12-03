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
          
          <label 
            for="searchInp" 
            class="search__icon"
            :class="[isFocused ? 'search__icon_focused' : '']">
            <i class="fa fa-search" aria-hidden="true"></i>
          </label>
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
        <p class="myCard__itemAmount">{{cardItems.length}} item (s)</p>
      

        <div 
          class="myCard__hoverBlock cardHover">
          <div class="cardHover__topLine">
            {{ 
              cardItems.length === 0 ? 
              'There is no products' : 
              'Recently added item(s):' 
            }}
          </div>
          

          <div 
            v-for="item in cardItems" 
            class="cardHover__item">
            
            <img 
              class="cardHover__img" 
              :src=item.img 
              :alt=item.title />
            
            <div>
              <h3 
                class="cardHover__title">
                {{item.title}}
              </h3>

              <div class="cardHover__starsBlock">
                <ul class="cardHover__starsList">
                  <li v-for="star in 5" class="cardHover__stars">
                    <i 
                      class="fa" 
                      :class="[item.stars >= star ? 'fa-star' : 'fa-star-o']"
                      aria-hidden="true">
                    </i>
                  </li>
                </ul>
                <span class="cardHover__reviews">
                  {{item.rev}} Review(s)
                </span>
              </div>

              <div class="cardHover__priceBlock">
                <div class="price cardHover__price">{{item.price | currency}}</div>
                <label class="cardHover__inpWrap">Qty 
                  <input 
                    class="cardHover__inp" 
                    type="text"
                    @change="changeProductsAmount($event, item)" 
                    :value=item.amount />
                </label>
              </div>
              
            </div>
            
            <div class="cardHover__itemControl">
              <i class="fa fa-pencil" aria-hidden="true"></i>
              <i 
                class="fa fa-times" 
                @click="removeItemFromCard(item.id)" 
                aria-hidden="true">
              </i>
            </div>
          </div> <!-- item -->
          

          <div v-if='cardItems.length !== 0'>
            
            <div class="cardHover__subtotalBlock">
              <span class="cardHover__subtotal">Card subtotal:</span> 
              <span class="price price_blue">{{ cardSubtotal | currency }}</span>
            </div>
            
            <div class="cardHover__btnBlock">
              <button class="cardHover__viewCardBtn btn">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                view card
              </button>
              <button class="cardHover__viewCardBtn btn">
                <i class="fa fa-check-square-o" aria-hidden="true"></i>
                view card
              </button>
            </div>

          </div>

        </div><!-- myCard__hoverBlock cardHover -->
      </div><!-- mixBlock__node mixBlock__node_cardWrap myCard -->
    </div><!-- container mixBlock__container -->
  </div><!-- mixBlock -->
</template>




<script>


export default {
  name: 'mixBlock',
  data () {
    return {
      isFocused: false,
      cardItems: [
        {
          id: '001-prod',
          img:'src/assets/prod-min-2.jpg', 
          title: 'gazenas mutare', 
          stars: 5,
          price: 65, 
          rev: 2, 
          amount: 1
        }
      ]
    }
  },
  computed:{
    cardSubtotal: function(){
      let result = 0;
      this.cardItems.forEach(item => {
        result += item.price * item.amount;
      });
      return result;
    }
  },
  methods: {
    searchFocus: function(){
      this.isFocused = true;
    },
    searchBlur: function(){
      this.isFocused = false;
    },
    removeItemFromCard: function(id) {
      let index = ''; 
      this.cardItems.map((item, i) => {
        if(item.id === id){
          index = i;
        }
      });
      this.cardItems.splice(index, 1);
    },
    changeProductsAmount: function(e, obj) {
      let index = ''; 
      const elem = e.target.value;
      this.cardItems.map((item, i) => {
        if(item.id === obj.id){
          index = i;
        }
      });

      
      this.cardItems[index].amount = elem;
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
    padding: 0 15px;
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
  position: relative;
  text-align: center;
  color: #fff;
  cursor: pointer;
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
  &:hover{
    .cardHover{
      display: block;
    }    
  }
}

.cardHover{
  display: none;
  z-index: 200;
  position: absolute;
  top: 100%;
  cursor: auto;
  right: 0;
  color: #484848;
  background: #fff;
  box-sizing: border-box;
  padding: 15px;
  width: 290px;
  text-align: left;
  box-shadow: 0 0 6px rgba(0,0,0,.35);
  &__topLine{
    font-size: 12px;
  }
  &__item{
    border-top: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    position: relative;
    padding: 15px 0;
    margin: 15px 0;
    display: flex;
  }
  &__img{
    width: 60px;
    height: 100%;
    border: 1px solid #dadada;
    margin: 0 20px 0 0;
  }
  &__title{
    font-size: 14px;
    font-weight: 800;
    text-transform: uppercase;
  }

  &__starsBlock {
    display: flex;
    align-items: center;
    margin: 0 0 10px 0;
  }
  &__starsList{
    display: flex;
  }
  &__stars{
    .fa {
      font-size: 12px;
      color: #ff9600;
      margin: 0 2px 0 0;
    }
  }
  &__reviews{
    font-size: 12px;
    color: #999;
  }
  &__priceBlock{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__inpWrap{
    color: #999;
    font-size: 12px;
  }
  &__inp{
    font-size: 14px;
    text-align: center;
    border-radius: 0;
    width: 54px;
    height: 42px;
    background: #f2f2f2;
    color: #484848;
    border: 1px solid #dadada;
  }
  &__itemControl{
    position: absolute;
    right: 0;
    .fa{
      font-size: 14px;
      color: #c5c5c5;
      transition: all .3s;
      cursor: pointer;
      &:hover{
        transition: all .3s;
        color: darken(#c5c5c5, 20%);
      }
    }
  }
  &__subtotal{
    width: 82px;
    display: inline-block;
    font-size: 12px;
    color: #484848;
  }
  &__btnBlock{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #dadada;
    margin: 15px 0 0 0;
    padding: 15px 0 0 0;
  }
  &__viewCardBtn{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    width: 120px;
    .fa{
      font-size: 14px;
      margin: 0 5px 0 0
    }
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


.cardHover{
  // display: none;
  width: 390px;
  &__img{
    width: 92px;
  }
  &__starsBlock {
    margin: 0 0 20px 0;
  }
  &__starsList{
    margin: 0 15px 0 0;
  }
  &__price{
    margin: 0 15px 0 0;
  } 
  &__inp{
    margin: 0 0 0 5px;
  }
  &__subtotal{
    width: 114px;
  }
  &__viewCardBtn{
    width: 170px;
  }
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
