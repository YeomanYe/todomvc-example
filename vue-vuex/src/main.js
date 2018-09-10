import Vue from 'vue'
import App from './App.vue'
// let director = require('director');

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
