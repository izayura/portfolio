import React, { Component } from 'react';
import '../CSS/AboutMe.css';
import Espanol from './Espanol';
import Avatar from '../Images/avy.png';
import LinkedinBtn from '../Images/linkedinBtn.png';
import GithubBtn from '../Images/githubBtn.png';

class SobreMi extends Component {
    render() {
        return (
            <div id='profile' className='content'>
                <Espanol />
                <section className='profile'>
                    <section className='avyContainer'>
                        <img className='avatar' alt='Gloria Avatar' src={Avatar} />
                    </section>
                    <section className='info'>
                        <article className='bio'>
                            <p>Durante más de 10 años me he enfocado en una de mis grandes pasiones: la repostería creativa, pero ahora salgo de mi zona de confort e incursiono en la industria de la tecnología, donde siempre se aprende algo nuevo y puedes conectar con todo el mundo, buscando poder aportar más a la sociedad y explorar otras formas de usar mi creatividad. Me considero chocoholica de corazón, amante de los tés, para desestresarme juego videojuegos(en especial Mario Kart) y sueño con crear una asociación de rescate y adopción de gatos. </p>
                            <article className='buttons'>
                                <a href='http://www.linkedin.com/in/gloria-rmz-robles'><img id='LinkedinBtn' alt='LinkedIn' src={LinkedinBtn} /></a>
                                <a href='https://github.com/izayura'><img id='githubBtn' alt='GitHub' src={GithubBtn} /></a>
                            </article>
                        </article>
                    </section>
                </section>
            </div >
        )
    }
}
export default SobreMi;