import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Avatar from '../Images/avy.png';

class Espanol extends Component {
    render() {
        return (
            <nav className='Menu'>
                <ul>
                    <li className='MenuNav' onClick={() => this.props.history.push('/espanol/sobreMi')}>
                        <img className='MenuNav' id='avy' alt='Gloria Avatar' src={Avatar} />
                        Sobre Mi
                    </li>
                    <li className='MenuNav' onClick={() => this.props.history.push('/espanol/proyectos')}>
                        Proyectos
                    </li>
                    <li className='MenuNav' onClick={() => this.props.history.push('/espanol/contacto')}>
                        Contacto
                    </li>
                    <li className='MenuNav' onClick={() => this.props.history.push('/')}>
                        Cambiar_Idioma
                    </li>
                </ul>
            </nav>
        );
    }
}



export default withRouter(Espanol);