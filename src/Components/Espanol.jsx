import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Espanol extends Component {
    render() {
        return (
            <div className='Menu'>
                <ul>
                    <li onClick={() => this.props.history.push('/')}>
                        Cambiar Idioma
                    </li>
                    <li onClick={() => this.props.history.push('/espanol')}>
                        Inicio
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
                <hr className="line" />
                </div>
                );
            }
            }
            
            
            
export default withRouter (Espanol);