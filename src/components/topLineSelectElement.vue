<template> 
  <ul class="topLine__selectEl">
    
    <li class="topLine__selected topLine__item" @click="toggleDropdownMenu"> 
      <img 
        v-if="items[num].img" 
        class="topLine__flag"
        :src=items[num].img 
        :alt=items[num].name /> 
        {{ items[num].name}}
      <i class="fa fa-caret-down" aria-hidden="true"></i>
    </li>

    <ul class="topLine__subSelectEl hide">
      <li 
        v-for="(item, index) in items" 
        class="topLine__subItem"
        :data-index="index" 
        @click="changeCurrent" >
        <img 
          v-if="item.img" 
          class="topLine__flag"
          :src=item.img 
          :alt=item.name /> 
          {{ item.name }}  
      </li>
    </ul>
  </ul>

</template>




<script>

export default {
  name: 'topLineSelectElement',
  data () {
    return {
      num: 0
    }
  },
  props: ['items'],
  methods:{
    
    changeCurrent: function(e){
      this.num = +e.target.dataset.index;
      const subMenu = e.target
        .closest('.topLine__subSelectEl');
      subMenu.classList.add('hide');
    },


    toggleDropdownMenu: function(e){
      const subMenu = e.target
        .closest('.topLine__selectEl')
        .querySelector('.topLine__subSelectEl'); 
      subMenu.classList.toggle('hide');
    }
  }
}



</script>






<style lang="scss">

 



 /* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  


}





/* Small Devices, Tablets */
@media only screen and (max-width : 935px) {




}




/* Extra Small Devices, Phones */
@media only screen and (max-width : 730px) {



}



/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {

}





/* Custom, iPhone Retina */
@media only screen and (max-width : 320px) {



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
