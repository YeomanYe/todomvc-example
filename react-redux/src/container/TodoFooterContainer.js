import { connect } from 'react-redux'
import TodoFooter from "../component/TodoFooter";
import TodoAction from "../action/todo-action";
import VisibilityAction from "../action/visibility-action";
import store from '../store';
const {ALL,COMPLETED,ACTIVE} = VisibilityAction.STATUS;

const mapStateToProps = (state, ownProps) => {
    let {visibility} = state,left = 0;
    switch (visibility){
        default:
        case ALL: left = state.todos.length;break;
        case ACTIVE: left = state.todos.filter(todo => !todo.completed).length;break;
        case COMPLETED: left = state.todos.filter(todo => todo.completed).length;break;
    }
    return {visibility,left};
};

const mapDispatchToProps = dispatch => ({
    toggleVisibility:status => dispatch(VisibilityAction.toggle(status)),
    clearCompleted:() => dispatch(TodoAction.del(store.getState().todos.filter(todo => todo.completed).map(todo => todo.id)))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFooter)
