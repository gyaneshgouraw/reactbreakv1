import React, { Component } from 'react'
import { connect } from 'react-redux'

import logo from '../logo.svg';

class Container extends Component {
  constructor(props){
    super()

  }

componentWillMount = () => {
  // if(this.props.login){
  //   console.log('Dashboard mounted')
  // }
  //   else{
  //     this.props.history.push('/login')
  //   }
  }

  render() {
    return (
      <div>
        
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.children}
      </div>
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
