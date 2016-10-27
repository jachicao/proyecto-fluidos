// @flow
import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Energy from './Energy';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Energy />
      </div>
    );
  }
};
