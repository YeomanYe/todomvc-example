import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';
import TodoFooter from './TodoFooter';
import Storage from './Storage';

class App extends Component {
  constructor(props) {
    super(props);
    Storage.init();
    this.state = {};
  }

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
