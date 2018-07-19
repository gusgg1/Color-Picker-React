import React from 'react';

const Header = (props) => {
  return (
    <h1>
      Color Picker
      <br/>
      <span ref={props.span} id="colorDisplay"></span> 
      <br/>
      Game
    </h1>
  );
};

export default Header;