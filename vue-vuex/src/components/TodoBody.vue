<template>
    <section class="main">
        <input type="checkbox" class="toggle-all">
        <ul v-for="(todo,index) in filteredTodos" class="todo-list" :key="index">
            <Todo :todo="todo" :index="index"/>
        </ul>
    </section>
</template>

<script>
    import Todo from './Todo';
    import Filter from '../helper/Filter';
    import {mapState} from 'vuex';
    export default {
        components:{Todo},
        data: ()=>({
            editedTodo: null,
        }),
        props:['visibility'],
        computed: {
            filteredTodos() {
                return Filter[this.visibility](this.todos);
            },
            ...mapState({
                todos:state => state.todo.todos
            }),
        },
    }
</script>

<style>
    .toggle-all {
        text-align: center;
        border: none; /* Mobile Safari */
        opacity: 0;
        position: absolute;
    }

    .toggle-all + label {
        width: 60px;
        height: 34px;
        font-size: 0;
        position: absolute;
        top: -52px;
        left: -13px;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    .toggle-all:checked + label:before {
        color: #737373;
    }

    .todo-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }


</style>
