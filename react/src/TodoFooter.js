import React, {
    Component
} from 'react';
import Filter from './Filter';
import Storage from './Storage';

class TodoFooter extends Component {
    clearCompleted(){
        var datas = Filter.completed(Storage.datas);
        Storage.removeItemArr(datas);
        this.props.updateItem();
    }
    render() {
        const visibility = this.props.visibility,
              updateVisibility = this.props.changeVisibilityHandler;
        return (
            <footer className="footer"><span className="todo-count"><strong>{this.props.left}</strong> item left
                </span>
            <ul className="filters">
                <li><a href="#/all" onClick={()=>updateVisibility('all')} className={visibility === 'all' ? 'selected' : ''}>All</a></li>
                <li><a href="#/active" onClick={()=>updateVisibility('active')} className={visibility === 'active' ? 'selected' : ''} >Active</a></li>
                <li><a href="#/completed" onClick={()=>updateVisibility('completed')} className={visibility === 'completed' ? 'selected' : ''} >Completed</a></li>
            </ul>
            <button onClick={this.clearCompleted.bind(this)} className="clear-completed" >
                Clear completed
            </button>
        </footer>
        );
    }
}

export default TodoFooter;