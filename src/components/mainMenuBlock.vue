<template> 
  <div class="mainMenu">
    <div class="container mainMenu__container">
      
      <div class="mainMenu__wrapper">
        
        <div class="mainMenu__sendwich" v-if="showSendwich">
          <i 
            @click="toggleMenu"
            class="fa fa-bars" 
            aria-hidden="true">
          </i>
        </div>

        <ul class="mainMenu__list" v-if="showMenu">

          <li v-for="item in mainMenuList">
            <a
              class="mainMenu__link"
              :class="item.class"
              :href="item.href">
              {{item.name}}
            </a>
          </li>
        </ul>
      </div>


      <ul class="mainMenu__socialList">
        <li
          v-for="item in socList" 
          class="mainMenu__socialItem">
          <a 
            class="fa" 
            :class="item.name"
            :href="item.href">
          </a>
        </li>
      </ul>
    </div><!-- container -->
  </div><!-- mainMenu -->
</template>




<script>


export default {
  name: 'mainMenu',
  data () {
    return {
      mainMenuList: [
        {class:'fa fa-home mainMenu__item_active', href: '#', name: ''},
        {class:'hot', href: '#', name: 'features'},
        {class:'', href: '#', name: 'leaving room'},
        {class:'new', href: '#', name: 'bedrooms'},
        {class:'', href: '#', name: 'blog'},
        {class:'', href: '#', name: 'contact us'}
      ],
      socList: [
        {href: '#', name:'fa-facebook'}, 
        {href: '#', name:'fa-twitter'}, 
        {href: '#', name:'fa-linkedin'}, 
        {href: '#', name:'fa-google-plus'}, 
        {href: '#', name:'fa-pinterest'}
      ],
      windowWidth: 's',
      showMenu: false,
      showSendwich: true,
    }
  },
  methods: {
    setWindowWidth: function(){
      const winWid = window.innerWidth;
      if(winWid > 992){
        this.windowWidth = 'l';
        this.showMenu = true;
        this.showSendwich = false;
      }
      else if( winWid > 768 ){
        this.windowWidth = 'm';
        this.showMenu = true;
        this.showSendwich = false;
      }
      else if( winWid > 480 ){
        this.windowWidth = 's';
        this.showMenu = false;
        this.showSendwich = true;
      }
      else if( winWid < 480 ){
        this.windowWidth = 'xs';
        this.showMenu = false;
        this.showSendwich = true;
      }
      else{
        this.windowWidth = 'xl';
        this.showMenu = true;
        this.showSendwich = false;
      }
    },
    toggleMenu: function(){
      this.showMenu = !this.showMenu;
    }
  },
  created: function(){
    this.setWindowWidth();

    window.addEventListener('resize', this.setWindowWidth)
  } 

 
}



</script>






<style lang="scss">
  $accent: #279cc7;


  .mainMenu{
    background: rgba(22,22,22,.9);
    position: absolute;
    width: 100%;
    &__container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__wrapper{
      position: relative;
      order: 2;
    }
    &__sendwich{
      .fa{
        padding: 20px;
        color: #fff;
        cursor: pointer;
        font-size: 24px;
        line-height: 14px;
        &:hover{
          color: $accent;
        }
      }
    }
    &__list{
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 0;
      top: 100%;
      width: 200px;
      background: rgba(22,22,22,.9);
      .fa{
        font-size: 24px;
        display: block;
        line-height: 14px;
        font-weight: normal;
      }
    }
    &__item{
      &_active{
        background: $accent;
      }
    }
    &__link{
      text-transform: uppercase;
      color: #fff;
      font-weight: 800;
      font-size: 14px;
      padding: 20px;
      display: block;
      transition: all .2s;
      &:hover{
        transition: all .2s;
        background: $accent;
      }
    }
    &__socialList{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 25px;
      order: 1;
      box-sizing: border-box;
      width: 100%;
      background: rgba(73,73,73,.8);
    }
    &__socialItem{
      .fa{
        padding: 20px 0;
        font-size: 16px;
        color: #b6b6b6;
        line-height: 14px;
      }
    }
  }



/*==========  Mobile First Method  ==========*/

/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) {




}

/* Extra Small Devices, Phones */
@media only screen and (min-width : 480px) {
 .mainMenu{
    &__wrapper{
      order: 1;
    }
    &__socialList{
      order: 2;
      width: 170px;
    }
  }



}




/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {
.mainMenu{
    &__wrapper{
      position: relative;
    }
    &__list{
      flex-direction: row;
      position: static;
      width: auto;
      background: none;
    }
    &__link{
      padding: 20px 12px;
    }
    
  }



}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {
.mainMenu{
    &__link{
      padding: 20px;
    }
    
  }



}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {



}


</style>
