// @flow
import React, { Component } from 'react';
import { Jumbotron, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import Image1 from '../../images/Impact1.png';

var imageStyle = {
  margin: '0 auto'
};

export default class Impact extends Component {
  render() {
    return (
      <div className="Impact">
        <Jumbotron>
          <div className="container">
            <h1>
              Impacto Ambiental
            </h1>
            <p className="text-justify">
              Como ya te contamos antes, la electricidad producida por esta turbina trae muchos beneficios, ya que su fuente es renovable, y es una alternativa energética limpia,  pero trae un impacto en nuestro medio ambiente.
            </p>
            <p className="text-justify">
              Estos principalmente, vienen por la construcción de las instalaciones necesarias para el funcionamiento de la planta que produce energía. Estos impactos son generalmente irreversibles, y generan las siguientes consecuencias
            </p>
            <ListGroup>
              <ListGroupItem>
                Modifica el ciclo de vida de la fauna. O sea, la vida de los animales que viven cerca de la zona en donde se va a instalar la planta cambia radicalmente
              </ListGroupItem>
              <ListGroupItem>
                Disminuye la cantidad de agua de los ríos (si es que es instalada en un río), cambiando la composición del agua que corre por éste y su microclima.
              </ListGroupItem>
            </ListGroup>
            <p className="text-justify">
              Es por esto que es importante que al instalar una planta que produce energía a través del agua, es necesario analizar los posibles impactos que se pueden producir en el medio ambiente, y así planificar cómo evitar o reducir estos problemas para que la vida de los animales que viven cerca de la zona no se vean afectados. 
            </p>
            <Image src={Image1} rounded responsive style={imageStyle} />
            </div>
        </Jumbotron>
      </div>
    );
  }
};
