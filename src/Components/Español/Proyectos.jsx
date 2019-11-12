import React, { Component } from 'react';
import '../CSS/Projects.css';
import Espanol from './Espanol';

class Proyectos extends Component {
    render() {
        return (
            <div id='projects' className='content'>
                <Espanol />
                <h1> Aqui irán mis proyectos</h1>
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
export default Proyectos;