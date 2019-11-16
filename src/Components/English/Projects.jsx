import React, { Component } from 'react';
import '../CSS/Projects.css';
import English from './English';


class Projects extends Component {
    render() {
        return (
            <div id='projects' className='content'>
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