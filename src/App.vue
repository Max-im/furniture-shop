<template>
  <div class="wrapper">

    <header class="header">
      <topLineBlock></topLineBlock>
      <mixBlock 
        :removeItemFromCard="removeItemFromCard"
        :changeProductsAmount="changeProductsAmount"
        :data="cardItem">
      </mixBlock>
      <mainMenu></mainMenu>
    </header>

    <main>
      <sliderBlock></sliderBlock>
      <popularBlock></popularBlock>
      <bannersBlock></bannersBlock>
      <featuredProductsBlock 
        :addItemToCard="addItemToCard"
        :data="featureProducts">
      </featuredProductsBlock>
      <supportBlock></supportBlock>
      <bestSellersBlock 
        :addItemToCard="addItemToCard"
        :data="bestSellers">
      </bestSellersBlock>
    </main>

  </div>


</template>



<script>

import topLineBlock from './components/topLineBlock.vue';
import mixBlock from './components/mixBlock.vue';
import mainMenu from './components/mainMenuBlock.vue';
import sliderBlock from './components/sliderBlock.vue';
import popularBlock from './components/popularBlock.vue';
import bannersBlock from './components/bannersBlock.vue';
import featuredProductsBlock from './components/featuredProductsBlock.vue';
import supportBlock from './components/supportBlock.vue';
import bestSellersBlock from './components/bestSellersBlock.vue';



export default {
  name: 'app',
  data () {
    return {
      cardItem: [
        {
          id: '001-prod',
          img:'src/assets/prod-min-2.jpg', 
          title: 'gazenas mutare', 
          stars: 5,
          price: 65, 
          rev: 2, 
          amount: 1
        }
      ],
      featureProducts: [
        { 
          id: '002-prod',
          img: 'src/assets/prod1-1.jpg',
          title: 'kazens dimans', 
          stars: 5,
          price: 84 
        },
        { 
          id: '001-prod',
          img: 'src/assets/prod1-2.jpg',
          title: 'gazenas mutre', 
          stars: 5,
          price: 65
        },
        { 
          id: '003-prod',
          img: 'src/assets/prod1-3.jpg',
          title: 'gazenas mitra', 
          stars: 5,
          price: 84 
        },
        { 
          id: '004-prod',
          img: 'src/assets/prod1-4.jpg',
          title: 'pizan matrme', 
          stars: 5,
          price: 50, 
          oldPrice: 53,
          flags: ['flag_sale', 'flag_new']
        },
        { 
          id: '002-prod-1',
          img: 'src/assets/prod1-1.jpg',
          title: 'kazens dimans', 
          stars: 5,
          price: 84 
        },
        { 
          id: '001-prod-1',
          img: 'src/assets/prod1-2.jpg',
          title: 'gazenas mutre', 
          stars: 5,
          price: 65
        },
        { 
          id: '003-prod-1',
          img: 'src/assets/prod1-3.jpg',
          title: 'gazenas mitra', 
          stars: 5,
          price: 84 
        },
        { 
          id: '004-prod-1',
          img: 'src/assets/prod1-4.jpg',
          title: 'pizan matrme', 
          stars: 5,
          price: 50, 
          oldPrice: 53,
          flags: ['flag_sale', 'flag_new']
        }
      ],
      bestSellers: [
        { 
          id: 'b-005-prod',
          img: 'src/assets/prod2-1.jpg',
          title: 'auzam mipane', 
          stars: 5,
          price: 74 
        },
        { 
          id: 'b-006-prod',
          img: 'src/assets/prod2-2.jpg',
          title: 'sazen kutemas', 
          stars: 5,
          oldPrice: 84,
          price: 80
        },
        { 
          id: 'b-007-prod',
          img: 'src/assets/prod2-3.jpg',
          title: 'dumas chume', 
          stars: 5,
          oldPrice: 99,
          price: 90 
        },
        { 
          id: 'b-008-prod',
          img: 'src/assets/prod2-4.jpg',
          title: 'amire tracemis', 
          stars: 5,
          price: 85, 
        },
        { 
          id: 'b-005-prod-1',
          img: 'src/assets/prod2-1.jpg',
          title: 'auzam mipane', 
          stars: 5,
          price: 74 
        },
        { 
          id: 'b-006-prod-1',
          img: 'src/assets/prod2-2.jpg',
          title: 'sazen kutemas', 
          stars: 5,
          oldPrice: 84,
          price: 80
        },
        { 
          id: 'b-007-prod-1',
          img: 'src/assets/prod2-3.jpg',
          title: 'dumas chume', 
          stars: 5,
          oldPrice: 99,
          price: 90 
        },
        { 
          id: 'b-008-prod-1',
          img: 'src/assets/prod2-4.jpg',
          title: 'amire tracemis', 
          stars: 5,
          price: 85, 
        }
      ]
    }
  },
  components: {
    topLineBlock,
    mixBlock,
    mainMenu,
    sliderBlock,
    popularBlock,
    bannersBlock,
    featuredProductsBlock,
    supportBlock,
    bestSellersBlock
  },
  methods: {
    removeItemFromCard: function(id) {
      let index = ''; 
      this.cardItem.map((item, i) => {
        if(item.id === id){
          index = i;
        }
      });
      this.cardItem.splice(index, 1);
    },
    
    changeProductsAmount: function(e, obj) {
      let index = ''; 
      const elem = e.target.value;
      this.cardItem.map((item, i) => {
        if(item.id === obj.id){
          index = i;
        }
      });
      this.cardItem[index].amount = elem;
    },

    addItemToCard: function(id){
      if(this.cardItem.filter(item => item.id === id).length === 0){
        const arr = id[0] === 'b' ? 'bestSellers' : 'featureProducts';
        const element = this[arr].filter(item => item.id === id);
        element[0].amount = 1;

        this.cardItem.push(...element);
      }
      else{
        let index = ''; 
        this.cardItem.map((item, i) => {
          if(item.id === id){
            index = i;
          }
        });
        this.cardItem[index].amount++;
      }
    }
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

.flag{
  position: absolute;
  text-transform: uppercase;
  font-size: 12px;
  padding: 10px;
  color: #fff;
  z-index: 100;
  &:after{
    content: '';
    position: absolute;
    width: 0; 
    height: 0; 
  }
  &_sale{
    background: #ff5722;
    font-weight: 900;
    border-radius: 5px;
    &:after{
      content: '';
      border-bottom: 20px solid transparent;
      border-right: 20px solid transparent;
      left: 0;
      bottom: -10px;
      content: '';
      border-left: 10px solid #ff5722;
    }
    &:before{
      content: 'sale'
    }
  }
  &_new{
    background: $accent;
    font-weight: 900;
    border-radius: 5px;
    &:after{
      content: '';
      border-bottom: 20px solid transparent;
      border-right: 20px solid transparent;
      right: 0;
      bottom: -10px;
      content: '';
      border-right: 10px solid $accent;
    }
    &:before{
      content: 'new'
    }
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