import React from 'react';

const Todo = ({todo,updateTodo,removeTodo,editable}) => (
    <li className={['todo',editable ? 'editing' : '',todo.completed ? 'completed' : ''].join(' ')}>
        <div className="view">
            <input checked={todo.completed} onChange={()=>{
                todo.completed = !todo.completed;
                updateTodo(todo);
            }}  type="checkbox" className="toggle"/>
            <label onDoubleClick={()=>{}}>{todo.msg}</label>
            <button onClick={removeTodo} className="destroy"></button>
        </div>
        <input onKeyDown={(evt)=>{
            let {keyCode,target:{value}} = evt;
            if(keyCode === 13 && value.trim()){
                todo.msg = value;
                updateTodo(todo);
            }
        }} type="text" className="edit"/>
    </li>
);

export default Todo;
