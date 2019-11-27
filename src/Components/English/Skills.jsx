import React, { Component } from 'react';
import '../CSS/Skills.css';
import English from './English';

class Skills extends Component {
    render() {
        return (
            <div id='profile' className='content'>
                <English />
                <main className='skillsContainer'>
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
                </main>
            </div>
        )
    }
}
export default Skills;