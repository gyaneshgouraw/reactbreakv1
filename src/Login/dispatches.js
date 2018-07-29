
import { SET_LOG_IN } from './actionTypes'


const  mapDispatchToProps = dispatch => {
  return {
    setLogIn: (data) =>
      dispatch({
        type: SET_LOG_IN,
        data
      })
  }
}

export default  mapDispatchToProps