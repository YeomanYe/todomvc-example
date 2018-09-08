import TodoAction from '../action/todo-action';
import TodoStore from "../helper/TodoStore";
import ReducerFactory from "../helper/ReducerFactory";
const initState = [...TodoStore.init()];
/*export default function (state = initState,action) {
    let retState = state;
    let {add,del,update} = TodoAction.TYPE;
    console.log('retState',retState,'action',action);
    switch (action.type){
        case add:retState = [...state,action.todo];break;
        case update:retState = state.map(item => item.id === action.todo.id ? action.todo : item);break;
        case del:{
            let ids = action.todo.id,todos = state;
            retState = ids instanceof Array ? todos.filter(item => ids.indexOf(item.id) < 0) : todos.filter(item => item.id !== ids);
        }break;
    }
    return retState;
}*/
export default ReducerFactory.createArrReducer({initState,actionType:TodoAction.TYPE,dataName:'todo'});
