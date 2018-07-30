/**
 * NPM imports
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

/**
 * File imports
 */
import Papersheet from '../components/Papersheet'
import Buttom  from '../components/button'
import mapDispatchToProps from './dispatches'


class Container extends Component {
 
  constructor(props){
    super()
    this.btnSetLogin = this.btnSetLogin.bind(this)
  }

  btnSetLogin = () =>{
    this.props.setLogIn(true)
    this.props.history.push('/child1');
  }




  render() {
    return (
      <div>
        <Papersheet   text='This is login page' headline='Login'/>
        <Buttom name = 'LogIn'  type="primary"  fnclick = {this.btnSetLogin} />
        
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