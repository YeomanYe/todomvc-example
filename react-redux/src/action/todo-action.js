import TodoStore from "../helper/TodoStore";

export default class TodoAction{
    static add(msg,completed = false){
        let id = TodoStore.addTodo(msg,completed);
        return {
            todo:{msg,completed,id},
            type:this.TYPE.add
        };
    }
    static del(id){
        TodoStore.delTodo(id);
        return {
            todo:{id},
            type:this.TYPE.del
        };
    }
    static update(todo){
        TodoStore.updateTodo(todo);
        return {todo, type:this.TYPE.update};
    }
    static TYPE = {
        add:'ADD_TODO',
        update:'UPDATE_TODO',
        del:'DEL_TODO',
    }
}
