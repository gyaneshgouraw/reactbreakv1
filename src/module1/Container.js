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
    this.btnFnClick = this.btnFnClick.bind(this)
  }

  componentWillMount = () => {
    console.log('child-1 mounteds');
    
  }

  btnFnClick = () =>{
    console.log('red button was pressed')
    this.props.setval('new value')
  }
  
  render() {
    return (
      <div>
        <Grid   container xs='24'  justify="center"> 
          <Grid item xs={4} >
            <Papersheet   text='It conatains different experimental aspects of module1' headline='Module 1'/>
            <Buttom name = 'Test dispatch to store'   code='red' fnclick = {this.btnFnClick} />
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