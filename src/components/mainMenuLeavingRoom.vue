<template> 
  <div class="leavingRoomMenu submenu">
    <div class="leavingRoomMenu__listWrap">
      
      <ul class="leavingRoomMenu__list" v-for="item in menuList">
        
        <li class="leavingRoomMenu__item">
          <h3 
            class="leavingRoomMenu__title submenu__title">
            {{item.title}}
          </h3>
        </li>
        

        <li class="leavingRoomMenu__item" v-for="subitem in item.list">
          <a 
            class="leavingRoomMenu__link submenu__link" 
            href="#">
            {{subitem.name}}
          </a>
        </li>

      </ul>  
    </div>
    <a :href="banner.link" class="leavingRoomMenu__imgBlock">
      <img class="leavingRoomMenu__img" :src="banner.img" alt="">
    </a>
  </div><!-- featuresMenu -->
</template>




<script>

export default {
  name: 'leavingRoomMenu',
  data () {
    return {
      banner: {
        img: 'src/assets/banner.jpg',
        link: '#'
      },
      menuList: [
        {
          title: 'accessories',
          list: [ 
            {name: 'clocks'}, 
            {name: 'dicorative shelving'}, 
            {name: 'desktop'}, 
            {name: 'dividers & screens'}, 
            {name: 'fireplace'}, 
            {name: 'glassware & ceramic'}, 
            {name: 'mirrors'}
          ]
        },
        {
          title: 'office furniture',
          list: [
            {name: 'bookcases'}, 
            {name: 'other furniture'}, 
            {name: 'chairs'}, 
            {name: 'desks'}, 
            {name: 'office lamps'}, 
            {name: 'rocking chairs'}, 
            {name: 'trunks'}
          ]
        },
        {
          title: 'bed & bath',
          list: [
            {name: 'bathtimg goods'}, 
            {name: 'bed & bath accessories'}, 
            {name: 'bedding'}, 
            {name: 'blankets'}, 
            {name: 'shower curtains'}, 
            {name: 'step stools'}, 
            {name: 'towels & rugs'}
          ]
        }
      ]
    }
  }
}



</script>






<style lang="scss">
  $accent: #279cc7;


.leavingRoomMenu{
  &__listWrap{
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
  }
  &__list{
    width: 100%;
    margin: 0 0 15px 0;
  }
  &__imgBlock{
    display: block;
    width: 100%;
    margin: 15px 0 0 0;
  }
  &__img{
    width: 100%;
  }
  &__link{
    letter-spacing: -.5px;
  }
}




/*==========  Mobile First Method  ==========*/

/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) {




}

/* Extra Small Devices, Phones */
@media only screen and (min-width : 480px) {
 
.leavingRoomMenu{
  &__list{
    width: 33%;
  }
  &__imgBlock{
    margin: 15px 0 0 0;
  }
}

}




/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {


}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {


}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {


}


</style>
