import React, { Component } from 'react';
import '../CSS/AboutMe.css';
import English from './English';
import Avatar from '../avy2.png';

class AboutMe extends Component {
    render() {
        return (
            <div id='profile' className='content'>
                <English />
                <main className='profile'>
                    <aside>
                    <img className='avatar' alt='Gloria Avatar' src={Avatar} />
                    </aside>
                    <aside className='info'>
                    <section className='bio'>
                    <p>For over 10 years I have focused on one of my great passions: creative baking, but now I leave my comfort zone and go into the technology industry, where you can always learn something new and connect you with all world, seeking to contribute more to society and explore other ways to use my creativity. I consider myself a chocoholic from the heart, a lover of teas, to de-stress me I play video games (especially Mario Kart) and I dream of creating a rescue and adoption association of cats.</p>
                    </section>
                    <section className='softSkills'>
                    <h3>Power Ups</h3>
                    <ul>
                        <li>Organized</li>
                        <li>Proactive</li>
                        <li>Responsable</li>
                        <li>Leadership Skills</li>
                        <li>Fast Self-Learning</li>
                        <li>Empathic</li>
                        <li>Adaptable</li>
                        <li>Teamwork</li>
                    </ul>
                    </section>
                    <section className='technicalSkills'>
                    <h3>Equipment</h3>
                    <ul>
                        <li>English B2</li>
                        <li>JavaScript</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Firebase</li>
                        <li>React</li>
                        <li>Git</li>
                        <li>Agile Methodology</li>
                        <li>Photoshop</li>
                    </ul>
                    </section>
                    </aside>
                </main>
            </div>
        )
    }
}
export default AboutMe;