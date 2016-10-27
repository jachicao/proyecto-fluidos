// @flow
import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class EnergyReferences extends Component {
  render() {
    return (
      <div className="EnergyReferences">
        <Jumbotron>
          <h1>
            Referencias
          </h1>
          <p>
            <a href="http://www.altercexa.eu/test/images/archivos/Material%20Educativo/CuadernilloPrimaria-ES.pdf">
              http://www.altercexa.eu/test/images/archivos/Material%20Educativo/CuadernilloPrimaria-ES.pdf
            </a>
          </p>
          <p>
            <a href="http://www.endesaeduca.com/Endesa_educa/recursos-interactivos/conceptos-basicos/i.-la-energia-y-los-recursos-energeticos">
              http://www.endesaeduca.com/Endesa_educa/recursos-interactivos/conceptos-basicos/i.-la-energia-y-los-recursos-energeticos
            </a>
          </p>
          <p>
            <a href="http://www.bioenciclopedia.com/energia-marina/">
              http://www.bioenciclopedia.com/energia-marina/
            </a>
          </p>
        </Jumbotron>
      </div>
    );
  }
};
