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
 

 /**
  * Container class starts
  */
class Container extends Component {

  constructor(props){
    super()
  }

  componentWillMount = () => {
    console.log('Module 2 mounted');
    
  }

  
  render() {
    return (
      <div>
        <Grid   container xs='24'  justify="center"> 
          <Grid item xs={4} >
            <Papersheet   text='It conatains different experimental aspects of module 2' headline='Module 2'/>
            
          </Grid>
        </Grid>
          
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