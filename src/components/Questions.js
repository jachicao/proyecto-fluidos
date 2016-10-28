// @flow
import React, { Component } from 'react';
import { Button, Modal, FormGroup } from 'react-bootstrap';
import QuestionFragment from './QuestionFragment';

export default class Questions extends Component {
  state: {
    show_modal: boolean;
    answered: boolean;
  };
  constructor(props) {
    super(props);
    this.state = {
      show_modal: false,
      answered: false,
    };
    this.onOpen = this.onOpen.bind(this);
    this.onHide = this.onHide.bind(this);
    this.onAnswer = this.onAnswer.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onOpen() {
    this.setState({ show_modal: true, answered: false });
  }

  onHide() {
    this.setState({ show_modal: false, answered: false });
  }

  onAnswer() {
    this.setState({ answered: true });
  }

  onChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="Questions">
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.onOpen}
        >
          Preguntas rápidas!
        </Button>
        <Modal show={this.state.show_modal} onHide={this.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Preguntas rápidas!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup controlId="formRadio">
              {
                this.props.questions.map((question, index) => {
                  return (
                    <QuestionFragment key={question.text} question={question} answered={true} />
                  );
                })
              }
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            {
              <Button onClick={this.onHide}>Cerrar</Button>
            }
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};
