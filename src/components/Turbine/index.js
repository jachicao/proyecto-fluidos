// @flow
import React, { Component } from 'react';
import Dynamo from './Dynamo';
import Turbine from './Turbine';
import Hydrokinetic from './Hydrokinetic';

export default class TurbineWrapper extends Component {
  render() {
    return (
      <div className="TurbineWrapper">
        <Dynamo />
        <Turbine />
        <Hydrokinetic />
      </div>
    );
  }
}
