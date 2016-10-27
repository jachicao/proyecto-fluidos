// @flow
import React, { Component } from 'react';
import Relevance from './Relevance';
import References from './References';


export default class RelevanceWrapper extends Component {
  render() {
    return (
      <div className="RelevanceWrapper">
        <Relevance />
        <References />
      </div>
    );
  }
}
