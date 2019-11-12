import React, { Component } from 'react';
import './Projects.css';
import English from './English';

class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <English />
                <h1> Here will be my projects </h1>
            <ul>
                <li>Burger Queen</li>
                <li>Selectivo</li>
                <li>CheckIn-love(?)</li>
                <li>Social Network(?)</li>
                <li>Lab Notes(?)</li>
            </ul>
            </div>
        )
    }
}
export default Projects;