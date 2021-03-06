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
              <a href="http://www.altercexa.eu/test/images/archivos/Material%20Educativo/CuadernilloPrimaria-ES.pdf">
                Altexcexa, CuadernilloPrimaria
              </a>
            </p>
            <p className="text-justify">
              <a href="http://www.endesaeduca.com/Endesa_educa/recursos-interactivos/conceptos-basicos/i.-la-energia-y-los-recursos-energeticos">
                EndesaEduca, Energía y recursos energeticos
              </a>
            </p>
            <p className="text-justify">
              <a href="http://www.bioenciclopedia.com/energia-marina/">
                BioEnciclopedia, Energía marina
              </a>
            </p>
          </div>
        </Jumbotron>
      </div>
    );
  }
};
