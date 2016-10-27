// @flow
import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Turbine extends Component {
  render() {
    return (
      <div className="Turbine">
        <Jumbotron>
          <h1>
            Turbinas
          </h1>
          <p>
            La turbinas son básicamente unas aspas conectadas a un dinamo (en sí, lo que acabamos de ver, el ventilador gigante que se cambia su motor por un dinamo, es técnicamente una turbina).
          </p>
          <p>
            Las turbinas son máquinas que extraen energía de algún fluido en movimiento. Las más visibles, por su gran tamaño, son las turbinas eólicas.
            Pero existen múltiples tipos, generalmente hechas para extraer energías de un líquido, ya que al poseer mayor masa mueven más energía.
          </p>
          <p>
            En otros casos, estas turbinas pueden estar en un sistema más cerrado, en donde se controlen mejor las distintas variables.
            Como en represas de agua, o en sistemas hidráulicos.
            Pero últimamente se han desarrollado turbinas que no necesitan de este sistema controlado para obtener energía, solo la turbina y el agua.
            A este tipo de turbinas se les cataloga como hidrocinéticas.
          </p>
        </Jumbotron>
      </div>
    );
  }
};
