import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Avatar from '../avy2.png';

class Espanol extends Component {
    render() {
        return (
            <nav className='Menu'>
                <ul>
                    <li className='MenuNav' onClick={() => this.props.history.push('/english/aboutMe')}>
                        <img className='MenuNav' id='avy' alt='Gloria Avatar' src={Avatar} />
                        Sobre Mi
                    </li>
                    <li className='MenuNav' onClick={() => this.props.history.push('/english/projects')}>
                        Proyectos
                    </li>
                    <li className='MenuNav' onClick={() => this.props.history.push('/english/contact')}>
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