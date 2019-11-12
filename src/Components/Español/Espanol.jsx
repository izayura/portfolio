import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Espanol extends Component {
    render() {
        return (
            <nav className='Menu'>
                <ul>
                    <li onClick={() => this.props.history.push('/')}>
                        Cambiar Idioma
                    </li>
                    <li onClick={() => this.props.history.push('/espanol/sobreMi')}>
                        Sobre Mi
                    </li>
                    <li onClick={() => this.props.history.push('/espanol/proyectos')}>
                        Proyectos
                    </li>
                    <li onClick={() => this.props.history.push('/espanol/contacto')}>
                        Contacto
                    </li>
                </ul>
                </nav>
                );
            }
            }
            
            
            
export default withRouter (Espanol);