import Vue from 'vue';
import App from './App.vue';
import VueCurrencyFilter from 'vue-currency-filter';

Vue.use(VueCurrencyFilter, 
{
  symbol : '$', 
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: false
})

new Vue({
  el: '#app',
  render: h => h(App)
})

