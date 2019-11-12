import React, { Component } from 'react';
import './AboutMe.css';
import Espanol from './Espanol';

class SobreMi extends Component {
    render() {
        return (
            <div className="profile">
                <Espanol />
                <h1> Aquí irá mi perfil</h1>
                <h2>Durante más de 10 años me he enfocado en una de mis grandes pasiones: la repostería creativa, pero ahora salgo de mi zona de confort e incursiono en la industria de la tecnología, donde siempre se aprende algo nuevo y puedes conectar con todo el mundo, buscando poder aportar más a la sociedad y explorar otras formas de usar mi creatividad. </h2>
                <h3>Lista de habilidades blandas</h3>
                <h3>Lista de herramientas</h3>
            </div>
        )
    }
}
export default SobreMi;