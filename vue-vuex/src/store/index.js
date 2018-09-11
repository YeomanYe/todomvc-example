import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todos';
import visibility from './modules/visibility';

Vue.use(Vuex);

const store =  new Vuex.Store({
    modules:{
        todo,
        visibility
    }
});

if (module.hot) {
    // 使 action 和 mutation 成为可热重载模块
    module.hot.accept(['./modules/todos','./modules/visibility'], () => {
        // 获取更新后的模块
        // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
        const todo = require('./modules/todos').default;
        const visibility = require('./modules/visibility').default;
        // 加载新模块
        store.hotUpdate({
            modules: {todo,visibility}
        })
    })
}

export default store;
