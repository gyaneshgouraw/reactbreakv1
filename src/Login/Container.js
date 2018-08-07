/**
 * NPM imports
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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
    this.getLoginVal = this.getLoginVal.bind(this)
  }


  btnSetLogin = () =>{
    const data= {mobile:this.state.mobile}
    this.props.dispatch({type: 'USER_LOGIN_REQUESTED', data})
    //this.props.setLogIn(true)
    //this.props.history.push('/child1');
  }

  /**
   * 
   */
  renderSignUp = () =>{
    this.props.dispatch({type: 'TOGGLE_LOGIN_VIEW',data:''})
  }

  /**
   * 
   */
  fnBtnSubmit = ( data ) =>{
    this.props.dispatch({type: 'USER_CREATE_REQUESTED', data: data})
    console.log(data)
  }
 /**
  * function to get login text field value
  */
  getLoginVal = ( event ) =>{
    this.setState({
      [event.target.id]:event.target.value
    });
  }
  


  render() {
    const loginView = this.props.login.signup
    const loginstl = {opacity:.8,backgroundColor:'#fff',marginTop:'25%',borderRadius:'1%'}
    return (
      <div style={sectionStyle}>
       {loginView ?
         (<Signup btnSubmit={this.fnBtnSubmit} btnClose={this.renderSignUp}/>) :

        (<Grid   xs={12}container spacing={24} direction="row"  justify="center" alignment='center'  >
            <Grid style={loginstl} xs={4}   item={true} container spacing={24} direction="row"  justify="center" >
              <TextField fullWidth id="mobile" label="Enter mobile no. to log in"   onChange={this.getLoginVal}/>
            </Grid>
            <Grid item={true} container spacing={24}  >
                <Grid style={{padding:'2%'}} item={true} xs={12}  container spacing={24} direction="row"  justify="center" >
                    <Grid style={{}}><Buttom  name = 'SignUp'  type="primary"  fnclick = {this.renderSignUp} /></Grid>
                    <Grid style={{marginLeft:'1%'}}><Buttom  name = 'LogIn'  type="primary"  fnclick = {this.btnSetLogin} /></Grid>
                </Grid>
              </Grid>
          </Grid>)}
          
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