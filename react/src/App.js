import React, { Component } from 'react';
import TodoHeader from './TodoHeader.js'
import TodoMain from './TodoMain.js'
import TodoFooter from './TodoFooter.js'

class App extends Component {
  render() {
    return (
      <section>
        <TodoHeader/>
        <TodoMain/>
        <TodoFooter/>
      </section>
    );
  }
}

export default App;
