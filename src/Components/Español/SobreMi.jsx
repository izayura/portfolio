import React, { Component } from 'react';
import '../CSS/AboutMe.css';
import Espanol from './Espanol';
import Avatar from '../avy2.png';
import LinkedinBtn from '../linkedinBtn.png';
import GithubBtn from '../githubBtn.png';

class SobreMi extends Component {
    render() {
        return (
            <div id='profile' className='content'>
                <Espanol />
                <main className='profile'>
                    <aside>
                        <img className='avatar' alt='Gloria Avatar' src={Avatar} />
                    </aside>
                    <aside className='info'>
                        <section className='bio'>
                            <p>Durante más de 10 años me he enfocado en una de mis grandes pasiones: la repostería creativa, pero ahora salgo de mi zona de confort e incursiono en la industria de la tecnología, donde siempre se aprende algo nuevo y puedes conectar con todo el mundo, buscando poder aportar más a la sociedad y explorar otras formas de usar mi creatividad. Me considero chocoholica de corazón, amante de los tés, para desestresarme juego videojuegos(en especial Mario Kart) y sueño con crear una asociación de rescate y adopción de gatos. </p>
                            <section className='buttons'>
                                <a href='http://www.linkedin.com/in/gloria-rmz-robles'><img id='LinkedinBtn' alt='LinkedIn' src={LinkedinBtn} /></a>
                                <a href='https://github.com/izayura'><img id='githubBtn' alt='GitHub' src={GithubBtn} /></a>
                            </section>
                        </section>
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
                                <li>Git</li>
                                <li>Metodología Agil</li>
                                <li>Photoshop Intermedio</li>
                            </ul>
                        </section>
                    </aside>
                </main>
            </div >
        )
    }
}
export default SobreMi;