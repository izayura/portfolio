import React, { Component } from 'react';
import '../CSS/Projects.css';
import Espanol from './Espanol';
import ProjectsJSON from '../projectsJSON.js';
import Code from '../Images/codeBtn.png';
import Demo from '../Images/demoBtn.png';
import Landscape from '../Landscape';

class Proyectos extends Component {
    constructor() {
        super();
        this.state = {
            JSON: ProjectsJSON.Español
        }
    }

    render() {
        return (
            <React.Fragment>
                <Landscape />
                <div id='projects' className='content'>
                    <Espanol />
                    {this.state.JSON.map(project => (
                        <section className='ProjectCard'>
                            <section className='ImageCard'>
                                <img src={project.image} alt={project.name} />
                            </section>
                            <section className='BodyCard'>
                                <h1>{project.name}</h1>
                                <p>{project.description}</p>
                                <section className='BtnContainer'>
                                    <a href={project.code}><img className='ProjectBtn' alt='Code' src={Code} /></a>
                                    <a href={project.demo}><img className='ProjectBtn' alt='Demo' src={Demo} /></a>
                                </section>
                            </section>
                        </section>
                    ))
                    }
                </div>
            </React.Fragment>
        )
    }
}
export default Proyectos;