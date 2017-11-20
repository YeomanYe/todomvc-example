import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';
import TodoFooter from './TodoFooter';
import Storage from './Storage';
import Filter from './Filter';

class App extends Component {
  constructor(props) {
    super(props);
    Storage.init();
    console.log(window.location.hash);
    let visibility = window.location.hash.replace('#/','');
    visibility = visibility ? visibility : 'all';
    console.log(visibility);
    this.state = {
        todos:Filter[visibility](Storage.datas),
        visibility:visibility
    };
    console.log(this.state.datas);
  }
  updateItem(){
    this.setState({
        todos:Filter[this.state.visibility](Storage.datas),
    })
  }
  updateVisibility(visibility){
    visibility = visibility ? visibility : 'all';
    console.log(visibility);
    this.setState({
        todos:Filter[visibility](Storage.datas),
        visibility:visibility
    });
  }
  render() {
    const {updateItem,updateVisibility} = this;
    let {todos,visibility} = this.state;
    return (
      <section>
        <TodoHeader updateItem={updateItem.bind(this)}/>
        <TodoMain updateItem={updateItem.bind(this)} todos={todos}/>
        <TodoFooter updateItem={updateItem.bind(this)} changeVisibilityHandler={updateVisibility.bind(this)} visibility={visibility} left={Filter.active(Storage.datas).length}/>
      </section>
    );
  }
}

export default App;
