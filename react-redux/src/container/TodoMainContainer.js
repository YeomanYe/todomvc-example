import {connect} from 'react-redux'
import TodoMain from "../component/TodoMain";
import TodoAction from "../action/todo-action";
import VisibilityAction from "../action/visibility-action";

const {ALL,ACTIVE,COMPLETED} = VisibilityAction.STATUS;
const mapStateToProps = (state, ownProps) => {
    let {visibility,todos} = state;
    switch (visibility){
        default:
        case ALL:break;
        case ACTIVE:todos = todos.filter(item => !item.completed);break;
        case COMPLETED:todos = todos.filter(item => item.completed);break;
    }
    return {todos};
};

const mapDispatchToProps = dispatch => ({
    removeTodo: id => dispatch(TodoAction.del(id)),
    updateTodo: todo => dispatch(TodoAction.update(todo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoMain)
