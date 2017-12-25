<template> 
  <div class="productCard">

      <div class="productCard__contentBlock">
        
        <div class="productCard__imgBlock">
          <img class="productCard__img" :src="data.img" alt="products">
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
        <i class="fa fa-retweet" aria-hidden="true"></i>
        <a class="productCard__btn" href="#">add to cart</a>
        <i class="fa fa-heart" aria-hidden="true"></i>
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
  props: ['data'] 

 
}



</script>






<style lang="scss">
  $accent: #279cc7;


.productCard{
  border: 1px solid #ddd; 
  &__contentBlock{
    display: flex;
    padding: 5px 5px 5px 0;
    justify-content: space-between;
  }
  &__imgBlock{
    width: 80px;
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
    align-items: center;
    justify-content: space-between;
    .fa{
      font-size: 14px;
      color: #999;
      display: block;
      width: 15%;
      text-align: center;
      cursor: pointer;
    }
  }
  &__btn{
    font-size: 14px;
    text-transform: uppercase;
    color: $accent;
    font-weight: 900;
    padding: 5px;
    width: 70%;
    text-align: center;
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
    padding: 10px;
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
    padding: 15px;
  }
}




}


</style>
