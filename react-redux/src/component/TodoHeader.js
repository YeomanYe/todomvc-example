import React from 'react';
import { Field, reduxForm } from 'redux-form'

const TodoHeader = ({onKeyDown}) => (
    <header className="header">
        <h1>todos</h1>
        <Field type="text" name={"todoInput"} component={renderField(onKeyDown)}/>
    </header>
);

const renderField = onKeyDown => (field) => (
    <input {...field.input} onKeyDown={onKeyDown} autoFocus="autofocus" autoComplete="off" placeholder="请填写代办事项" className="new-todo"/>
);

export default reduxForm({
    form:'todoInputForm'
})(TodoHeader);
