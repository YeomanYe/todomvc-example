import React, { Component } from 'react';
import Todo from './Todo';
import Storage from './Storage';

class TodoMain extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
        todos:Storage.getItem()
    };
  }
  render() {
    return (
      <section className="main">
            <input type="checkbox" className="toggle-all"/>
            <ul className="todo-list">
                {
                    this.state.todos.map((todo)=>
                        <Todo completed={todo.completed} message={todo.message}/>
                    )
                }
                {/*<li className="todo">
                    <div className="view">
                        <input type="checkbox" className="toggle"/>
                        <label>vfdsa</label>
                        <button className="destroy"></button>
                    </div>
                    <input type="text" className="edit"/>
                </li>*/}
            </ul>
        </section>
    );
  }
}

export default TodoMain;
