// @flow
import React, { Component } from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import Image1 from '../../images/Energy1.png';
import Image2 from '../../images/Energy2.png';
import Image3 from '../../images/Energy3.png';
import Image4 from '../../images/Energy4.png';
import Image5 from '../../images/Energy5.png';
import Image6 from '../../images/Energy6.png';
import Question from '../Question';

var imageStyle = {
  margin: '0 auto'
};

export default class Energy extends Component {
  render() {
    return (
      <div className="Energy">
        <Jumbotron>
          <div className="container">
            <h1>
              ¿Que es la energía?
            </h1>
            <p className="text-justify">
              El hombre, desde su existencia, ha necesitado la energía para sobrevivir.
              Pero… ¿qué es? ¿Por qué tiene tanta importancia la energía?
              La energía es la capacidad de hacer funcionar las cosas.
              Por ejemplo, cuando enciendes la televisión, esta necesita energía para poder funcionar.
              Tú para levantarte todas las mañanas e ir al colegio, necesitas de tu desayuno, o sea, comida, para que tu cuerpo funcione en la mañana.
              O sea, la energía es lo que nos permite funcionar, y no sólo a nosotros, si no a todas las cosas.
              La energía es lo que mueve el mundo.
            </p>
            <Image src={Image1} rounded responsive style={imageStyle} />
            <p className="text-justify">
              Hay distintas formas de energía, primero, la energía es luz: energía luminosa.
              La luz, es la energía que utilizamos para ver, y es proporcionada en su mayoría por el sol.
              Cuando el sol no está, o sea en la noche, fabricamos nuestra propia luz a través de la electricidad, y son las luces que alumbran nuestras casas, con las ampolletas, lámparas, etc.
            </p>
            <Image src={Image2} rounded responsive style={imageStyle} />
            <p className="text-justify">
              segundo, la energía hace crecer: energía química.
              Todos los seres vivos necesitamos energía para crecer.
              Por ejemplo, las plantas utilizan la luz solar para crecer, transformando esta energía en azúcar para así poder llevarla a sus raíces y hojas y ser almacenadas.
            </p>
            <Image src={Image3} rounded responsive style={imageStyle} />
            <p className="text-justify">
              tercero, la energía es calor: energía térmica.
              La energía se utiliza para producir calor.
              Por ejemplo, después de hacer ejercicio sentimos calor.
              Cuando encendemos una estufa para calentar nuestro hogar utilizamos ya sea electricidad o gas natural.
            </p>
            <Image src={Image4} rounded responsive style={imageStyle} />
            <p className="text-justify">
              cuarto, la energía mueve cosas: energía mecánica.
              Utilizamos energía para que las cosas se muevan.
              Por ejemplo, los autos se mueven gracias a la energía guardada en la bencina.
              Muchos juguetes se mueven y funcionan gracias a las pilas o baterías que tienen.
              Nosotros para poder movernos y funcionar, necesitamos de nuestros alimentos (nuestra propia fuente de energía)
            </p>
            <Image src={Image5} rounded responsive style={imageStyle}/>
            <p className="text-justify">
              quinto, la energía en máquinas: energía eléctrica.
              Esta es la energía que necesita la televisión, el computador, video-juegos para poder funcionar.
            </p>
            <Image src={Image6} rounded responsive style={imageStyle}/>
            <p className="text-justify">
              En resumen, nosotros utilizamos la electricidad para poder fabricar la luz que usamos en la noche, para hacer funcionar nuestros implementos, para mantener el calor en nuestros hogares, etc.
              Pero…
              ¿De dónde fabricamos la electricidad?
              La electricidad puede venir de fuentes como el sol, el viento, el agua, el calor interior de la tierra, y también, de centrales eléctricas a través de la quema de carbón, petróleo, gas natural, o a través de minerales radioactivos como el uranio.
            </p>
            <Question
              question={"La energía que utilizamos para calefaccionar nuestras casas, ¿Qué tipo de energía es?"}
              alternatives={["Energía mecánica", "Energía térmica", "Energía eléctrica"]}
              correct_answer={1}
              correct_answer_text={"Correcto! es la energía térmica"}
              incorrect_answer_text={"Incorrecto! es la energía térmica. Recuerda que ésta es la energía que nos entrega calor."}
              />
            </div>
        </Jumbotron>
      </div>
    );
  }
};
