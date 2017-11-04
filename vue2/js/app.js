(function(exports) {
    var filters = {
        all(todos){
            return todos;
        },
        active(todos){
            return todos.filter(function(todo){
                return !todo.completed;
            });
        },
        completed(todos){
            return todos.filter(function(todo){
                return todo.completed;
            });
        },
    }
    exports.app = new Vue({
        el: '.todoapp',
        data: {
            title: "todos",
            placeholder: "请填写代办事项",
            todoInput: "",
            visibility: "all",
            editedTodo: null,
            todos: JSON.parse(localStorage.getItem("todos")) || []
        },
        watch: {
            todos: {
                deep: true,
                handler() {
                    localStorage.setItem("todos", JSON.stringify(this.todos));
                }
            }
        },
        methods: {
            todoInputHandler(event) {
                console.log("event", event);
                let val = this.todoInput;
                if (!val || !val.trim()) return;
                this.todos.push({
                    message: val,
                    completed: false
                });
                //清空输入
                this.todoInput = "";
                //持久化到本地存储
                localStorage.setItem("todos", JSON.stringify(this.todos));
            },
            removeTodo(index, event) {
                console.log("this", this);
                console.log("event", event);
                console.log("index", index);
                this.todos.splice(index, 1);
            },
            removeAllCompl() {
                console.log("todos", this.todos);
                for (let i = this.todos.length - 1; i >= 0; i--) {
                    let todo = this.todos[i];
                    console.log(todo, i);
                    if (todo.completed) {
                        this.todos.splice(i, 1);
                    }
                }
            },
            editTodo(todo) {
                this.beforeEditCache = todo.message;
                this.editedTodo = todo;
            },
            doneEdit(todo) {
                this.beforeEditCache = "";
                this.editedTodo = null;
            },
            cancelEdit(todo) {
                todo.message = this.beforeEditCache;
                this.editedTodo = null;
            }
        },
        computed: {
            filteredTodos(){
                return filters[this.visibility](this.todos);
            },
            leftTodos() {
                let left = 0;
                for (todo of this.todos) {
                    left = todo.completed ? left : left + 1;
                }
                return left;
            }
        },
        directives: {
            'todo-focus' (el, binding) {
                if (binding.value) {
                    el.focus();
                }
            }
        }
    });
})(window);