// @flow
import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Jumbotron>
          <h1>
            Bienvenido!
          </h1>
          <p>
            Te queremos invitar a ver los beneficios de las turbinas hidrocinéticas.
          </p>
          <p>
            Para esto debes presionar en cada tema que aparece en la parte superior de tu pantalla.
          </p>
          <h2>
            Disfruta!!
          </h2>
        </Jumbotron>
      </div>
    );
  }
}
