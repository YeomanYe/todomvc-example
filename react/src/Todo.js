import React, {
    Component
} from 'react';
import Storage from './Storage';

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo:this.props.todo,
        };
    }
    changeHandler(e) {
        let checkbox = e.currentTarget;
        console.log(checkbox);
        console.log(this);
        let todo = this.state.todo;
        todo.completed = checkbox.checked;
        this.setState({
            todo: todo
        });
        Storage.updateItem();
        this.props.updateItem();
    }
    buttonHandler(){
        Storage.remoteItem(this.state.todo);
        Storage.updateItem();
        this.props.updateItem();
    }
    render() {
        return (
            <li className='todo' className={this.state.todo.completed?' completed':''}>
                <div className="view">
                    <input checked={this.state.todo.completed} onChange={this.changeHandler.bind(this)}  type="checkbox" className="toggle"/>
                    <label>{this.state.todo.message}</label>
                    <button onClick={this.buttonHandler.bind(this)} className="destroy"></button>
                </div>
                <input type="text" className="edit"/>
            </li>
        )
    }
}