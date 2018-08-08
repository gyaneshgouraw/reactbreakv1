import { SET_VAL } from './actionTypes'


const initstate = {key:'group'}
function reducer(state = initstate,  action) {
    switch (action.type) {
        case SET_VAL:
          return Object.assign({}, state, {
            visibilityFilter: action.data
          })
          case "GROUP_CREATE_SUCCEEDED":
          return {...state,
            groupList: action.data}

            case "GROUP_CREATE_FAILED":
            return {...state,
              fail: action.message}

        default:
          return state
      }
  }

  export default  reducer