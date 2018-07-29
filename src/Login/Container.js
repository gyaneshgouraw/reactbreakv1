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
  // constructor(props){
  //   super()
  //   this.btnLogin = this.btnLogin.bind(this)
  //   this.btnLogout = this.btnLogout.bind(this)
  // }
  constructor(props){
    super()
    this.btnSetLogin = this.btnSetLogin.bind(this)
    this.btnLogout = this.btnLogout.bind(this)
  }

  btnSetLogin = () =>{
    this.props.setLogIn(true)
    this.props.history.push('/child2');
  }

  btnLogout = () =>{
    this.props.setLogIn(false)
  }


  render() {
    return (
      <div>
        <Papersheet   text='This is login page' headline='Login'/>
        <Buttom name = 'LogIn'  type="primary"  fnclick = {this.btnSetLogin} />
        <br/>
        <Buttom name = 'LogOut'  type="secondary"  fnclick = {this.btnLogout} />
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