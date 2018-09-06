import {ADD_TODO} from "../action/todo-action";

export default class ReducerFactory {
    static createArrReducer(){
        return function (state = initState,action) {

        }
    }
}
/*

export default function (state = initState,action) {
    switch (action.type){
        case ADD_TODO:{
            return {
                ...state,
                todos:[...state.todos,action.todo]
            }
        }
        default:
            return state;
    }
}
* */
