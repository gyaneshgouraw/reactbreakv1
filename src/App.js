import React from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

import './App.css';
import Child1 from './child1'
import Child2 from './child2'
import Home from './initial/home'


const App = () => (
  <Router>
    <div>
      <Home />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Child1">Child1</Link></li>
        <li><Link to="/Child2">Child2</Link></li>
      </ul>
      <hr/>

      <Route exact path="/" />
      <Route path="/child1" component={Child1}/>
      <Route path="/child2" component={Child2}/>
    </div>
  </Router>
)
export default App