import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.getNewColors} id="reset">New Colors</button>

        <span ref={this.props.message} id="message"></span>

        <button 
          onClick={this.props.toggle} 
          className={!this.props.mode ? "mode selected" : "mode"}>
          Easy
        </button>

        <button 
          onClick={this.props.toggle} 
          className={this.props.mode ? "mode selected" : "mode"}>
          Hard
        </button>
      </React.Fragment>
    );
  }
}

export default Buttons;
