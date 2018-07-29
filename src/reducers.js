
import { combineReducers } from 'redux'
/**
 * file imports
 */
import m1reducer from './module1/reducer'
import Login from './Login/reducer'

function todoReducer(state = {Hello:'world'}, action) {
    // For now, don't handle any actions
    // and just return the state given to us.
    return state
  }

  const todoApp = combineReducers({
    todoReducer,
    m1reducer,
    Login
  })
  

  export default  todoApp