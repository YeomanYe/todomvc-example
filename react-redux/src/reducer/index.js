import { combineReducers } from 'redux'
import todos from './todo-reducer'
import visibility from './visibility-reducer';

export default combineReducers({todos,visibility})
