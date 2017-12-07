<template> 
  <div class="leavingRoomMenu submenu">
    <ul class="leavingRoomMenu__list" v-for="item in menuList">
      <li class="leavingRoomMenu__item">
        <h3 class="leavingRoomMenu__title submenu__title">{{item.title}}</h3>
      </li>
      <li class="leavingRoomMenu__item" v-for="subitem in item.list">
        <a 
          class="leavingRoomMenu__link submenu__link" 
          href="#">
          {{subitem.name}}
        </a>
      </li>
    </ul>  
    <div class="leavingRoomMenu__imgBlock">
      <img class="leavingRoomMenu__img" src="" alt="">
    </div>
  </div><!-- featuresMenu -->
</template>




<script>

export default {
  name: 'leavingRoomMenu',
  data () {
    return {
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


}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {


}


</style>
