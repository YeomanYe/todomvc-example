<template>
    <header class="header">
        <h1>{{title}}</h1>
        <input autofocus="autofocus" autocomplete="off" :placeholder="placeholder"
               @keyup.enter="todoInputHandler($event)" v-model="todoInput" class="new-todo">
    </header>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        data: ()=>({
            title: "todos",
            placeholder: "请填写代办事项",
            todoInput: "",
        }),
        methods: {
            ...mapActions(['addTodo']),
            todoInputHandler(event) {
                console.log("event", event);
                console.log("store", this.$store);
                let val = this.todoInput;
                if (!val || !val.trim()) return;
                //清空输入
                this.todoInput = "";
                //发送事件
                this.addTodo(val);
            },
        },
    }
</script>
