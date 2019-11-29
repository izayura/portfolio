import React, { Component } from 'react';
import '../CSS/Skills.css';
import Espanol from './Espanol';
import Landscape from '../Landscape';

class Habilidades extends Component {
    render() {
        return (
            <React.Fragment>
                <Landscape />
                <div id='skills' className='content'>
                    <Espanol />
                    <main className='skillsPage'>
                        <section className='skillsContainer'>
                            <section className='softSkills'>
                                <h3>Poderes</h3>
                                <ul>
                                    <li>Organizada</li>
                                    <li>Proactiva</li>
                                    <li>Responsable</li>
                                    <li>Aptitudes de Liderazgo</li>
                                    <li>Rápido Autoaprendizaje</li>
                                    <li>Empática</li>
                                    <li>Adaptable</li>
                                    <li>Trabajo en equipo</li>
                                </ul>
                            </section>
                            <section className='technicalSkills'>
                                <h3>Equipamiento</h3>
                                <ul>
                                    <li>Ingles B2</li>
                                    <li>JavaScript</li>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Firebase</li>
                                    <li>React</li>
                                    <li>Git/GitHub</li>
                                    <li>Metodología Agil</li>
                                    <li>Photoshop Intermedio</li>
                                </ul>
                            </section>
                        </section>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}
export default Habilidades;