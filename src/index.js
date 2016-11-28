import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Energy from './components/Energy';
import Turbine from './components/Turbine';
import Relevance from './components/Relevance';
import Impact from './components/Impact';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import 'material-design-icons/iconfont/material-icons.css';

import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/energia" component={Energy}/>
      <Route path="/turbina" component={Turbine}/>
      <Route path="/relevancia" component={Relevance}/>
      <Route path="/impacto" component={Impact} />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
