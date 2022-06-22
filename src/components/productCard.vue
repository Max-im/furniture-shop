<template> 
  <div class="productCard">

      <div class="productCard__contentBlock">

        <div 
          v-if="data.flags" 
          v-for='item in data.flags' 
          class="flag" 
          :class="item">
        </div>
        
        <div class="productCard__imgBlock">
          <img class="productCard__img" :src="data.img" alt="products">
          <a 
            href="#" 
            data-tooltip="Quick view"
            @mouseover="showTooltip"
            @mouseleave="hideTooltip"
            class="productCard__view fa fa-search">
          </a>
        </div>
        
        <div class="productCard__textBlock">
          <h3 class="productCard__title">{{data.title}}</h3>

          <ul class="productCard__starsList">
            <li v-for="star in 5" class="productCard__stars">
              <i 
                class="fa" 
                :class="data.stars >= star ? 'fa-star' : 'fa-star fa-star_o' "
                aria-hidden="true">
              </i>
            </li>
          </ul>

          <div class="price productCard__price">
            <span 
              v-if="data.oldPrice"
              class="price_old">
              {{data.oldPrice | currency}}
            </span>
            {{data.price | currency}}
          </div>
        </div>
      
      </div>
      
      <div class="productCard__btnBlock">
        <a 
          class="productCard__btns" 
          @mouseover="showTooltip"
          @mouseleave="hideTooltip"
          data-tooltip="Compare" 
          href="#">
          <i class="fa fa-retweet" aria-hidden="true"></i>
        </a>
        <a 
          class="productCard__btn" 
          @mouseover="showTooltip"
          @mouseleave="hideTooltip"
          @click.prevent="addItemToCard(data.id)"
          data-tooltip="Add to card" 
          href="#">
          add to cart
        </a>
        <a 
          class="productCard__btns" 
          @mouseover="showTooltip"
          @mouseleave="hideTooltip"
          data-tooltip="Add to wishlist" 
          href="#">
          <i class="fa fa-heart" aria-hidden="true"></i>
        </a>
      </div>

  </div><!-- productCard -->
</template>




<script>


export default {
  name: 'productCard',
  data () {
    return {

    }
  },
  methods: {
    showTooltip: function(e){
      const target = e.target.closest('a');
      const tooltipText = e.target.closest('a').getAttribute('data-tooltip');
      if(!tooltipText) return;
      if(document.querySelector('.tooltip'))return;


      const coord = target.getBoundingClientRect();

      const elem = document.createElement('span');
      elem.classList.add('tooltip');
      elem.style.top = window.pageYOffset + coord.top - 35 +'px';
      elem.innerHTML = tooltipText;
      document.body.appendChild(elem);
      const elemWidth = elem.offsetWidth;
      const targetWidth = target.offsetWidth;
      elem.style.left = window.pageXOffset + coord.left - elemWidth / 2 + targetWidth / 2 +'px';
    },

    hideTooltip: function(e){
      document.querySelector('.tooltip').remove();
    }
    
  },
  props: ['data', "addItemToCard"] 
}



</script>






<style lang="scss">
  $accent: #279cc7;


.productCard{
  border: 1px solid #ddd; 
  position: relative;

  &:hover{
    .productCard__title{
      color: #beae59;
    }
    .productCard__btn{
      color: #beae59;
    }
    .productCard__view{
      display: block;
    }
    .productCard__imgBlock{
      &:before{
        display: block;
      }
    }
  }
  &__contentBlock{
    display: flex;
    padding: 5px 5px 5px 0;
    justify-content: space-between;
  }
  &__imgBlock{
    position: relative;
    width: 80px;
    &:before{
      content: '';
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 10;
      background: rgba(255,255,255,.5);
    }
  }
  &__view{
    font-family: 'FontAwesome';
    width: 40px;
    height: 40px;
    background: rgba(0,0,0,.5);
    color: #fff;
    font-size: 18px;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
    line-height: 40px;
    cursor: pointer;
    text-align: center;
    display: none;
    z-index: 15;
    &:hover{
      background: $accent;
    }
  }
  &__img{
    width: 100%;
  }
  &__title{
    font-size: 14px;
    font-weight: 900;
    color: #484848;
    text-transform: uppercase;
    text-align: center;
    margin: 10px 0 0 0;
  }
  &__starsList{
    margin: 10px 0 0 0;
    display: flex;
    justify-content: center;
  }
  &__stars{
    .fa{
      color: #ff9600;
      font-size: 12px;
    }
  }
  &__price{
    width: 100%;
    margin: 10px 0 0 0;
  }
  &__btnBlock{
    margin: 5px 0 0 0;
    border-top: 1px solid #ddd;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    .fa{
      font-size: 14px;
      color: #999;
      text-align: center;
      cursor: pointer;
    }
  }
  &__btns{
      height: 100%;
      width: 15%;
      position: relative;
      display: block;
      text-align: center;
      line-height: 25px;
      &:hover{
        background: $accent;
        .fa{
          color: #fff;
        }
      }
  }
  &__btn{
    position: relative;
    font-size: 14px;
    text-transform: uppercase;
    color: $accent;
    font-weight: 900;
    line-height: 25px;
    width: 70%;
    text-align: center;
    &:hover{
      background: $accent;
      color: #fff !important;
    }
  }

  .flag_sale{
    top: 10px;
    right: 10px;
  }
  .flag_new{
    top: 10px;
    left: 10px;
  }

}

.tooltip{
  position: absolute;
  z-index: 100;
  font-size: 12px;
  background: rgba(0,0,0,.5);
  color: #fff;
  border-radius: 20px;
  top: -40px;
  font-weight: normal;
  text-transform: none;
  white-space: nowrap;
  line-height: 25px;
  padding: 0 5px;
  &:after{
    content: '';
    position: absolute;
    width: 0; 
    height: 0; 
    bottom: -5px;
    left: calc(50% - 5px);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgba(0,0,0,.5);
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
.productCard{
  &__contentBlock{
    display: flex;
    padding: 10px;
    justify-content: space-between;
  }
  &__imgBlock{
    width: 100%;
  }
  &__btnBlock{
    margin: 5px 0 0 0;
    display: flex;
  }
  &__btn{
    line-height: 30px;
  }
  &__btns{
    line-height: 30px;
  }
  &__view{
    width: 70px;
    height: 70px;
    line-height: 70px;
  }
}

}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {
.productCard{
  &__contentBlock{
    padding: 0px 0 25px 0;
    flex-direction: column;
  }
  &__imgBlock{
    // width: 180px;
  }
}


}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {
.productCard{
  &__imgBlock{
    // width: 270px;
  }
  &__btn{
    line-height: 40px;
  }
  &__btns{
    line-height: 40px;
  }
}




}


</style>
