<template> 
  <div class="popular">
    <div class="container popular__container">
      
      <div class="dayDeals">
        <h3 class="dayDeals__title">
          <b class="dayDeals__title_bold">deals</b> 
          of the day
        </h3>  
        
        <p class="dayDeals__text">
          Mauris ut tincidunt nisi, id auctor libero. Etiam aliquet felis et consectetur faucibus. Praesent aliquam, lec tempus consequat,deserunt jowl prosciutto boudin.
        </p>

        <ul class="dayDeals__list">
          <li
            v-for="item of dayDealsList" 
            class="dayDeals__item">
            <a 
              class="dayDeals__link" 
              :href="item.link">
              
              <img 
                :src="item.img" 
                :alt="item.alt" />
            </a>
          </li>
        </ul>
      </div>
  

      <div class="products">
        <div class="products__main">

          <div class="products__main_top">
            
            <div class="products__timer">
              <p>{{products.list[products.main].timer}}</p>
            </div>
            <div class="products__imgWrap">
              <img 
                class="products__img"
                :src="products.list[products.main].img" 
                :alt="products.list[products.main].title">
            </div>
            
          </div>

          <div class="products__main_bottom">
            
            <div>
              <h4 
                class="products__title">
                {{products.list[products.main].title}}
              </h4>
              <div class="products__priceBlock">
                <span 
                  class="price_old" 
                  v-if="products.list[products.main].oldPrice">
                  {{products.list[products.main].oldPrice | currency}}
                </span>
                <span class="price">
                  {{products.list[products.main].price | currency}}
                </span>
              </div>
              <ul class="products__starBlock">
                <li v-for="star in 5" class="productCard__stars">
                  <i 
                    class="fa" 
                    :class="products.list[products.main].stars >= star ? 'fa-star' : 'fa-star fa-star_o' "
                    aria-hidden="true">
                  </i>
                </li>
              </ul>
            </div>

            <div>
              <a 
                @click.prevent="decrement"
                class="products__controll fa fa-angle-left " 
                href="#">
              </a>
              <a 
                @click.prevent="increment"
                class="products__controll fa fa-angle-right" 
                href="#">
              </a>
            </div>

          </div><!-- products__main_bottom -->

        </div><!-- products__main -->

        <div class="products__list">
          
          <ul>
            <li> 
              <h3 class="products__mainTitle">
                <b class="products__mainTitle_bold">popular</b> 
                products
              </h3>
            </li>


            <li 
              v-if="index !== products.main"
              v-for="(item, index) in products.list.length">
              <a 
                @click.prevent="changeMainItem(index)"
                href="#" 
                class="products__listItem">
                
                <div class="products__listImgWrap">
                  <img 
                    class="products__listImg"
                    :src="products.list[index].img" 
                    :alt="products.list[index].title">
                </div>

                <div>
                  <h4 
                    class="products__title">
                    {{products.list[index].title}}
                  </h4>
                  <div class="products__priceBlock">
                    <span 
                      class="price_old" 
                      v-if="products.list[index].oldPrice">
                      {{products.list[index].oldPrice | currency}}
                    </span>
                    <span class="price">
                      {{products.list[index].price | currency}}
                    </span>
                  </div>
                  <ul class="products__starBlock">
                    <li v-for="star in 5" class="productCard__stars">
                      <i 
                        class="fa" 
                        :class="products.list[index].stars >= star ? 'fa-star' : 'fa-star fa-star_o' "
                        aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>

        </div><!-- products__list -->
                      
      </div><!-- products -->
      


    </div><!-- container -->
  </div><!-- popular -->
</template>




<script>

export default {
  name: 'popularBlock',
  data () {
    return {
      dayDealsList: [
        { img: '/src/assets/section1.jpg', link: '#', alt: 'living room' },
        { img: '/src/assets/section2.jpg', link: '#', alt: 'kitchen' },
        { img: '/src/assets/section3.jpg', link: '#', alt: 'work place' },
        { img: '/src/assets/section4.jpg', link: '#', alt: 'wardrobe' }
      ],
      products: {
        main: 0,
        list: [
          {
            img: '/src/assets/prod-min-0.jpg', 
            title: 'auzan mipane', 
            stars: 3, 
            price: 80, 
            oldPrice: 95,
            sale: true,
            timer: 100
          },
          {
            img: '/src/assets/prod-min-1.jpg', 
            title: 'kazens dimans', 
            stars: 5, 
            price: 80,
            sale: false,
            timer: 150
          },
          {
            img: '/src/assets/prod-min-2.jpg', 
            title: 'gazenas mutare', 
            stars: 5, 
            price: 65,
            sale: false,
            timer: 130
          },
          {
            img: '/src/assets/prod-min-3.jpg', 
            title: 'gazenas mitra', 
            stars: 5, 
            price: 84,
            sale: false,
            timer: 180
          }
        ]
      }
    }
  },
  methods: {
    increment: function(){
      if(this.products.main < this.products.list.length - 1){
        this.products.main++;
      }
    },
    decrement: function(){
      if(this.products.main > 0){
        this.products.main--;
      }
    },
    changeMainItem: function(val){
        this.products.main = val;
    }
  }
}



</script>






<style lang="scss">
  $accent: #279cc7;


.popular{
  background: #eee;
  position: relative;
  top: -2px;
  &__container{
    display: flex;
    flex-wrap: wrap;
  }
}


.dayDeals{
  background: $accent;
  padding:  0 0 30px 0;
  width: 100%;
  &__title{
    text-transform: uppercase;
    border-bottom: 1px solid #1581a9;
    padding: 30px;
    color: #fff;
    &_bold{
      font-weight: 900;
    }
  }
  &__text{
    color: #fff;
    margin: 30px;
    font-size: 12px;
    line-height: 20px;
    text-align: justify;
  }
  &__list{
    display: flex;
    flex-wrap: wrap;
    width: 257px;
    margin: 30px auto 0 auto;
  }
  &__item{
    margin: 0;
    padding: 0;
    width: 50%;
    &:hover{
      z-index: 1;
      box-shadow: -9px 9px 10px rgba(0,0,0,.15);
    }
  }
  &__link{
    height: 128px;
    display: block;
  }
}


.products{
  background: #fff;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  &__main{
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    border-right: 1px solid #ddd;
    &:hover{
      .products__title{
        color: $accent;
      }
    }
    &_top{
      display: flex;
    }
    &_bottom{
      display: flex;
      justify-content: space-between;
    }
  }
  &__mainTitle{
    text-transform: uppercase;
    padding: 30px;
    color: #484848;
    font-size: 20px;
    &_bold{
      font-weight: 900;
    }
  }
  &__imgWrap{
    width: 100%;
  }
  &__img{
    max-width: 400px;
    width: 100%;
    display: block;
    margin: 0 auto;
  }
  &__listItem{
    display: flex;
    padding: 20px;
    border-top: 1px solid #ddd;
    &:hover{
      .products__title{
        color: $accent;
      }
    }
  }
  &__list{
    flex: 1 0 auto;
  }
  &__listImgWrap{
    width: 90px;
    border: 1px solid #ddd;
    margin: 0 20px 0 0;
  }
  &__listImg{
    width: 100%;
  }
  &__title{
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 900;
    color: #484848;
    margin: 0 0 10px 0;
  }
  &__priceBlock{
    display: flex;
    align-items: center;
    margin: 0 0 10px 0;
    .price{
      display: inline-block;
      text-align: left;
    }
  }
  &__starBlock{
    display: flex;
    .fa{
      margin: 0 1px;
    }
  }
  &__controll{
    width: 35px;
    height: 35px;
    display: inline-block;
    border: 1px solid #ddd;
    color: #9d9d9d;
    text-align: center;
    line-height: 35px;
    box-sizing: border-box;
    font-size: 22px;
    &:hover{
      color: #fff;
      background: $accent;
    }
  }
}



/*==========  Mobile First Method  ==========*/

/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) {




}

/* Extra Small Devices, Phones */
@media only screen and (min-width : 480px) {
 .products{
    &__main{
      padding: 30px;
    }
  }
}




/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {
.dayDeals{
  width: 100%;
  &__title{
    font-size: 20px;
  }
  &__list{
    width: auto;
    justify-content: center;
  }
  &__item{
    width: auto;
  }
}


.products{
  &__list{
    >ul{
      display: flex;
      flex-wrap: wrap;
      >li:first-child{
        width: 100%
      }
      >li{
        width: calc(100% / 3);
      }
    }    
  }
  &__listItem{
    display: flex;
    padding: 20px 5px;
  }
  
}

}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {

.popular{
  top: -2px;
  padding: 0 0 60px 0;
  &__container{
    position: relative;
    top: -50px;
    z-index: 600;
  }
}


.dayDeals{
  width: 100%;
  &__title{
    font-size: 20px;
  }
  &__list{
    width: auto;
    justify-content: center;
  }
  &__item{
    width: auto;
  }
}


.products{
  flex-wrap: nowrap;
  &__main{
    width: 70%;
  }
  &__mainTitle{
    text-transform: uppercase;
    padding: 30px;
    color: #484848;
    font-size: 20px;
    &_bold{
      font-weight: 900;
    }
  }
  &__imgWrap{
    width: 100%;
  }
  &__img{
    max-width: 400px;
    width: 100%;
    display: block;
    margin: 0 auto;
  }
  &__listItem{
    display: flex;
    padding: 20px;
    border-top: 1px solid #ddd;
    &:hover{
      .products__title{
        color: $accent;
      }
    }
  }
  &__list{
    flex: 1 0 auto;
    width: 30%;
    >ul{
      display: block;
      >li{
        width: 100%;
      }
    }

  }
}



}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {



.dayDeals{
  width: 30%;
}


.products{
  width: 70%;
}




}


</style>
