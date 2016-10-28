// @flow
import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class References extends Component {
  render() {
    return (
      <div className="References">
        <Jumbotron>
          <div className="container">
            <h1>
              Referencias
            </h1>
            <p className="text-justify">
              <a href="www.meric.cl">
                Meric Chile
              </a>
            </p>
            <p className="text-justify">
              <a href="http://www.ademar.cl/descargas/ademar_presentacion_energias_marinas_senado.pdf">
                ADEMAR, Energías marinas
              </a>
            </p>
          </div>
        </Jumbotron>
      </div>
    );
  }
};
