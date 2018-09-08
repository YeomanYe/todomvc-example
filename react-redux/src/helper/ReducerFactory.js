import {ADD_TODO} from "../action/todo-action";
import VisibilityAction from "../action/visibility-action";

export default class ReducerFactory {
    static createArrReducer({initState,actionType,dataName,idName = 'id'}){
        return function (state = initState,action) {
            let retState = state;
            let {add,del,update} = actionType;
            console.log('retState',retState,'action',action);
            switch (action.type){
                case add:retState = [...state,action[dataName]];break;
                case update:retState = state.map(item => item[idName] === action[dataName][idName] ? action[dataName] : item);break;
                case del:{
                    let ids = action[dataName][idName],datas = state;
                    retState = ids instanceof Array ? datas.filter(item => ids.indexOf(item[idName]) < 0) : datas.filter(item => item[idName] !== ids);
                }break;
            }
            return retState;
        }
    }
    static createToggleStatusReducer({initState,actionType,dataName}){
        return function (state = initState,action) {
            let retState = state;
            switch (action.type){
                case actionType:retState = action[dataName];
            }
            return retState;
        }
    }
}
