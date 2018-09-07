import VisibilityAction from '../action/visibility-action';
const initState = VisibilityAction.STATUS.ALL;
export default function (state = initState,action) {
    let retState = state;
    switch (action.type){
        case VisibilityAction.TYPE:retState = action.visibility;
    }
    return retState;
}
