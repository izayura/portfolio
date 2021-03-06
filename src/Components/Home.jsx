import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Components/CSS/Home.css';
import Name from './Images/name.png';
import English from './Images/englishBtn.png';
import Espanol from './Images/espanolBtn.png';
import Select from './Images/select.png';
import Landscape from './Landscape';

class Home extends Component {
  render() {
    return (
      <div id='Background'>
        <Landscape />
        <div className="Home">
          <img id='Name' alt='Gloria Ramirez' src={Name} />
          <img id='Select' alt='Select your language' src={Select} />
          <div id='Language'>
            <img className='btnLanguage' alt='English' src={English}
              onClick={() => this.props.history.push('/english/aboutMe')} />
            <img className='btnLanguage' alt='Español' src={Espanol}
              onClick={() => this.props.history.push('/espanol/sobreMi')} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);