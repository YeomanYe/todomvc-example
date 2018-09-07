import React,{Component} from 'react';
import {changeHandlerFactory, createInputEnter} from "../helper/PageHelper";

export default class TodoHeader extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {text:''};
      }
    render(){
        let {addTodo} = this.props;
        let createBind = changeHandlerFactory(this);
        return(
            <header className="header">
                <h1>todos</h1>
                <input {...createBind('text')} onKeyDown={createInputEnter((value)=>{
                    addTodo(value);
                    this.setState({text:''});
                })} autoFocus="autofocus" autoComplete="off" placeholder="请填写代办事项" className="new-todo"/>
            </header>
        );
    }
}


