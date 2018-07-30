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

 

 /**
  * Container class starts
  */
class Container extends Component {

  constructor(props){
    super()
    
  }

  componentWillMount = () => {
    if(this.props.login){
      console.log('child-1 mounteds');
    }
    else{
      this.props.history.push('/login');  
    }
    
    
  }

  
  render() {
    return (
      <div>
        <Grid   container xs='24'  justify="center"> 
          <Grid item xs={4} >
            <Papersheet   text='It conatains different experimental aspects of module1' headline='Scheduller'/>
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