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
              <a href="http://www.endesaeduca.com/Endesa_educa/recursos-interactivos/produccion-de-electricidad/xi.-las-centrales-hidroelectricas">
                Endesa Educa, Producción de electricidad
              </a>
            </p>
          </div>
        </Jumbotron>
      </div>
    );
  }
};
