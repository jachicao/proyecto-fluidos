// @flow
import React, { Component } from 'react';
import Impact from './Impact';
import References from './References';

export default class ImpactWrapper extends Component {
  render() {
    return (
      <div className="ImpactWrapper">
        <Impact />
        <References />
      </div>
    );
  }
}
