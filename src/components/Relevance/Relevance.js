// @flow
import React, { Component } from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import Image1 from '../../images/Relevance1.png';
import Image2 from '../../images/Relevance2.png';
import VideoPlayer from '../VideoPlayer';
import Questions from '../Questions';

var imageStyle = {
  margin: '0 auto'
};

export default class Relevance extends Component {
  render() {
    return (
      <div className="Relevance">
        <Jumbotron>
          <div className="container">
            <h1>
              Importancia de la energía marina en Chile
            </h1>
            <h2>
              ¿Sabías que…?
            </h2>
            <p className="text-justify">
              En Chile tenemos más de 6 mil kilómetros de costa.
              Esta es una característica propia de nuestro país, lo que permite que tenga un potencial impresionante que para la generación de energía eléctrica a partir de la energía de las olas.
            </p>
            <p className="text-justify">
              Además las olas de la costa chilena son ideales para la generación de energía eléctrica por los bajos cambios que se producen en la costa cuando hay cambio de estación climática y por las variaciones de más de 9 metros en las mareas.
            </p>
            <p className="text-justify">
              ADEMAR, asociación de energías del mar, afirmó que: “Chile es el Arabia Saudita en reservas de energía marina”.
              Esto es como decir que en Chile tenemos una mina de oro enorme en energía marina.
            </p>
            <h2>
              ¿Qué características posee la energía marina?
            </h2>
            <p className="text-justify">
              1. Es una energía renovable.
            </p>
            <p className="text-justify">
              2. Está disponible todos los días del año a cada hora.
            </p>
            <p className="text-justify">
              3. Las olas tienen 1000 veces más energía de movimiento que el viento.
            </p>
            <h2>
              ¿Qué posibilidades ofrece el mar?
            </h2>
            <p className="text-justify">
              El mar nos ofrece dos posibilidades de energía: mareomotriz y undimotriz.
            </p>
            <p className="text-justify">
              La energía mareomotriz proviene de las mareas, mientras que la energía undimotriz es generada por el movimiento de las olas.
            </p>
            <p className="text-justify">
              La mayor ventaja de la energía mareomotriz es que se puede predecir porque se conocen los ciclos de las mareas.
              Existen lugares en el mundo que son ideales para recolectar esta energía de las mareas por un angostamiento del continente como por ejemplo, el Canal del Chacao y el Estrecho de Magallanes. ¡Ambos ejemplos son chilenos!.
            </p>
            <Image src={Image1} rounded responsive style={imageStyle}/>
            <p className="text-justify">
              La energía undimotriz se extrae del océano aprovechando el movimiento de las olas.
              Es una energía constante y que tiene mucho potencial en todo el mundo.
              Sin embargo, las investigaciones de esta energía están en las etapas iniciales dado que se están probando distintas tecnologías que permitan obtener esta energía.
            </p>
            <p className="text-justify">
              Por este motivo, es muy importante continuar con las investigaciones porque existe un enorme potencial de energía renovable que ofrece el mar, ¡es un recurso inagotable!
            </p>
            <Image src={Image2} rounded responsive style={imageStyle}/>
            <h2>
              Videos
            </h2>
            <div className="video1">
              <VideoPlayer videoId='aWvs8dUhTTo'/>
            </div>
            <div className="video2">
              <VideoPlayer videoId='J9_xPgU7N_M'/>
            </div>
            <h2>
              ¿Qué aprendí?... Evaluemos tu aprendizaje:
            </h2>
            <Questions
              questions={[
                {
                  "text": "¿Cuál de las siguientes características corresponde a la energía marina?",
                  "alternatives": [
                    {
                      "text": "Es una energía renovable donde su fuente natural es el sol.",
                      "bsStyle": "danger",
                      "answer": "Incorrecto! Es la descripción de energía solar. La correcta es c."
                    },
                    {
                      "text": "Es una energía renovable donde su fuente natural es el viento.",
                      "bsStyle": "danger",
                      "answer": "Incorrecto! Esta es la descripción de energía eólica. La correcta es c."
                    },
                    {
                      "text": "Es una energía disponible durante todo el año donde su fuente natural es el movimiento de las olas.",
                      "bsStyle": "success",
                      "answer": "Correcto!"
                    }
                  ]
                },
                {
                  "text": "¿Cuál de las siguientes alternativas es FALSA con respecto a la energía marina en Chile?",
                  "alternatives": [
                    {
                      "text": "Chile es como una mina de oro en energías marinas",
                      "bsStyle": "danger",
                      "answer": "Esta es una característica verdadera sobre la energía marina. La correcta es b."
                    },
                    {
                      "text": "En Chile, el viento tienen 10 veces menos energía de movimiento que las olas.",
                      "bsStyle": "success",
                      "answer": "Correcto!"
                    },
                    {
                      "text": "La energía marina en Chile tiene un potencial enorme porque se cuentan con más de 6 mil kilómetros de costa.",
                      "bsStyle": "danger",
                      "answer": "Esta es una característica verdadera sobre la energía marina. La correcta es b."
                    }
                  ]
                },
                {
                  "text": "¿Cuál de las siguientes alternativas es VERDADERA con respecto a las formas de obtención de energía del océano en Chile?",
                  "alternatives": [
                    {
                      "text": "La energía mareomotriz se obtiene de las mareas del océano. Su mayor ventaja es que se puede predecir.",
                      "bsStyle": "danger",
                      "answer": "Incorrecto! La correcta es d."
                    },
                    {
                      "text": "La energía undimotriz se obtiene del movimiento de las olas en el océano. Tiene mucho potencial en todo el mundo, sin embargo, falta investigación sobre su obtención.",
                      "bsStyle": "danger",
                      "answer": "Incorrecto! La correcta es d."
                    },
                    {
                      "text": "El Cabo de Hornos y el Estrecho de Magallanes son ejemplos de sitios ideales para la extracción de energía mareomotriz en Chile.",
                      "bsStyle": "danger",
                      "answer": "Incorrecto! La correcta es d."
                    },
                    {
                      "text": "Todas las anteriores.",
                      "bsStyle": "success",
                      "answer": "Correcto!"
                    }
                  ]
                }
              ]}
            />
          </div>
        </Jumbotron>
      </div>
    );
  }
};
