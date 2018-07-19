import React from 'react';
import Header from './Header';

class Squares extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.span = React.createRef();
    this.picked = '';
    
    this.state = {
      initialColor: 'white',
    }
  }

  componentDidMount() {
    const color = this.getColorToGuess(this.container.current.children);
    this.span.current.innerText = color;
    this.picked = color;
  }

  componentDidUpdate() {
    const color = this.getColorToGuess(this.container.current.children);
    this.span.current.innerText = color;  
    this.picked = color;
  }

  getColorToGuess = (tiles) => {
    const squares = tiles;
    const randomDiv = this.props.getRandomNumber(squares.length);
    const randomRGB = squares[randomDiv].style.backgroundColor;
    return randomRGB;
  }

  handleClick = (e) => {
    if (this.picked === e.target.style.backgroundColor) {
      const squares = this.container.current.children;
      for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = this.picked;
      }
      this.props.message.current.innerText = 'Correct!';
      this.props.message.current.style.color = this.picked;
    } else {
      e.target.style.backgroundColor = this.state.initialColor;
      this.props.message.current.innerText = 'Try Again';
    }
  }

  renderSquares = () => {
    let squares;
    if (this.props.mode) {
      squares = this.props.squares.map((square, index) => 
      <div 
        style={ { backgroundColor: this.props.getColor() } }
        className="square" 
        key={index}>
      </div>)
      return squares;
    } else {
      squares = this.props.squaresEasy.map((square, index) => 
      <div 
        style={ { backgroundColor: this.props.getColor() } }
        className="square" 
        key={index}>
      </div>)
      return squares;
    }
  }

  render() {
    return (
      <React.Fragment>
        
        <Header span={this.span} />

        <div onClick={this.handleClick} ref={this.container} id="container">

          {this.renderSquares()}

        </div>
      </React.Fragment>
    );
  }
}

export default Squares;
