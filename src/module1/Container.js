/**
 * NPM imports
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

/** 
 * Component import
 * https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
 */

 import Buttom  from '../components/button'
 import Papersheet  from '../components/Papersheet'
 import mapDispatchToProps from './dispatches'
 import CreateGroup from './createGroup'

 

 /**
  * Container class starts
  */
class Container extends Component {

  constructor(props){
    super()
    this.btnsubmit = this.btnsubmit.bind(this)
  }

  componentWillMount = () => {
    // if(this.props.login){
    //   console.log('child-1 mounteds');
    // }
    // else{
    //   this.props.history.push('/login');  
    // }
  }

  /**
   * 
   */
  btnsubmit = ( groupObj ) =>{
    const username = this.props.user ? this.props.user[0].mobile : 'testuser'
    this.props.dispatch({ type:'GROUP_CREATE_REQUESTED',data:{...groupObj,'user':username}})
  }

  
  render() {
    return (
      <div>
        <Grid   xs={12}container spacing={24} direction="row"  justify="center" alignment='center'  > 
          <Grid item xs={2} >
            <Papersheet   text='It conatains different experimental aspects of module1' headline='Scheduller'/>
          </Grid>
          <Grid item xs={10} >
            <Papersheet   text='It conatains different experimental aspects of module1' headline='Scheduller'/>
            <CreateGroup fnsubmit ={ this.btnsubmit }  />
          </Grid>
        </Grid>
          
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    login: state.Login.loggedIn,
    user: state.Login.user
  }
}

export default connect(
  mapStateToProps,
  null
)(Container)