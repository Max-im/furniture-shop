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
          <span 
            :style="{background: subitem.color}"
            class="featuresMenu__color" 
            v-if="subitem.color">
          </span>
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
            {name: 'brown', color: '#925829'}, 
            {name: 'red', color: '#f64b00'}, 
            {name: 'green', color: '#80a439'}, 
            {name: 'orange', color: '#e9a105'}, 
            {name: 'blue', color: '#03a9f4'}
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






.featuresMenu{
  display: flex;
  justify-conten: space-between;
  flex-wrap: wrap;
  &__list{
    width: 100%;
    margin: 0 0 10px 0;
    padding: 5px;
    box-sizing: border-box;
  }
  &__color{
    width: 10px;
    height: 10px;
    display: inline-block;
    margin: 0 5px 0 0;
  }
}


/*==========  Mobile First Method  ==========*/

/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) {




}

/* Extra Small Devices, Phones */
@media only screen and (min-width : 480px) {
 .featuresMenu{
  &__wrapper{
    width: 450px;
  }
  &__list{
    width: 50%;
  }
}

}




/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {
.featuresMenu{
  &__wrapper{
    width: 100%;
    left: 0;
  }
  &__list{
    width: calc(100% / 3);
  }
}

}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {
.featuresMenu{
  &__list{
    width: calc(100% / 4);
  }
}

}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {

.featuresMenu{
  &__list{
    width: calc(100% / 5);
  }
}

}


</style>
