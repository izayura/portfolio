import React, { Component } from 'react';
import '../CSS/Contact.css';
import English from './English';
import textContact from '../Images/textContact.png';
import LinkedIn from '../Images/linkedin.png';
import GitHub from '../Images/github.png';
import Gmail from '../Images/gmail.png';
import CV from '../Images/cv.png';
import Landscape from '../Landscape';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Landscape />
                <div id='contact' className='content'>
                    <English />
                    <main className='ContactMain'>
                        <img className='textContact' alt="Would you like to talk to me? Don't be shy and contact me" src={textContact} />
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
                                    <a href="https://drive.google.com/file/d/16Nc50nZVEi84pvztL7KYZ5yWU4oN-4gC/view"><img id='cv' alt='CV' src={CV} />Look my CV</a>
                                </li>
                            </ul>
                        </section>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}
export default Contact;