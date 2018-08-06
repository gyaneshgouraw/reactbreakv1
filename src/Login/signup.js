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
 * Custom imports
 */
import Papersheet from '../components/Papersheet'


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

  btnClose = () =>{
    this.props.btnClose()
  }

  render() {
    const master = {opacity:.8,backgroundColor:'#fff',marginTop:'5%',borderRadius:'1%'}
    return (
      <div >
       <Grid  xs={12} direction="row" justify="center" container spacing={24} alignment='center' >
          <Grid  xs={8}  style={master} item={true} container spacing={24}  >
                <Grid item={true} xs={12}  container spacing={24} direction="column" align="center" >
                  <Papersheet  headline='Signup Form'/>
                </Grid>
                <Grid item={true} xs={6}  container spacing={24} direction="column" align="center" >
                  <TextField id="name" label="Name"   onChange={this.getVal}/>
                </Grid>

                <Grid item={true} xs={6}  container spacing={24} direction="column" align="center" >
                  <TextField id="email" label="Email" onChange={this.getVal}/>
                </Grid>

                <Grid item={true} xs={6}  container spacing={24} direction="column" align="center">
                  <TextField id="mobile" label="Mobile" onChange={this.getVal}/>
                </Grid>
                <Grid item={true} xs={12}  container spacing={24} direction="column" align="center" >
                    <Grid item={true} xs={6}  >
                      <Buttom  name = 'Submit'  type="primary"  fnclick = {this.btnSignUp} />
                    </Grid>
                    <Grid item={true} xs={6}  >
                      <Buttom  name = 'Close'  type="secondary"  fnclick = {this.btnClose} />
                    </Grid>
                </Grid>
          </Grid>
       </Grid>

      </div>
    )
  }
}
