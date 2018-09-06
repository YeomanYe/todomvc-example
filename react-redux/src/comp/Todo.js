import React, {
    Component
} from 'react';
import Storage from '../helper/Storage';
import PropTypes from 'prop-types';

export default class Todo extends Component {
    static contextTypes = {
        updateItem: PropTypes.func,
      };
    constructor(props) {
        super(props);
        let {todo} = this.props,
            itemClass = todo.completed ? 'todo completed' : 'todo';
        this.state = {
            todo:todo,
            itemClass:itemClass,
            msg:todo.message
        };
    }
    ckChangeHandler(e) {
        // console.log(this);
        let todo = this.state.todo;
        todo.completed = !todo.completed;
        this.setState({
            todo: todo
        });
        this.setCompletedClass();
        Storage.updateItem();
        // console.log('context',this.context);
        this.context.updateItem();
    }
    buttonHandler(){
        Storage.removeItem(this.state.todo);
        Storage.updateItem();
        // console.log('context',this.context);
        this.context.updateItem();
    }
    setEditClass(){
        let todo = this.state.todo,
            itemClass;
        itemClass = todo.completed ? 'todo completed editing' : 'todo editing';
        this.setState({
            itemClass:itemClass
        });
    }
    setCompletedClass(){
        let todo = this.state.todo,
            itemClass;
        itemClass = todo.completed ? 'todo completed' : 'todo';
        this.setState({
            itemClass:itemClass
        });
    }
    inputChangeHandler(e){
        this.setState({
            msg:e.target.value
        });
    }
    keydownHandler(event) {
        console.log(event.keyCode);
        if (event.keyCode === 13) {
            let todo = this.state.todo;
            todo.message = this.state.msg;
            this.setState({
                todo:todo
            });
            this.setCompletedClass();
            this.context.updateItem();
        }else if(event.keyCode === 27){
            this.setCompletedClass();
        }
        this.setState({
            msg:this.state.msg
        })
    }
    render() {
        let {todo,itemClass,msg} = this.state;
        const {setEditClass,buttonHandler,keydownHandler,inputChangeHandler,ckChangeHandler} = this;
        return (
            <li className={itemClass}>
                <div className="view">
                    <input checked={todo.completed} onChange={ckChangeHandler.bind(this)}  type="checkbox" className="toggle"/>
                    <label onDoubleClick={setEditClass.bind(this)}>{todo.message}</label>
                    <button onClick={buttonHandler.bind(this)} className="destroy"></button>
                </div>
                <input onKeyDown={keydownHandler.bind(this)} value={msg} onChange={inputChangeHandler.bind(this)} type="text" className="edit"/>
            </li>
        )
    }
}
