// @flow
import React, { Component } from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import Image1 from '../../images/SourceEnergy1.png';
import Image2 from '../../images/SourceEnergy2.png';
import Image3 from '../../images/SourceEnergy3.png';
import Image4 from '../../images/SourceEnergy4.png';
import Question from '../Question';
import VideoPlayer from '../VideoPlayer';

export default class SourceEnergy extends Component {
  render() {
    return (
      <div className="SourceEnergy">
        <Jumbotron>
          <div className="container">
            <h1>
              Fuentes de energía
            </h1>
            <p className="text-justify">
              Se pueden clasificar en dos grupos:
            </p>
            <p className="text-justify">
              Energías no renovables: se consumen más rápido de lo que se producen.
              O sea, las gastamos más rápido de lo que las producimos y por lo tanto, se terminan agotando (acabando).
              Ejemplos: carbón, petróleo
            </p>
            <Image src={Image1} rounded responsive  />
            <p className="text-justify">
              Energías renovables: se regeneran a un ritmo igual o mayor que al que se consumen, o sea, no se agotan.
              Ejemplos: energía del sol, del viento.
            </p>
            <Image src={Image2} rounded responsive  />
            <Question
              question={"Cuál es la principal diferencia entre las fuentes de energías renovables y no renovables?"}
              alternatives={[
                  "Las fuentes de energía renovable se agotan, y las no renovables no se agotan.",
                  "Las fuentes de energía renovable no se agotan, y las no renovables si se agotan",
                  "No tienen diferencia"
              ]}
              correct_answer={1}
              correct_answer_text={"Correcto!"}
              incorrect_answer_text={"Incorrecto! Recuerda que las RENOVABLES se renuevan, o sea, no se agotan, y las no renovables NO se renuevan, o sea, se agotan."}
              />
          </div>
        </Jumbotron>
        <Jumbotron>
          <div className="container">
            <h1>
              Más detalles
            </h1>
            <p className="text-justify">
              Veremos primeros las fuentes de energías no renovables:
            </p>
            <p className="text-justify">
              Como dijimos anteriormente, estas son las que se encuentran en una cantidad limitada en el planeta, y con su uso, las vamos agotando.
              Estas fuentes son el carbón, el petróleo, el gas natural y los minerales radioactivos. Además del problema de que estas fuentes se están acabando, su uso para producir energía trae altos niveles de contaminación para nuestro mundo.
            </p>
            <p className="text-justify">
              Ahora, las fuentes de energía renovable:
            </p>
            <p className="text-justify">
              Todos los elementos de la naturaleza que nos pueden proporcionar energía son considerados como fuentes de energía renovable.
              Como ya mencionamos anteriormente, las más típicas son el sol, el viento, el agua y la biomasa.
            </p>
            <p className="text-justify">
              Nos concentraremos en la obtención de energía a partir del agua.
            </p>
            <p className="text-justify">
              Una de las formas de obtener energía a partir del agua, es con Hidroeléctricas.
              Las centrales Hidroeléctricas aprovechan la energía del agua que proviene de un cauce natural, que lleva agua (por ejemplo, un río), que presenta un desnivel, o sea, hay una parte del agua que se encuentra más arriba que resto, y al caer, produce energía que la hidroeléctrica convierte en electricidad.
            </p>
            <Image src={Image3} rounded responsive  />
            <p className="text-justify">
              Otra forma de obtener energía a partir del agua es a través del mar.
              Las olas del mar llevan mucha energía que puede ser aprovechada para producir energía.
            </p>
            <Image src={Image4} rounded responsive  />
            <p className="text-justify">
              En estas centrales se utiliza un instrumento por el cual el agua pasa, le entrega su energía y este la convierte en lo que necesitamos.
              Este instrumento es la turbina.
            </p>
            <h2>
              Videos
            </h2>
            <VideoPlayer videoId='oYqduhNY6QM'/>
            <Question
              question={"Cuáles son fuentes de energía renovable?"}
              alternatives={[
                  "Sol",
                  "Viento",
                  "Agua",
                  "Todas las anteriores"
              ]}
              correct_answer={3}
              correct_answer_text={"Correcto!"}
              incorrect_answer_text={"Es correcto, pero las otras también corresponden a energías renovables."}
              />
          </div>
        </Jumbotron>
      </div>
    );
  }
}
