import React, { Component } from 'react';

class TodoHeader extends Component {
  render() {
    return (
      <header className="header">
          <h1>todos</h1>
          <input autoFocus="autofocus" autoComplete="off" placeholder="请填写代办事项" className="new-todo"/>
      </header>
    );
  }
}

export default TodoHeader;
