import React, { Component } from 'react';

export default class DelayedButton extends Component {
  
  handleMouseClick = (event) => {
    const eventTarget =  event.target
    const this2 = this
    setTimeout(function(){ this2.props.onDelayedClick(eventTarget.type) }, this.props.delay)
  }

  
  
  render() {
    return (
      <button onClick={this.handleMouseClick}>DelayedButton</button>
    )
  }
  
}