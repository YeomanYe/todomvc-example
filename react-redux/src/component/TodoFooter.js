import React from 'react';
import VisibilityAction from "../action/visibility-action";
const {ACTIVE,ALL,COMPLETED} = VisibilityAction.STATUS;
const TodoFooter = ({clearCompleted,left,toggleVisibility,visibility}) => (
    <footer className="footer"><span className="todo-count"><strong>{left}</strong> item left
                </span>
        <ul className="filters">
            <li><a href="#/all" onClick={()=>toggleVisibility(ALL)} className={visibility === ALL ? 'selected' : ''}>All</a></li>
            <li><a href="#/active" onClick={()=>toggleVisibility(ACTIVE)} className={visibility === ACTIVE ? 'selected' : ''} >Active</a></li>
            <li><a href="#/completed" onClick={()=>toggleVisibility(COMPLETED)} className={visibility === COMPLETED ? 'selected' : ''} >Completed</a></li>
        </ul>
        <button onClick={clearCompleted} className="clear-completed" >
            Clear completed
        </button>
    </footer>
);
export default TodoFooter;
