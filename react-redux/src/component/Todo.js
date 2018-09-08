import React,{Component} from 'react';
import {changeHandlerFactory} from "../helper/PageHelper";

export default class Todo extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            editable:false,
            msg:props.todo.msg
        };
      }
    render(){
        let {todo,updateTodo,removeTodo} = this.props;
        let {editable} = this.state;
        let createBind = changeHandlerFactory(this);
        return(
            <li className={['todo',editable ? 'editing' : '',todo.completed ? 'completed' : ''].join(' ')}>
                <div className="view">
                    <input checked={todo.completed} onChange={()=>{
                        todo.completed = !todo.completed;
                        updateTodo(todo);
                    }}  type="checkbox" className="toggle"/>
                    <label onDoubleClick={()=>{this.setState({editable:true},()=>this.textInput.focus())}}>{todo.msg}</label>
                    <button onClick={removeTodo} className="destroy"></button>
                </div>
                <input onBlur={()=>this.setState({editable:false})} {...createBind('msg')} ref={(input) => { this.textInput = input; }} autoFocus={editable ? "autofocus" : ''} onKeyDown={(evt)=>{
                    let {keyCode,target:{value}} = evt;
                    let editable = true;
                    if(keyCode === 13 && value.trim()){
                        todo.msg = value;
                        editable = false;
                        updateTodo(todo);
                    }else if(keyCode === 27){
                        editable = false;
                    }
                    this.setState({editable,msg:value});
                }} type="text" className="edit"/>
            </li>
        )
    }
}
