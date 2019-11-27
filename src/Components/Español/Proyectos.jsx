import React, { Component } from 'react';
import '../CSS/Projects.css';
import Espanol from './Espanol';
import ProjectsJSON from '../projectsJSON.js';

class Proyectos extends Component {
    constructor() {
        super();
        this.state = {
            JSON: ProjectsJSON.Español
        }
    }

    render() {
        return (
            <div id='projects' className='content'>
                <Espanol />
                {this.state.JSON.map(project => (
                    <section className='ProjectCard'>
                        <h1>{project.name}</h1>
                        <img src={project.image} alt={project.name} />
                        <p>{project.description}</p>
                        <a href={project.code}>Code</a>
                        <a href={project.demo}>Demo</a>
                    </section>
                ))
                }
            </div>
        )
    }
}
export default Proyectos;