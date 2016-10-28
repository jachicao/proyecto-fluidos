// @flow
import React, { Component } from 'react';
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Hydrokinetic extends Component {
  render() {
    return (
      <div className="Hydrokinetic">
        <Jumbotron>
          <div className="container">
            <h1>
              Turbinas hidrocinéticas
            </h1>
            <p className="text-justify">
              El término de turbina hidrocinética, es bastante amplio, y no se posee un consenso claro.
              Pero para poder entenderlo de forma simple, son todas aquellas turbinas que generan energía a partir de corrientes de agua.
              En las cuales, dicha turbina, no se encuentra conectada a tuberías para controlar el flujo.
              Frente a esta definicion, podemos encontrarnos muchos tipos distintos de estas turbinas, algunas optimizadas para las corrientes marinas, y otras para ríos.
              Con diferentes estructuras y soportes.
              Cada tipo con sus ventajas y desventajas.
            </p>
            <p className="text-justify">
              Para poder tener una mejor claridad de estas, podemos empezar analizando las distintas categorías en las que se clasifican.
              Ya que al tener caracteristicas muy variadas entre unas y otras, es difícil definirlas en conjunto:
            </p>
            <h2 className="text-justify">
              Uso
            </h2>
            <ListGroup>
              <ListGroupItem>
                Flujo de ríos
              </ListGroupItem>
              <ListGroupItem>
                Corrientes maritimas
              </ListGroupItem>
              <ListGroupItem>
                Fluctuaciones de marea
              </ListGroupItem>
            </ListGroup>
            <h2 className="text-justify">
              Posición relativa de la estructura que sostiene la turbina
            </h2>
            <ListGroup>
              <ListGroupItem>
                Estructura sobre el agua
              </ListGroupItem>
              <ListGroupItem>
                Estructura flotante en el agua
              </ListGroupItem>
              <ListGroupItem>
                Estructura en el fondo del agua
              </ListGroupItem>
            </ListGroup>
            <h2 className="text-justify">
              Sistema de conversión energética
            </h2>
            <ListGroup>
              <ListGroupItem>
                Turbina de eje horizontal
              </ListGroupItem>
              <ListGroupItem>
                Turbina de eje vertical
              </ListGroupItem>
              <ListGroupItem>
                Lámina oscilante
              </ListGroupItem>
              <ListGroupItem>
                Flujo cruzado
              </ListGroupItem>
            </ListGroup>
          </div>
        </Jumbotron>
      </div>
    );
  }
};
