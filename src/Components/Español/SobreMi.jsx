import React, { Component } from 'react';
import '../CSS/AboutMe.css';
import Espanol from './Espanol';
import Avatar from '../Images/avy.png';
import LinkedinBtn from '../Images/linkedinBtn.png';
import GithubBtn from '../Images/githubBtn.png';
import Landscape from '../Landscape';

class SobreMi extends Component {
    render() {
        return (
            <React.Fragment>
                <Landscape />
                <div id='profile' className='content'>
                    <Espanol />
                    <section className='profile'>
                        <section className='avyContainer'>
                            <img className='avatar' alt='Gloria Avatar' src={Avatar} />
                        </section>
                        <section className='info'>
                            <article className='bio'>
                                <p>Soy una mujer super decidida que al tener un objetivo en la mira hago todo lo posible para lograrlo. Antes de tomar una decisión analizo todas las posibilidades y al estar convencida de lo que quiero oriento mis esfuerzos a esa decisión tomada. Durante más de 10 años me he enfocado en una de mis grandes pasiones: la repostería creativa, pero ahora salgo de mi zona de confort e incursiono en la industria de la tecnología, donde siempre estas aprendiendo algo nuevo y puedes conectar con todo el mundo. Busco poder aportar ideas nuevas y soluciones creativas para los distintos retos que se plantean en la actualidad. Me siento muy afortunada de vivir en una era tan conectada,globalizada y de avances tecnológicos tan importantes, donde las posibilidades son enormes y nuestra imaginación es el límite. Me considero una chocoholica de corazón y amante de los tés, cocinar y jugar videojuegos me relaja y sueño con crear una asociación de rescate de gatos en el futuro. </p>
                                <article className='buttons'>
                                    <a href='http://www.linkedin.com/in/gloria-rmz-robles'><img id='LinkedinBtn' alt='LinkedIn' src={LinkedinBtn} /></a>
                                    <a href='https://github.com/izayura'><img id='githubBtn' alt='GitHub' src={GithubBtn} /></a>
                                </article>
                            </article>
                        </section>
                    </section>
                </div >
            </React.Fragment>
        )
    }
}
export default SobreMi;