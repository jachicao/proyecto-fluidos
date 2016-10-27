import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Energy from './components/Energy';
import Turbine from './components/Turbine';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/energy" component={Energy}/>
      <Route path="/turbine" component={Turbine}/>
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
