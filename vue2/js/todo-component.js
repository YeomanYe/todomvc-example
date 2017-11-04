var data = {ckValue:false};
Vue.component('todo-component',{
    template:`
        <li class="todo" v-bind:class="{completed:ckValue}" >
            <div class="view">
                <input type="checkbox" v-model="ckValue" class="toggle">
                <label>{{message}}</label>
                <button class="destroy"></button>
            </div>
            <input type="text" class="edit">
        </li>
    `,
    props:['message'],
    data(){
        return data;
    },
    methods:{
        getCkValue(){

        }
    }
});