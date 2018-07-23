import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from './child1'
import Child2 from './child2'

class App extends Component {
  componentWillMount = () => {
    console.log('component mounted')
  }

  componentWillUnmount = () =>{
    console.log('unmount')
  }

  componentWillReceiveProps = () =>{
    console.log('component will recieve props');
    
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Child1/>
        <Child2 />
      </div>
    );
  }
}

export default App;
