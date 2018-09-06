import React from 'react';

const Todo = ({todo,removeTodo,onKeyDown,setEditable,toggleTodoCompleted,editable}) => (
    <li className={['todo',editable ? 'editing' : '',todo.completed ? 'completed' : ''].join(' ')}>
        <div className="view">
            <input checked={todo.completed} onChange={toggleTodoCompleted}  type="checkbox" className="toggle"/>
            <label onDoubleClick={setEditable}>{todo.message}</label>
            <button onClick={removeTodo} className="destroy"></button>
        </div>
        <input onKeyDown={onKeyDown} type="text" className="edit"/>
    </li>
);

export default Todo;
