// @flow
import React, { Component } from 'react';
import { Jumbotron, Image, Button, Modal, FormGroup, ControlLabel, FormControl, Radio, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Energy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      answered: false,
      correct: false
    };
    this.questionsOnOpen = this.questionsOnOpen.bind(this);
    this.questionsOnHide = this.questionsOnHide.bind(this);
    this.questionsOnAnswer = this.questionsOnAnswer.bind(this);
  }


  questionsOnOpen() {
    this.setState({ showModal: true, answered: false });
  }

  questionsOnHide() {
    this.setState({ showModal: false, answered: false });
  }

  questionsOnAnswer() {
    this.setState({ answered: true });
  }

  render() {
    return (
      <div className="Energy">
        <Jumbotron>
          <h1>
            ¿Que es la energía?
          </h1>
          <p>
            El hombre, desde su existencia, ha necesitado la energía para sobrevivir.
            Pero… ¿qué es? ¿Por qué tiene tanta importancia la energía?
            La energía es la capacidad de hacer funcionar las cosas.
            Por ejemplo, cuando enciendes la televisión, esta necesita energía para poder funcionar.
            Tú para levantarte todas las mañanas e ir al colegio, necesitas de tu desayuno, o sea, comida, para que tu cuerpo funcione en la mañana.
            O sea, la energía es lo que nos permite funcionar, y no sólo a nosotros, si no a todas las cosas.
            La energía es lo que mueve el mundo.
          </p>
          <Image src="../images/Energy1.png" rounded />
          <p>
            Hay distintas formas de energía, primero, la energía es luz: energía luminosa.
            La luz, es la energía que utilizamos para ver, y es proporcionada en su mayoría por el sol.
            Cuando el sol no está, o sea en la noche, fabricamos nuestra propia luz a través de la electricidad, y son las luces que alumbran nuestras casas, con las ampolletas, lámparas, etc.
          </p>
          <Image src="../images/Energy2.png" rounded />
          <p>
            segundo, la energía hace crecer: energía química.
            Todos los seres vivos necesitamos energía para crecer.
            Por ejemplo, las plantas utilizan la luz solar para crecer, transformando esta energía en azúcar para así poder llevarla a sus raíces y hojas y ser almacenadas.
          </p>
          <Image src="../images/Energy3.png" rounded />
          <p>
            tercero, la energía es calor: energía térmica.
            La energía se utiliza para producir calor.
            Por ejemplo, después de hacer ejercicio sentimos calor.
            Cuando encendemos una estufa para calentar nuestro hogar utilizamos ya sea electricidad o gas natural.
          </p>
          <Image src="../images/Energy4.png" rounded />
          <p>
            cuarto, la energía mueve cosas: energía mecánica.
            Utilizamos energía para que las cosas se muevan.
            Por ejemplo, los autos se mueven gracias a la energía guardada en la bencina.
            Muchos juguetes se mueven y funcionan gracias a las pilas o baterías que tienen.
            Nosotros para poder movernos y funcionar, necesitamos de nuestros alimentos (nuestra propia fuente de energía)
          </p>
          <Image src="../images/Energy5.png" rounded />
          <p>
            quinto, la energía en máquinas: energía eléctrica.
            Esta es la energía que necesita la televisión, el computador, video-juegos para poder funcionar.
          </p>
          <Image src="../images/Energy6.png" rounded />
          <p>
            En resumen, nosotros utilizamos la electricidad para poder fabricar la luz que usamos en la noche, para hacer funcionar nuestros implementos, para mantener el calor en nuestros hogares, etc.
            Pero…
            ¿De dónde fabricamos la electricidad?
            La electricidad puede venir de fuentes como el sol, el viento, el agua, el calor interior de la tierra, y también, de centrales eléctricas a través de la quema de carbón, petróleo, gas natural, o a través de minerales radioactivos como el uranio.
          </p>
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.questionsOnOpen}
          >
            Preguntas!
          </Button>
          <Modal show={this.state.showModal} onHide={this.questionsOnHide}>
            <Modal.Header closeButton>
              <Modal.Title>Preguntas!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>
                  La energía que utilizamos para calefaccionar nuestras casas, que tipo de energía es?
                </ControlLabel>
                <FormGroup>
                  <Radio inline name="anynum">
                    Energía mecánica
                  </Radio>
                  {' '}
                  <Radio inline name="anynum">
                    Energía termica
                  </Radio>
                  {' '}
                  <Radio inline name="anynum">
                    Energía eléctrica
                  </Radio>
                </FormGroup>
              </FormGroup>
              {
                this.state.answered
                  ?
                    this.state.correct
                      ? <ListGroupItem bsStyle="success">Correcto! es la energía térmica</ListGroupItem>
                      : <ListGroupItem bsStyle="danger">Incorrecto, es la energía térmica. Recuerda que ésta es la energía que nos entrega calor.</ListGroupItem>
                  : <Button onClick={this.questionsOnAnswer}>Enviar</Button>
              }
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.questionsOnHide}>Cerrar</Button>
            </Modal.Footer>
          </Modal>
        </Jumbotron>
      </div>
    );
  }
};
