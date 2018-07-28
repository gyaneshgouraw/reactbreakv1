import React from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './App.css';
import Child1 from './module1/Container'
import Child2 from './module2/Container'
import Home from './initial/home'

/** 
 * Imports for redux 
 */
import { Provider } from 'react-redux'




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


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root