// @flow
import React, { Component } from 'react';
import Energy from './Energy';
import SourceEnergy from './SourceEnergy';
import References from './References';

export default class EnergyWrapper extends Component {
  render() {
    return (
      <div className="EnergyWrapper">
        <Energy />
        <SourceEnergy />
        <References />
      </div>
    );
  }
}
