// @flow
import React, { Component } from 'react';
import { Button, Modal, FormGroup, ControlLabel, Alert } from 'react-bootstrap';

export default class Question extends Component {
  state: {
    show_modal: boolean;
    answered: boolean;
    correct: boolean;
    current_answer: number;
  };
  constructor(props) {
    super(props);
    this.state = {
      show_modal: false,
      answered: false,
      correct: false,
      current_answer: -1
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
    if (this.state.current_answer > -1) {
      this.setState({ answered: true, correct: this.props.correct_answer == this.state.current_answer });
    } else {
      this.setState({ answered: false, correct: false });
    }
  }

  onChange(event) {
    this.setState({ current_answer: event.target.value });
  }

  render() {
    return (
      <div className="Question">
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.onOpen}
        >
          Pregunta rápida!
        </Button>
        <Modal show={this.state.show_modal} onHide={this.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Pregunta rápida!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup controlId="formRadio">
              <ControlLabel>
                {this.props.question}
              </ControlLabel>
              {
                this.props.alternatives.map((alternative, index) => {
                  return (
                    <div className="radio" key={alternative}>
                      <label>
                        <input
                          type="radio"
                          value={index}
                          name="anynum"
                          onChange={this.onChange}
                        />
                        {alternative}
                      </label>
                    </div>
                  );
                })
              }
            </FormGroup>
            {
              this.state.answered
                &&
                  (this.state.correct
                    ? <Alert bsStyle="success">{this.props.correct_answer_text}</Alert>
                    : <Alert bsStyle="danger">{this.props.incorrect_answer_text}</Alert>
                  )
            }
          </Modal.Body>
          <Modal.Footer>
            {
              !this.state.answered
                ? <Button onClick={this.onAnswer}>Enviar</Button>
                : <Button onClick={this.onHide}>Cerrar</Button>
            }
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};
