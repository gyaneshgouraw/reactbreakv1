import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';

/**
 * 
 */
import logo from '../logo.svg';
import img from '../images/pano.jpg'
import  { setLogIn } from '../Login/dispatches'
import Buttom  from '../components/button'

/**
 * 
 */

class Container extends Component {
  constructor(props){
    super()
    this.btnModule2 = this.btnModule2.bind(this)
    this.btnModule1 = this.btnModule1.bind(this)
    this.btnLogout = this.btnLogout.bind(this)

  }

/**
 * 
 */
btnModule2 = () =>{
    console.log('red button was pressed')
    this.props.history.push('/child2');
  }
  /**
   * 
   */
  btnModule1 = () =>{
    console.log('red button was pressed')
    this.props.history.push('/child1');
  }

/**
 * 
 */
  btnLogout = () =>{
    this.props.dispatch(setLogIn(false))
    this.props.history.push('/login')
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            {/* <img src={img} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">Scheduller App</h1>
          </header>
      </div>
      <Grid item xs={12} >
        <Buttom name = 'view child1'   code='red' fnclick = {this.btnModule1} />
        <Buttom name = 'view child2'   code='red' fnclick = {this.btnModule2} />
        <Buttom name = 'LogOut'  type="secondary"  fnclick = {this.btnLogout} />
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
