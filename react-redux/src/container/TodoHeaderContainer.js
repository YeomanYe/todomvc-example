import TodoHeader from "../component/TodoHeader";
import {connect} from "react-redux";
import TodoAction from "../action/todo-action";

const mapDispatchToProps = dispatch => ({
    addTodo:msg => dispatch(TodoAction.add(msg))
});

export default connect(null,mapDispatchToProps)(TodoHeader);
