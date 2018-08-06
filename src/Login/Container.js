/**
 * NPM imports
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';

/**
 * File imports
 */
import Papersheet from '../components/Papersheet'
import Buttom  from '../components/button'
import mapDispatchToProps from './dispatches'
import img from '../images/login.jpg'
import Signup from './signup'


class Container extends Component {
 
  constructor(props){
    super()
    this.btnSetLogin = this.btnSetLogin.bind(this)
    this.renderSignUp = this.renderSignUp.bind(this)
  }


  btnSetLogin = () =>{
    this.props.dispatch({type: 'USER_FETCH_REQUESTED', data:'hj'})
    //this.props.setLogIn(true)
    //this.props.history.push('/child1');
  }

  renderSignUp = () =>{
    this.props.dispatch({type: 'TOGGLE_LOGIN_VIEW',data:''})
  }

  fnBtnSubmit = ( data ) =>{
    this.props.dispatch({type: 'USER_CREATE_REQUESTED', data: data})
    console.log(data)
  }


  render() {
    const loginView = this.props.login.signup
    return (
      <div style={sectionStyle}>
       {loginView ?
         (<Signup btnSubmit={this.fnBtnSubmit} btnClose={this.renderSignUp}/>) :

        (<div style={{marginTop:'30%'}}>
          <Papersheet   text='This is login page' headline='Login'/>
          <Grid item={true} container spacing={24}  >
              <Grid item={true} xs={12}  container spacing={24} direction="column" align="center" >
                <Grid item={true} xs={6}  container direction="column" align="center" >
                  <Buttom  name = 'SignUp'  type="primary"  fnclick = {this.renderSignUp} />
                </Grid>
                <Grid item={true} xs={6}  container  direction="column" align="center" >
                  <Buttom  name = 'LogIn'  type="primary"  fnclick = {this.btnSetLogin} />
                </Grid>
              </Grid>
            </Grid>
          </div>)}
          
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.Login
  }
}

export default connect(
  mapStateToProps,
  null
)(Container)


var sectionStyle = {
  backgroundImage:`url(${img})`,
  position:'absolute',
  height:'100%',
  width:'100%',
  backgroundRepeat  : 'repeat',
  backgroundPosition: 'center'
};