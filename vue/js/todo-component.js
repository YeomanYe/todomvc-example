Vue.component('todo-component',{
    template:`
        <li class="todo completed">
            <div class="view">
                <input type="checkbox" class="toggle">
                <label>{{message}}</label>
                <button class="destroy"></button>
            </div>
            <input type="text" class="edit">
        </li>
    `,
    props:['message']
});