<template>
    <header class="header">
        <h1>{{title}}</h1>
        <input autofocus="autofocus" autocomplete="off" :placeholder="placeholder"
               @keyup.enter="todoInputHandler($event)" v-model="todoInput" class="new-todo">
    </header>
</template>

<script>
    export default {
        data: ()=>({
            title: "todos",
            placeholder: "请填写代办事项",
            todoInput: "",
        }),
        methods: {
            todoInputHandler(event) {
                console.log("event", event);
                let val = this.todoInput;
                if (!val || !val.trim()) return;
                //清空输入
                this.todoInput = "";
                //发送事件
                this.$emit('add-todo',val);
            },
        },
    }
</script>
