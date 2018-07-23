import React, { Component } from 'react'

export default class componentName extends Component {
  componentWillMount = () => {
    console.log('child-2 mounted');
    
  }
  
  render() {
    return (
      <div>
          <h1>Hello child </h1>
      </div>
    )
  }
}
