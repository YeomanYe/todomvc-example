import React  from 'react';
import Todo from './Todo';

const TodoMain = ({todos,removeTodo,updateTodo}) => (
    <section className="main">
        <input type="checkbox" className="toggle-all"/>
        <ul className="todo-list">
            {
                todos.map((todo,index) =>
                    <Todo key={todo.msg+'-'+index} todo={todo} removeTodo={()=>removeTodo(todo.id)} updateTodo={updateTodo} editable={false}/>
                )
            }
        </ul>
    </section>
);
export default TodoMain;
