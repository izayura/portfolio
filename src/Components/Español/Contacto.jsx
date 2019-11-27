import React,{Component} from 'react';
import '../CSS/Contact.css';
import Espanol from './Espanol';
import textoContacto from '../Images/textoContacto.png';
import LinkedIn from '../Images/linkedin.png';
import GitHub from '../Images/github.png';
import Gmail from '../Images/gmail.png';

class Contacto extends Component {
    render() {
        return (
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
                                <a href='mailto:izayura@gmail.com'><img id='gmail' alt='Gmail' src={Gmail} />izayura@gmail.com </a>
                            </li>
                            <li>
                                <a href='https://github.com/izayura'><img id='github' alt='GitHub' src={GitHub} />GitHub</a>
                            </li>
                        </ul>
                    </section>
                </main>
            </div>

        )
    }
}
export default Contacto;