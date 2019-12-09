import React, { Component } from 'react';
import '../CSS/Contact.css';
import Espanol from './Espanol';
import textoContacto from '../Images/textoContacto.png';
import LinkedIn from '../Images/linkedin.png';
import GitHub from '../Images/github.png';
import Gmail from '../Images/gmail.png';
import CV from '../Images/cv.png';
import Landscape from '../Landscape';

class Contacto extends Component {
    render() {
        return (
            <React.Fragment>
                <Landscape />
                <div id='contact' className='content'>
                    <Espanol />
                    <main className='ContactMain'>
                        <img className='textContact' alt='¿Te gustaría hablar conmigo? No seas tímido, contácteme' src={textoContacto} />
                        <section className='ContactBox'>
                            <ul>
                                <li>
                                    <a href='http://www.linkedin.com/in/gloria-rmz-robles'><img id='LinkedIn' alt='LinkedIn' src={LinkedIn} />LinkedIn</a>
                                </li>
                                <li>
                                    <a href='mailto:izayura@gmail.com'><img id='gmail' alt='Gmail' src={Gmail} />Email</a>
                                </li>
                                <li>
                                    <a href='https://github.com/izayura'><img id='github' alt='GitHub' src={GitHub} />GitHub</a>
                                </li>
                                <li>
                                    <a href="https://drive.google.com/file/d/1Z3-73Xl9RHDR2HIblfoYop_zZXF4jufX/view"><img id='cv' alt='CV' src={CV} />Mira mi CV</a>
                                </li>
                            </ul>
                        </section>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}
export default Contacto;