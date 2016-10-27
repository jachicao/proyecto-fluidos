// @flow
import React, { Component } from 'react';
import { Jumbotron, Image } from 'react-bootstrap';

export default class Hydrokinetic extends Component {
  render() {
    return (
      <div className="Hydrokinetic">
        <Jumbotron>
          <h1>
            Turbinas hidrocinéticas
          </h1>
          <p>
            El término de turbina hidrocinética, es bastante amplio, y no se posee un consenso claro.
            Pero para poder entenderlo de forma simple, son todas aquellas turbinas que generan energía a partir de corrientes de agua.
            En las cuales, dicha turbina, no se encuentra conectada a tuberías para controlar el flujo.
            Frente a esta definicion, podemos encontrarnos muchos tipos distintos de estas turbinas, algunas optimizadas para las corrientes marinas, y otras para ríos.
            Con diferentes estructuras y soportes.
            Cada tipo con sus ventajas y desventajas.
          </p>

        </Jumbotron>
      </div>
    );
  }
};
