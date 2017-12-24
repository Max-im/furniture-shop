<template> 
  <div class="titleComponent">
    <h2 class="titleComponent__text">
      <span class="titleComponent__mainText">{{data.mainText}}</span>
      {{data.slaveText}}
    </h2>

    
  </div><!-- titleComponent -->
</template>




<script>

export default {
  name: 'titleComponent',
  data () {
    return {

    }
  },
  props: ['data']
}



</script>






<style lang="scss">

$accent: #279cc7;

  
.titleComponent{
  text-align: center;
  text-transform: uppercase;
  &__text{
    display: inline-block;
    line-height: 38px;
    color: #484848;
    font-size: 20px;
    border-top: 1px solid #444;
    border-bottom: 1px solid #444;
  }
  &__mainText{
    color: $accent;
    font-weight: 900;
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
