import VisibilityAction from '../action/visibility-action';
import ReducerFactory from "../helper/ReducerFactory";
const initState = VisibilityAction.STATUS.ALL;

export default ReducerFactory.createToggleStatusReducer({initState,dataName:'visibility',actionType:VisibilityAction.TYPE});
