<template> 
  <div class="featuresMenu submenu" >
    <ul class="featuresMenu__list" v-for="item in menuList">
      <li class="featuresMenu__item">
        <h3 class="featuresMenu__title submenu__title">{{item.title}}</h3>
      </li>
      <li class="featuresMenu__item" v-for="subitem in item.list">
        <a 
          class="featuresMenu__link submenu__link" 
          href="#">
          {{subitem.name}}
        </a>
      </li>
    </ul>  
    
  </div><!-- featuresMenu -->
</template>




<script>

export default {
  name: 'featuresMenu',
  data () {
    return {
      menuList: [
        {
          title: 'layouts',
          list: [
            {name: 'hover style 2'}, 
            {name: 'hover style 3'}, 
            {name: 'hover style 4'}, 
            {name: 'hover style 5'}, 
            {name: 'hover style 6'}
          ]
        },

        {
          title: 'color styles',
          list: [
            {name: 'brown', color: ''}, 
            {name: 'red', color: ''}, 
            {name: 'green', color: ''}, 
            {name: 'orange', color: ''}, 
            {name: 'blue', color: ''}
          ]
        },

        {
          title: 'headers',
          list: [
            {name: 'header style 1'}, 
            {name: 'header style 2'}, 
            {name: 'header style 3'}, 
            {name: 'header style 4'},
            {name: 'header style 5'},
            {name: 'header style 6'},
            {name: 'header'}
          ]
        },
        {
          title: 'product detail layouts',
          list: [
            { name: 'product detail - full'},
            { name: 'product detail - left sidebar'},
            { name: 'product detail - right sidebar'},
            { name: 'thumbnail - horizontal'},
            { name: 'thumbnail - vertical'},
          ]
        },
        {
          title: 'zoom types',
          list: [
            {name: 'product page inner zoom'},
            {name: 'product page outer zoom'},
            {name: 'product page lens zoom'}
          ]
        },
        {
          title: 'listing layous',
          list: [
            {name: 'without sidebar'},
            {name: 'left sidebar'},
            {name: 'right sidebar'},
            {name: 'left sidebar'}
          ]
        },
        {
          title: 'about us layouts',
          list: [
            {name: 'about us style 1'},
            {name: 'about us style 2'},
            {name: 'about us style 3'},
            {name: 'about us style 4'}
          ]
        },
        {
          title: 'contact us layouts',
          list: [
            {name: 'contact us style 1'},
            {name: 'contact us style 2'},
            {name: 'contact us style 3'},
            {name: 'contact us style 4'}
          ]
        },
        {
          title: '404 page layouts',
          list: [
            {name: 'product detail'},
            {name: 'product detail'},
            {name: 'product detail'}
          ]
        },
        {
          title: 'effect hover product',
          list: [
            {name: 'simple'},
            {name: 'display second image'},
            {name: 'display second image'}
          ]
        }
      ]
    }
  }
}



</script>






<style lang="scss">
  $accent: #279cc7;


.submenu{
  background: #fff;
}  



.featuresMenu{
  &__list{
    margin: 0 0 10px 0;
    padding: 5px;
    box-sizing: border-box;
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


}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {


}


</style>
