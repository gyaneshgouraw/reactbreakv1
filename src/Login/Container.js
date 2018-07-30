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
import img from '../images/login.jpg'


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
      <div style={sectionStyle}>
        <div style={{marginTop:'30%'}}>
        <Papersheet   text='This is login page' headline='Login'/>
        <Buttom  name = 'LogIn'  type="primary"  fnclick = {this.btnSetLogin} />
        </div>
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


var sectionStyle = {
  backgroundImage:`url(${img})`,
  position:'absolute',
  height:'100%',
  width:'100%',
  backgroundRepeat  : 'repeat',
  backgroundPosition: 'center'
};