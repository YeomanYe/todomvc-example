import React from 'react';
import {reduxForm} from 'redux-form'
import {createInputEnter} from "../helper/PageHelper";

const TodoHeader = ({addTodo}) => (
    <header className="header">
        <h1>todos</h1>
        <input onKeyDown={createInputEnter((value)=>{
            addTodo(value);
        })} autoFocus="autofocus" autoComplete="off" placeholder="请填写代办事项" className="new-todo"/>
    </header>
);


export default reduxForm({
    form:'todoInputForm'
})(TodoHeader);
