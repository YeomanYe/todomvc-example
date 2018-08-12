import React, {
    Component
} from 'react';
import Storage from './Storage';

class TodoHeader extends Component {
    keydownHandler(event) {
        console.log(event.keyCode);
        if (event.keyCode === 13) {
            Storage.addItem({
                message: this.state.input,
                completed: false
            });
            this.setState({
                input:''
            });
            this.props.updateItem();
        }
    }
    changeHandler(event) {
        // console.log(event);
        this.setState({
            input: event.target.value
        })
    }
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }
    render() {
        const {changeHandler,keydownHandler} = this;
        return (
        <header className="header">
          <h1>todos</h1>
          <input onChange={changeHandler.bind(this)} onKeyDown={keydownHandler.bind(this)} value={this.state.input} autoFocus="autofocus" autoComplete="off" placeholder="请填写代办事项" className="new-todo"/>
        </header>
        );
    }
}

export default TodoHeader;
