import Storage from './Storage';
import ArrayUtil from "./ArrayUtil";
let id = 0, todos;
export default class TodoStore {
    static init(){
        todos = Storage.init();
        if(todos.length > 0) id = todos[todos.length - 1].id;
        return todos;
    }
    static addTodo(msg,completed){
        ++id;
        todos.push({id,msg,completed});
        Storage.setItem(todos);
        return id;
    }
    static delTodo(ids){
        let delOne = (id) => {
            let index = ArrayUtil.objEqArr(todos,{id});
            if(index < 0) return;
            todos.splice(index,1);
            Storage.setItem(todos);
        };
        if(ids instanceof Array){
            for(let id of ids) delOne(id);
        }else{
            delOne(ids);
        }
    }
    static updateTodo({id,msg,completed}){
        let obj = ArrayUtil.getArrByObj(todos,{id})[0];
        if(!obj) return;
        obj.msg = msg;
        obj.completed = completed;
        Storage.setItem(todos);
    }
}
