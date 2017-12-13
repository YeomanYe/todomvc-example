import React, { Component } from 'react';
import Todo from './Todo';

class TodoMain extends Component {
  render() {
    return (
      <section className="main">
            <input type="checkbox" className="toggle-all"/>
            <ul className="todo-list">
                {
                    this.props.todos.map((todo,index) =>
                        <Todo key={todo.message+index} todo={todo}/>
                    )
                }
            </ul>
        </section>
    );
  }
}

export default TodoMain;
