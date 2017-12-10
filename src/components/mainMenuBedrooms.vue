<template> 
  <div class="bedroomsMenu">
    <ul class="bedroomsMenu__list">
      <li class="bedroomsMenu__item">
        <h3 class="bedroomsMenu__title submenu__title">accessories</h3>
      </li>
      <li 
        class="bedroomsMenu__item" 
        v-for="item in menuList">
        <a 
          class="bedroomsMenu__link submenu__link" 
          href="#">
          {{item}}
        </a>
      </li>
    </ul>  
    
    <div class="bedroomsMenu__imgBlock">
      <productCard
        class="bedroomsMenu__productCard"
        v-for="item in cardList"
        :key="item.title"
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
  flex-direction: column;
  &__list{
    background: #f2f2f2;
    padding: 10px 20px 10px 10px;
  }
  &__link{
    line-height: 28px;
  }
  &__imgBlock{
    background: #fff;
    padding: 10px 0 10px 10px;
    display: flex;
    flex-direction: column;
  }
  &__productCard{
    margin: 0 10px 10px 0;
  }
}
 


/*==========  Mobile First Method  ==========*/

/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) {




}

/* Extra Small Devices, Phones */
@media only screen and (min-width : 480px) {
 .bedroomsMenu{
  flex-direction: row;
  &__list{
    padding: 10px 20px 10px 10px;
  }
  &__imgBlock{
    padding: 10px 0 10px 10px;
    display: flex;
    width: 300px;
    flex-direction: column;
  }
  &__productCard{
    margin: 0 10px 10px 0;
  }
}

}




/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {


}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {
.bedroomsMenu{
  &__list{
    padding: 20px;
  }
  &__imgBlock{
    padding: 20px 0 20px 20px;
    width: auto;
    flex-direction: row;
  }
  &__productCard{
    margin: 0 20px 0px 0;
  }
}

}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {
.bedroomsMenu{
  &__list{
    padding: 30px 40px 0 30px;
  }
  &__imgBlock{
    padding: 30px 0 30px 30px;
    width: auto;
    flex-direction: row;
  }
  &__productCard{
    margin: 0 30px 0px 0;
  }
}


}


</style>
