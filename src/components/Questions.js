// @flow
import React, { Component } from 'react';
import { Button, Modal, FormGroup, ControlLabel, ListGroupItem, Alert } from 'react-bootstrap';

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
      answers: []
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
    /*
    if (this.state.current_answer > -1) {
      this.setState({ answered: true, correct: this.props.correct_answer == this.state.current_answer });
    } else {
      this.setState({ answered: false, correct: false });
    }
    */
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
                    <div key={question.text}>
                      <ControlLabel>
                        {question.text}
                      </ControlLabel>
                      {
                        question.alternatives.map((alternative, index2) => {
                          return(
                            <div className="radio" key={alternative.text}>
                              <label>
                              <input
                                type="radio"
                                value={index + "," + index2}
                                name="anynum"
                                onChange={this.onChange}
                                />
                                {alternative.text}
                                </label>
                            </div>
                          );
                        })
                      }
                    </div>
                  );
                })
              }
            </FormGroup>
            <div>
              {
                this.state.answered
                  &&
                    (this.state.correct
                      ? <Alert bsStyle="success">{this.props.correct_answer_text}</Alert>
                      : <Alert bsStyle="danger">{this.props.incorrect_answer_text}</Alert>
                    )
              }
            </div>
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
