import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import todo from './modules/todos';

export default new vuex.Store({
    modules:{
        todo
    }
})
