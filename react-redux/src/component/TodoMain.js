import React, { Component } from 'react';
import Todo from './Todo';

const TodoMain = ({todos}) => (
    <section className="main">
        <input type="checkbox" className="toggle-all"/>
        <ul className="todo-list">
            {
                todos.map((todo,index) =>
                    <Todo key={todo.msg+index} todo={todo}/>
                )
            }
        </ul>
    </section>
);
export default TodoMain;
