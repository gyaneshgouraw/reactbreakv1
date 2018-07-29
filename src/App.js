/**
 * NPM imports
 */

import React from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip'

/**
 * Local imports
 */
import './App.css';
import Child1 from './module1/Container'
import Child2 from './module2/Container'
import Home from './initial/home'
import Login from './Login/Container'

/** 
 * Imports for redux 
 */
import { Provider } from 'react-redux'


// <Route  path="/login"   component={Login}/>

const App = () => (
  <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
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