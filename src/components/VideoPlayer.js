// @flow
import React, { Component } from 'react';

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: props.videoId,
    };
  }
  render() {
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + this.state.videoId}></iframe>
      </div>
    );
  }
};
