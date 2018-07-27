import React, { Component } from 'react'

export default class componentName extends Component {
  componentWillMount = () => {
    console.log('child-1 mounteds');
    
  }
  
  render() {
    return (
      <div>
          <h1>Hello child   1</h1>
      </div>
    )
  }
}
