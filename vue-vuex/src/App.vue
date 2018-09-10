<template>
    <div>
        <section class="todoapp" v-cloak>
            <TodoHeader @add-todo="addTodo"/>
            <TodoBody @remove-todo="removeTodo" :visibility="visibility"/>
            <TodoFooter :visibility="visibility" />
        </section>
        <footer class="info">
            <p>Written by <a href="http://github.com/YeomanYe">YeomanYe</a></p>
        </footer>
    </div>
</template>

<script>
    import TodoHeader from './components/TodoHeader';
    import TodoBody from './components/TodoBody';
    import TodoFooter from './components/TodoFooter';
    import bindRoute from './helper/Router';
    import EventHub from "./helper/EventHub";
    import {mapState} from 'vuex';

    let data = {
        visibility: "all",
    };

    bindRoute(data,'visibility');

    export default {
        components: {TodoBody, TodoHeader, TodoFooter},
        created(){
          EventHub.$on(EventHub.TYPE.REMOVE_TODO,this.removeTodo);
          EventHub.$on(EventHub.TYPE.REMOVE_ALL_COMPL,this.removeAllCompl);
        },
        data: () => data,
        methods: {
            addTodo(message) {
                console.log('store',this.$store);
                this.todos.push({
                    message, completed: false
                });
                console.log('store',this.$store);
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            },
            removeAllCompl(ids) {
                for (let i = ids.length - 1; i >= 0; i--) {
                    let index = ids[i];
                    let todo = this.todos[index];
                    console.log(todo, index);
                    if (todo.completed) {
                        this.todos.splice(index, 1);
                    }
                }
            },
        },
        computed:{
            ...mapState({
                todos:state => state.todo.todos
            }),
        }
    }
</script>

<style>
    html,
    body {
        margin: 0;
        padding: 0;
    }

    button {
        margin: 0;
        padding: 0;
        border: 0;
        background: none;
        font-size: 100%;
        vertical-align: baseline;
        font-family: inherit;
        font-weight: inherit;
        color: inherit;
        -webkit-appearance: none;
        appearance: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        line-height: 1.4em;
        background: #f5f5f5;
        color: #4d4d4d;
        min-width: 230px;
        max-width: 550px;
        margin: 0 auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 300;
    }

    :focus {
        outline: 0;
    }

    .hidden {
        display: none;
    }

    .todoapp {
        background: #fff;
        margin: 130px 0 40px 0;
        position: relative;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
        0 25px 50px 0 rgba(0, 0, 0, 0.1);
    }

    .todoapp input::-webkit-input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
    }

    .todoapp input::-moz-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
    }

    .todoapp input::input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
    }

    .todoapp h1 {
        position: absolute;
        top: -155px;
        width: 100%;
        font-size: 100px;
        font-weight: 100;
        text-align: center;
        color: rgba(175, 47, 47, 0.15);
        -webkit-text-rendering: optimizelegibility;
        -moz-text-rendering: optimizelegibility;
        text-rendering: optimizelegibility;
    }

    .new-todo,
    .edit {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        color: inherit;
        padding: 6px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .new-todo {
        padding: 16px 16px 16px 60px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }

    .main {
        position: relative;
        z-index: 2;
        border-top: 1px solid #e6e6e6;
    }

    .info {
        margin: 65px auto 0;
        color: #bfbfbf;
        font-size: 10px;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
        text-align: center;
    }

    .info p {
        line-height: 1;
    }

    .info a {
        color: inherit;
        text-decoration: none;
        font-weight: 400;
    }

    .info a:hover {
        text-decoration: underline;
    }

    /*
        Hack to remove background from Mobile Safari.
        Can't use it globally since it destroys checkboxes in Firefox
    */
    @media screen and (-webkit-min-device-pixel-ratio: 0) {
        .toggle-all,
        .todo-list li .toggle {
            background: none;
        }

        .todo-list li .toggle {
            height: 40px;
        }
    }

    @media (max-width: 430px) {
        .footer {
            height: 50px;
        }

        .filters {
            bottom: 10px;
        }
    }

</style>
