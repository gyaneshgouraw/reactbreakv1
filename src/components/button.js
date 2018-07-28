/**
 * NPM imports
 */
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
/**
 * File Imoprts
 */

export default class Buttom extends Component {
    constructor (props){
        super()
    }



    

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={ this.props.fnclick}P>
            {this.props.name}
        </Button>
      </div>
    )
  }
}
