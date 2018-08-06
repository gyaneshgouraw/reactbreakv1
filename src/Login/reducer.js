import { SET_LOG_IN } from './actionTypes'


const initstate = {}
function reducer(state = initstate,  action) {
    switch (action.type) {
        case SET_LOG_IN:
          return Object.assign({}, state, {
            loggedIn: action.data
          })
          case 'USER_FETCH_SUCCEEDED':{
            return Object.assign({}, state, {
              user: action.user
            })
          }
          case 'USER_FETCH_FAILED':{
            return Object.assign({}, state, {
              fail: action.message
            })
          }

          case 'USER_CREATE_SUCCEEDED':{
            return Object.assign({}, state, {
              newuser: action.user
            })
          }
          case 'USER_CREATE_FAILED':{
            return Object.assign({}, state, {
              fail: action.message
            })
          }
        default:
          return state
      }
  }

  export default  reducer