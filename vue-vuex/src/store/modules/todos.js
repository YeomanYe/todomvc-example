import TodoStore from "../../helper/TodoStore";
let todos = TodoStore.initTodo();

//mutations
const mutations = {
    addTodo(state,todo){
        todo = TodoStore.addTodo(todo);
        state.todos.push(todo);
    },
    removeTodo(state,ids){
        let leftTodos = ids instanceof Array ? state.todos.filter(todo => ids.indexOf(todo.id) < 0) : state.todos.filter(todo => ids !== todo.id);
        state.todos = leftTodos;
    },
    updateTodo(state,todo){
        let eqTodo = state.todos.filter(d => d.id === todo.id)[0];
        eqTodo.message = todo.message;
        eqTodo.completed = todo.completed;
    }
};
const actions = {
    addTodo({commit,state},message){
        let todo = {message,completed:false};
        commit('addTodo',todo);
    },
    removeTodo({commit,state},ids){
        commit('removeTodo',ids);
        TodoStore.setTodos(state.todos);
    },
    updateTodo({commit,state},todo){
        commit('updateTodo',todo);
        TodoStore.setTodos(state.todos);
    }
};
export default {
    state:{
        todos
    },
    mutations,
    actions
};
