import React, { Component } from 'react';

export default class Todo extends Component{
    
    render(){
        return(
            <li className={this.props.completed?'todo completed':'todo'}>
                <div className="view">
                    <input type="checkbox" className="toggle"/>
                    <label>{this.props.message}</label>
                    <button className="destroy"></button>
                </div>
                <input type="text" className="edit"/>
            </li>
        )
    }
}