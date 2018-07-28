import { SET_VAL } from './actionTypes'


const initstate = {key:'module1'}
function reducer(state = initstate,  action) {
    switch (action.type) {
        case SET_VAL:
          return Object.assign({}, state, {
            visibilityFilter: action.data
          })
        default:
          return state
      }
  }

  export default  reducer