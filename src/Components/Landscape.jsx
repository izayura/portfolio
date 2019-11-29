import React, { Component } from 'react';
import Rotate from './Images/rotate.gif';

class Landscape extends Component {
  render() {
    return (
        <img id='Alert' alt='Por favor, coloca tu dispositivo en horizontal' src={Rotate} />
    );
  }
}

export default Landscape;