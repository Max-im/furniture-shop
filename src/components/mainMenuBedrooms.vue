<template> 
  <div class="bedroomsMenu">
    <ul class="bedroomsMenu__list">
      <li class="bedroomsMenu__item">
        <h3 class="bedroomsMenu__title">accessories</h3>
      </li>
      <li class="bedroomsMenu__item" v-for="item in menuList">
        <a 
          class="bedroomsMenu__link" 
          href="#">
          {{item}}
        </a>
      </li>
    </ul>  
    
    <div class="bedroomsMenu__imgBlock">
      <productCard
        class="bedroomsMenu__imgBlockItem"
        v-for="item in cardList"
        :data="item"
      ></productCard>
    </div>
  </div><!-- bedroomsMenu -->
</template>




<script>
import productCard from './productCard.vue';


export default {
  name: 'bedroomsMenu',
  data () {
    return {
      menuList: ['matteresses', 'quits & coverlets', 'dressers & chests', 'nightsends', 'duvet fills', 'shover heads'],
      cardList: [
        { 
          img: 'src/assets/prod2-1.jpg',
          title: 'auzam mipame', 
          stars: 5,
          price: 74, 
        },
        { 
          img: 'src/assets/prod2-2.jpg',
          title: 'sazen kutemas', 
          stars: 5,
          price: 80, 
          oldPrice: 84
        }
      ]
    }
  },
  components: {
    productCard
  } 

 
}



</script>






<style lang="scss">
  $accent: #279cc7;

.bedroomsMenu{
  display: flex;
  &__list{
    background: #f2f2f2;
    padding: 30px 40px 30px 30px;
  }
  &__title{
    color: #494949;
    font-size: 14px;
    font-weight: 800;
    padding: 0 0 10px 0;
    text-transform: uppercase;
  }
  &__link{
    font-size: 14px;
    color: #494949;
    text-transform: capitalize;
    white-space: nowrap;
    line-height: 28px;
  }
  &__imgBlock{
    background: #fff;
    padding: 30px 0 30px 30px;
    display: flex;
  }
  &__imgBlockItem{
    margin: 0 30px 0 0;
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


}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {
.bedroomsMenu{
  display: flex;
  &__list{
    background: #f2f2f2;
    padding: 30px 40px 30px 30px;
  }
  &__title{
    color: #494949;
    font-size: 14px;
    font-weight: 800;
    padding: 0 0 10px 0;
    text-transform: uppercase;
  }
  &__link{
    font-size: 14px;
    color: #494949;
    text-transform: capitalize;
    white-space: nowrap;
    line-height: 28px;
  }
  &__imgBlock{
    background: #fff;
    padding: 30px 0 30px 30px;
    display: flex;
  }
  &__imgBlockItem{
    margin: 0 30px 0 0;
  }
}


}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {



}


</style>
