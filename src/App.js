import React, { Component } from 'react';
import './App.css';

import Buttons from './components/Buttons';
import Squares from './components/Squares';

class App extends Component {
  constructor(props) {
    super(props);
    this.message = React.createRef();

    this.state = {
      squares: Array(6).fill(),
      squaresEasy: Array(3).fill(),
      hardMode: true,
      newColors: false
    };
  };

  getRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
  }

  getColor = () => {
    return `rgb(${this.getRandomNumber(256)}, ${this.getRandomNumber(256)}, ${this.getRandomNumber(256)})`;
  }

  resetMessage = () => {
    this.message.current.innerText = '';
    this.message.current.style.color = '';
  }

  getNewColors = () => {
    this.setState({ newColors: true });
    this.resetMessage();
  }

  toggleClass = () => {
    const currentMode = this.state.hardMode;
    this.setState({ hardMode: !currentMode });
    this.resetMessage();
  }

  render() {
    return (
      <React.Fragment>
        <div id="stripe">
          <Buttons
            mode={this.state.hardMode}
            toggle={this.toggleClass}
            getNewColors={this.getNewColors}
            message={this.message}
          />
        </div>

        <Squares 
          getColor={this.getColor} 
          squares={this.state.squares} 
          squaresEasy={this.state.squaresEasy}
          mode={this.state.hardMode}
          getRandomNumber={this.getRandomNumber}
          message={this.message}
        />
      </React.Fragment>
    );
  }
}

export default App;
