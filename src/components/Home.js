// @flow
import React, { Component } from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import Image1 from '../images/Home1.jpg';

var imageStyle = {
  margin: '0 auto'
};

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Jumbotron>
          <div className="container">
            <h1>
              Bienvenido!
            </h1>
            <p className="text-justify">
              Te queremos invitar a ver los beneficios de las turbinas hidrocinéticas.
            </p>
            <p className="text-justify">
              Para esto debes presionar en cada tema que aparece en la parte superior de tu pantalla.
            </p>
            <Image src={Image1} rounded responsive style={imageStyle} />
          </div>
        </Jumbotron>
      </div>
    );
  }
}
