import {ADD_TODO} from '../action/todo-action';
const initState = {
    todos:[]
};
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
