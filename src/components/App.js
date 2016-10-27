// @flow
import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div>
          {
            this.props.children ? this.props.children : <Home />
          }
        </div>
      </div>
    );
  }
};
