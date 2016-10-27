// @flow
import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: props.videoId,
      player: null,
    };
    this.onReady = this.onReady.bind(this);
  }

  onReady(event) {
    console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
    this.setState({
      player: event.target,
    });
  }
  render() {
    return (
      <div className="VideoPlayer">
        <YouTube videoId={this.state.videoId} onReady={this.onReady} />
      </div>
    );
  }
};
