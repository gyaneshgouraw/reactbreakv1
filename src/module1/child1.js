import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
/** 
 * Component import
 * https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
 */

 import Buttom  from '../components/button'
 import mapDispatchToProps from './dispatches'
 

class Container extends Component {

  constructor(props){
    super()
    this.btnFnClick = this.btnFnClick.bind(this)
  }

  componentWillMount = () => {
    console.log('child-1 mounteds');
    
  }

  btnFnClick = () =>{
    console.log('red button was pressed')
    this.props.setval('new value')
  }
  
  render() {
    return (
      <div>
          <h1>Hello child  1</h1>
          <Buttom name = 'Test 1'   code='red' fnclick = {this.btnFnClick} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    todo: state
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)