/**
 * IMports NPM
 */
import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Buttom  from '../components/button'
// import AccountCircle from '@material-ui/icons/AccountCircle';


/**
 * Signup Component
 */
export default class Signup extends Component {
  constructor(props){
    super()
    this.getVal = this.getVal.bind(this)
    this.btnSignUp = this.btnSignUp.bind(this)
  }

  getVal = ( event ) => {
    console.log( 'val', this.state)
    this.setState({
      [event.target.id]:event.target.value
    });
  }

  btnSignUp = () =>{
    this.props.btnSubmit(this.state)
  }

  render() {
    return (
      <div style={{backgroundColor:'#fff'}}>
       <Grid container spacing={24} >

        <Grid item xs={6}  >
          <TextField id="name" label="Name"   onChange={this.getVal}/>
        </Grid>

        <Grid item xs={6} >
          <TextField id="email" label="Email" onChange={this.getVal}/>
        </Grid>

        <Grid item xs={6}>
          <TextField id="mobile" label="Mobile" onChange={this.getVal}/>
        </Grid>
        <Buttom  name = 'Submit'  type="primary"  fnclick = {this.btnSignUp} />
      </Grid>

      </div>
    )
  }
}
