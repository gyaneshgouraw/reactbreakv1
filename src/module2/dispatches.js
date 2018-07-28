
import {SET_VAL} from './actionTypes'


const  mapDispatchToProps = dispatch => {
  return {
    setval: (data) =>
      dispatch({
        type: SET_VAL,
        data
      })
  }
}

export default  mapDispatchToProps