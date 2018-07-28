import React, { Component } from 'react'

/** 
 * component imports
 */


export default class componentName extends Component {
  componentWillMount = () => {
    console.log('child-2 mounted');
    
  }
  
  render() {
    return (
      <div>
          <h1>Hello child   2</h1>
          
      </div>
    )
  }
}
