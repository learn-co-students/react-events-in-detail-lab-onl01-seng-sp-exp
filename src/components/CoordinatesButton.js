import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  
  handleMouseClick = (event) => {
    const coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }
  
  render() {
    return (
      <button onClick={this.handleMouseClick}>CoorDs
      </button>
    )
  }
}
