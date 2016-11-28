// @flow
import React, { Component } from 'react';
import { Jumbotron, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import Image1 from '../../images/Hydrokinetic1.png';
import Image2 from '../../images/Hydrokinetic2.png';
import Question from '../Question';

var imageStyle = {
  margin: '0 auto'
};

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
            <h3 className="text-justify">
              Turbina de eje horizontal
            </h3>
            <p className="text-justify">
              Esta es la aplicación más común de las turbinas.
              Funciona exactamente igual que una turbina eólica pero bajo el agua.
              En otras palabras, el agua choca de frente contra una estructura similar a la de un ventilador.
              Por la forma de las astas, la turbina gira en una dirección, dándole energía al dinamo.
            </p>
            <Image src={Image1} rounded responsive style={imageStyle}/>
            <h3 className="text-justify">
              Turbina de eje vertical
            </h3>
            <p className="text-justify">
              Como muestra la imagen, el receptor energético se encuentra de forma perpendicular a la corriente.
              Las astas tienen una estructura especial que al enfrentarse al agua en movimiento deben rotar en un sentido para reducir el roce con el agua.
            </p>
            <Image src={Image2} rounded responsive style={imageStyle}/>
            <h3 className="text-justify">
              Lámina oscilante
            </h3>
            <p className="text-justify">
              El mecanismo principal difiera de una turbina.
              La obtención energética se hace con una boya, la cual al subir y bajar mueve mecanismos internos en los receptores energéticos, que transforman la energía lineal (de arriba a abajo), en una radial (como la de un dinamo).
            </p>
            <h3 className="text-justify">
              Flujo forzado
            </h3>
            <p className="text-justify">
              La estructura de estos sistemas no están bien definidas, pero generalmente son una mezcla entre alguna de los dos primeras turbinas, un sistema de captación de agua, y un sistema rotacional.
              Aunque se pueden encontrar sistemas más elaborados.
            </p>
            <p className="text-justify">
              Si no queda claro como el agua hace girar las astas en algún sentido determinado.
              Puedes verlo como si las partículas de agua, o un flujo en general, ya no son partículas si no piedritas.
              Estas piedras chocan con la lámina de acero, como esta se encuentra ladeada, es empujada en dirección del asta en contra de la piedra. Pero cómo se encuentra fija, y solo puede rotar.
              Entonces rota en esa dirección.
            </p>
            <Question
              question={"¿Cuál no es una energía perteneciente a las turbinas Hidrocinéticas?"}
              alternatives={["Flujos de ríos", "Liberación de agua en una represa", "Corrientes maritimas", "Olas o fluctuaciones de la marea en una costa"]}
              correct_answer={1}
              correct_answer_text={"Correcto!"}
              incorrect_answer_text={"Incorrecto! La alternativa correcta es b."}
              />
          </div>
        </Jumbotron>
      </div>
    );
  }
};
