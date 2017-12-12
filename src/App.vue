<template>
  <div class="wrapper">

    <header class="header">
      <topLineBlock></topLineBlock>
      <mixBlock></mixBlock>
      <mainMenu></mainMenu>
    </header>

    <main>
      <sliderBlock></sliderBlock>
      <popularBlock></popularBlock>
    </main>

  </div>


</template>



<script>

import topLineBlock from './components/topLineBlock.vue';
import mixBlock from './components/mixBlock.vue';
import mainMenu from './components/mainMenuBlock.vue';
import sliderBlock from './components/sliderBlock.vue';
import popularBlock from './components/popularBlock.vue';



export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    topLineBlock,
    mixBlock,
    mainMenu,
    sliderBlock,
    popularBlock
  }
}
</script>

<style lang="scss">
  $accent: #279cc7;


/*reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
}

html {
  line-height: 1;
}

ol, ul {
  list-style: none !important;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

caption, th, td {
  text-align: left;
  font-weight: normal;
  vertical-align: middle;
}

q, blockquote {
  quotes: none;
}
q:before, q:after, blockquote:before, blockquote:after {
  content: "";
  content: none;
}

a img {
  border: none;
}
a, input, button{
  outline: none !important;
  text-decoration: none !important;
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
  display: block;
}

body{
  font-family: 'Raleway', sans-serif;
}


.container{
  width: 100%;
  max-width: 1170px;
  min-width: 320px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 15px;
}


.flex{
  display: flex;
}

.hide{
  display: none !important;
}

.btn{
    border-radius: 0;
    border: none;
    background: $accent;
    font-size: 14px;
    color: #fff;
    font-weight: 700;
    cursor: pointer; 
    text-transform: capitalize;
    &:hover{
      background: #1986ae;
    }
}


.price{
  width: 65px;
  color: #e13131;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &_old{
    color: #999;
    font-size: 12px;
    text-decoration: line-through;
    font-weight: normal;
    margin: 0 15px 5px 0;
  }
  &_blue{
    color: $accent;
  }
}


.new{
  position: relative;
  &:hover{
    &:after{
      display: none;
    }
  }
  &:after{
    content: 'new';
    position: absolute;
    background: #03a9f4;
    color: #fff;
    font-size: 8px;
    text-transform: uppercase;
    padding: 2px 4px;
    border-radius: 9px;
    right: 0;
    top: 6px;
  }
}


.hot{
  position: relative;
  &:after{
    content: 'hot';
    position: absolute;
    background: #f00;
    color: #fff;
    font-size: 8px;
    text-transform: uppercase;
    padding: 2px 4px;
    border-radius: 9px;
    right: 0;
    top: 6px;
  }
}


.fa-star_o{
  color: #999 !important;
}

@media only screen and (min-width : 992px) {
.price{
  flex-direction: row;
  &_old{
    margin: 0 15px 0px 0;
  }
}

}


 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {
  .container{
    padding: 0;
  }

}

</style>
