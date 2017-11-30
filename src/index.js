import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import history from './history';
import Auth from './Auth/Auth';
import Test from './views/Pages/Test/Test';


// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss';
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss';

// Containers
import Full from './containers/Full/';

// creates the auth object
const auth = new Auth();

// function to access the id_token and log the user in
const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}



ReactDOM.render((
  <Router history={history} component={Full}> 
      <Route path="/" render={(props) => <Full auth={auth} {...props} />} /> 
  </Router>
), document.getElementById('root'));
