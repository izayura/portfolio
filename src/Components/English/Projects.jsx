import React, { Component } from 'react';
import '../CSS/Projects.css';
import English from './English';
import ProjectsJSON from '../projectsJSON.js';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            JSON: ProjectsJSON.English
        }
    }

    render() {
        return (
            <div id='projects' className='content'>
                <English />
                {this.state.JSON.map(project => (
                    <section className='ProjectCard'>
                        <section className='ImageCard'>
                            <img src={project.image} alt={project.name} />
                        </section>
                        <section className='BodyCard'>
                            <h1>{project.name}</h1>
                            <p>{project.description}</p>
                            <a href={project.code}>Code</a>
                            <a href={project.demo}>Demo</a>
                        </section>
                    </section>
                ))
                }
            </div>
        )
    }
}
export default Projects;