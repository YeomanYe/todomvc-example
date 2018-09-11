import TodoStore from "../../helper/TodoStore";
import Filter from "../../helper/Filter";

let todos = TodoStore.initTodo();

//mutations
const mutations = {
    addTodo(state,todo){
        todo = TodoStore.addTodo(todo);
        state.todos.push(todo);
    },
    removeTodo(state,ids){
        console.log('ids',ids);
        let leftTodos = ids instanceof Array ? state.todos.filter(todo => ids.indexOf(todo.id) < 0) : state.todos.filter(todo => ids !== todo.id);
        console.log('leftTodos',leftTodos);
        state.todos = leftTodos;
    },
    updateTodo(state,todo){
        let eqTodo = state.todos.filter(d => d.id === todo.id)[0];
        eqTodo.message = todo.message;
        eqTodo.completed = todo.completed;
    }
};

//actions
const actions = {
    addTodo({commit,state},message){
        let todo = {message,completed:false};
        commit('addTodo',todo);
    },
    removeTodo({commit,state},ids){
        commit('removeTodo',ids);
        console.log('state.todos',state.todos);
        TodoStore.setTodos(state.todos);
    },
    updateTodo({commit,state},todo){
        commit('updateTodo',todo);
        TodoStore.setTodos(state.todos);
    }
};

//getters
const getters = {
    leftTodos(state) {
        let left = 0;
        for (let todo of state.todos) {
            left = todo.completed ? left : left + 1;
        }
        return left;
    },
    filteredTodos(state,getter,rootState) {
        return Filter[rootState.visibility.visibility](state.todos);
    },
};
export default {
    state:{
        todos
    },
    mutations,
    actions,
    getters
};
