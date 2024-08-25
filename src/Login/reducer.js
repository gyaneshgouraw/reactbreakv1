import { SET_LOG_IN } from './actionTypes'


const initstate = {}
function reducer(state = initstate,  action) {
    switch (action.type) {
        case SET_LOG_IN:
          return Object.assign({}, state, {
            loggedIn: action.data
          })
        default:
          return state
      }
  }

  export default  reducer