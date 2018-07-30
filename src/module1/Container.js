/**
 * NPM imports
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';

/** 
 * Component import
 * https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
 */

 import Buttom  from '../components/button'
 import Papersheet  from '../components/Papersheet'
 import mapDispatchToProps from './dispatches'
 import  { setLogIn } from '../Login/dispatches'
 

 /**
  * Container class starts
  */
class Container extends Component {

  constructor(props){
    super()
    this.btnFnClick = this.btnFnClick.bind(this)
    this.btnLogout = this.btnLogout.bind(this)
  }

  componentWillMount = () => {
    if(this.props.login){
      console.log('child-1 mounteds');
    }
    else{
      this.props.history.push('/login');  
    }
    
    
  }

  btnFnClick = () =>{
    console.log('red button was pressed')
    this.props.history.push('/child2');
  }

  btnLogout = () =>{
    this.props.dispatch(setLogIn(false))
    this.props.history.push('/login')
  }
  
  render() {
    return (
      <div>
        <Grid   container xs='24'  justify="center"> 
          <Grid item xs={4} >
            <Papersheet   text='It conatains different experimental aspects of module1' headline='Scheduller'/>

            <Buttom name = 'view child2'   code='red' fnclick = {this.btnFnClick} />
            <br/>
            <br/>
            <Buttom name = 'LogOut'  type="secondary"  fnclick = {this.btnLogout} />
            
          </Grid>
        </Grid>
          
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    login: state.Login.loggedIn
  }
}

export default connect(
  mapStateToProps,
  null
)(Container)