import React from 'react';

const TodoFooter = ({clearCompleted,left,updateVisibility,visibility}) => (
    <footer className="footer"><span className="todo-count"><strong>{left}</strong> item left
                </span>
        <ul className="filters">
            <li><a href="#/all" onClick={()=>updateVisibility('all')} className={visibility === 'all' ? 'selected' : ''}>All</a></li>
            <li><a href="#/active" onClick={()=>updateVisibility('active')} className={visibility === 'active' ? 'selected' : ''} >Active</a></li>
            <li><a href="#/completed" onClick={()=>updateVisibility('completed')} className={visibility === 'completed' ? 'selected' : ''} >Completed</a></li>
        </ul>
        <button onClick={clearCompleted} className="clear-completed" >
            Clear completed
        </button>
    </footer>
);
export default TodoFooter;
