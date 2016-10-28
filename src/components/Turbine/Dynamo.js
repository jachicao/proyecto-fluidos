// @flow
import React, { Component } from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import Image1 from '../../images/Dynamo1.png';
import Image2 from '../../images/Dynamo2.png';

var imageStyle = {
  margin: '0 auto'
};

export default class Dynamo extends Component {
  render() {
    return (
      <div className="Dynamo">
        <Jumbotron>
          <div className="container">
            <h1>
              Dínamo
            </h1>
            <p className="text-justify">
              Existen distintos métodos para obtener energía.
              La forma más común es transformar el movimiento efectuado por algo o alguien.
              Es el mismo principio que el motor, pero en vez de necesitar energía para dar movimiento, recibe ese movimiento y lo transforma en energía.
            </p>
            <Image src={Image1} rounded responsive style={imageStyle} />
            <p className="text-justify">
              Usando esta misma analogía, es fácil imaginarse un motor conectado a una rueda.
              Donde el motor recibe energía para hacer girar la rueda.
              En este caso, en vez de dar energía para que el auto se mueva, nosotros movemos el auto para producir energía.
              Este elemento inverso al motor eléctrico se llama dinamo, pero son fundamentalmente iguales.
            </p>
            <p className="text-justify">
              Pero no resulta tan eficiente mover todo un auto para hacer girar la rueda.
              Podemos deshacemos del auto por completo, y quedándonos únicamente con el dinamo y la rueda.
              Pero quien hará girar esa rueda, podríamos poner lo que se nos ocurra, desde tu archienemigo, hasta un hámster.
              (Si, teóricamente podemos tener muchos hámster para alimentar un supercomputador como todo científico loco).
            </p>
            <p className="text-justify">
              Pero podemos obtener mayores cantidades de energía de otra forma.
              Cambiemos la rueda y al hámster por aspas/hélices muy grandes, como las que posee un ventilador.
              Ponemos este mecanismo en una torre. Y hacemos que el viento nos de energía
              Algo asi como un ventilador gigante, en cual tiene un dinamo, en vez de un motor.
            </p>
            <p className="text-justify">
              Imagen para que te hagas una idea:
            </p>
            <Image src={Image2} rounded responsive style={imageStyle} />
          </div>
        </Jumbotron>
      </div>
    );
  }
};
