import React, {
    Component
} from 'react';
import Storage from './Storage';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        let todo = this.props.todo,
            itemClass = todo.completed ? 'todo completed' : 'todo';
        this.state = {
            todo:todo,
            itemClass:itemClass,
            msg:todo.message
        };
    }
    ckChangeHandler(e) {
        let checkbox = e.currentTarget;
        console.log(checkbox);
        console.log(this);
        let todo = this.state.todo;
        todo.completed = checkbox.checked;

        this.setState({
            todo: todo
        });
        this.setCompletedClass();
        Storage.updateItem();
        this.props.updateItem();
    }
    buttonHandler(){
        Storage.remoteItem(this.state.todo);
        Storage.updateItem();
        this.props.updateItem();
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
            this.props.updateItem();
        }else if(event.keyCode === 27){
            this.setCompletedClass();
        }
        this.setState({
            msg:this.state.msg
        })
    }
    render() {
        return (
            <li className={this.state.itemClass}>
                <div className="view">
                    <input checked={this.state.todo.completed} onChange={this.ckChangeHandler.bind(this)}  type="checkbox" className="toggle"/>
                    <label onDoubleClick={this.setEditClass.bind(this)}>{this.state.todo.message}</label>
                    <button onClick={this.buttonHandler.bind(this)} className="destroy"></button>
                </div>
                <input onKeyDown={this.keydownHandler.bind(this)} value={this.state.msg} onChange={this.inputChangeHandler.bind(this)} type="text" className="edit"/>
            </li>
        )
    }
}