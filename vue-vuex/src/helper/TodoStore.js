let key = 'vue-vuex-todos';
let data;
export default class TodoStore {
    static setTodo(){
        localStorage.setItem(key, JSON.stringify(data));
    }
    static getTodo(){
        data = JSON.parse(localStorage.getItem("vue-vuex-todos")) || [];
        return data;
    }
}
