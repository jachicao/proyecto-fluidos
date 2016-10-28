// @flow
import React, { Component } from 'react';
import { ControlLabel, ListGroupItem } from 'react-bootstrap';

export default class QuestionFragment extends Component {
constructor(props) {
  super(props);
    this.state = {
      selected: -1,
      question: props.question,
      answered: props.answered,
      alternativeSelected: null,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ selected: event.target.value })
    this.state.question.alternatives.forEach((alternative, index) => {
      if (index == event.target.value) {
        this.setState({ alternativeSelected: alternative });
      }
    });
  }

  render() {
    return (
      <div className="QuestionFragment" key={this.state.question.text}>
        <ControlLabel>
          {this.state.question.text}
        </ControlLabel>
        {
          this.state.question.alternatives.map((alternative, index) => {
            return(
              <div className="radio" key={alternative.text}>
                <label>
                  <input
                    type="radio"
                    value={index}
                    name={this.state.question.text}
                    onChange={this.onChange}
                    />
                  {alternative.text}
                </label>
              </div>
            );
          })
        }
        {
          (this.state.alternativeSelected && this.state.answered) &&
            <ListGroupItem bsStyle={this.state.alternativeSelected.bsStyle}>{this.state.alternativeSelected.answer}</ListGroupItem>
        }
      </div>
    );
  }
}
