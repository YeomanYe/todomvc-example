import Vue from 'vue'
import App from './App.vue'
import { Router } from 'director/build/director';
// let director = require('director');

Vue.config.productionTip = false;

let app = new Vue({
    render: h => h(App)
}).$mount('#app');

let routes = {
    '/all': () => app.visibility = 'app',
    '/active': () => app.visibility = 'active',
    '/completed': () => app.visibility = 'completed'
};

let router = Router(routes);
router.configure({
    notfound: function() {
        window.location.hash = '';
        app.visibility = 'all';
    }
});
router.init();
