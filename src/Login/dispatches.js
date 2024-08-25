
import * as types from './actionTypes'


const  mapDispatchToProps = dispatch => {
  return {
    setLogIn: (data) =>
      dispatch({
        type: types.SET_LOG_IN,
        data
      })
  }
}

export default  mapDispatchToProps

/**
@function setLogIn
@returns {action} SET_AUTHOR_NAMES
@description This is an action which is dispatched at for setting author name
*/
export const setLogIn = (data) => {
	return {
		type : types.SET_LOG_IN,
        data
	}
}