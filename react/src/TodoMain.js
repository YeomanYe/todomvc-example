import React, { Component } from 'react';

class TodoMain extends Component {
  render() {
    return (
      <section className="main">
            <input type="checkbox" className="toggle-all"/>
            <ul className="todo-list">
                <li className="todo completed">
                    <div className="view">
                        <input type="checkbox" className="toggle"/>
                        <label>aaa</label>
                        <button className="destroy"></button>
                    </div>
                    <input type="text" className="edit"/>
                </li>
                <li className="todo">
                    <div className="view">
                        <input type="checkbox" className="toggle"/>
                        <label>vfdsa</label>
                        <button className="destroy"></button>
                    </div>
                    <input type="text" className="edit"/>
                </li>
            </ul>
        </section>
    );
  }
}

export default TodoMain;
