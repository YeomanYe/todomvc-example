let key = 'vue-vuex-todos';
let data,id = 0;
export default class TodoStore {
    static initTodo(){
        data = JSON.parse(localStorage.getItem(key)) || [];
        if(data.length > 0) id = data[data.length - 1].id;
        return [...data];
    }
    static setTodos(todos){
        data = [...todos];
        setItem();
    }
    static addTodo(todoData){
        todoData.id = ++id;
        data.push(todoData);
        setItem();
        return todoData;
    }
}
function setItem(){
    localStorage.setItem(key, JSON.stringify(data));
}
