import React, { Component } from 'react';
import '../CSS/AboutMe.css';
import English from './English';
import Avatar from '../Images/avy.png';
import LinkedinBtn from '../Images/linkedinBtn.png';
import GithubBtn from '../Images/githubBtn.png';
import Landscape from '../Landscape';

class AboutMe extends Component {
    render() {
        return (
            <React.Fragment>
                <Landscape />
                <div id='profile' className='content'>
                    <English />
                    <main className='profile'>
                        <section className='avyContainer'>
                            <img className='avatar' alt='Gloria Avatar' src={Avatar} />
                        </section>
                        <section className='info'>
                            <section className='bio'>
                                <p>I'm a super determined woman that when I have a goal in my mind I do everything possible to achieve it. Before making a decision I analyze all the possibilities and, being convinced of what I want, I put all my efforts to make it possible. For more than 10 years I have focused on one of my great passions: baking and pastry, but now I leave my comfort zone and go into the technology industry, where you can always learn something new and connect with the world. I'm seeking to bring new ideas and creative solutions to the different challenges we have in the present. I feel very lucky to live in an era so connected, globalized and with so important technological advances, were the possibilities are enormous and our imagination is the limit. I consider myself a  chocoholic and lover of teas, cooking and playing video games relaxes me and I dream of create a cat rescue association in the future.</p>
                                <section className='buttons'>
                                    <a href='http://www.linkedin.com/in/gloria-rmz-robles'><img id='LinkedinBtn' alt='LinkedIn' src={LinkedinBtn} /></a>
                                    <a href='https://github.com/izayura'><img id='githubBtn' alt='GitHub' src={GithubBtn} /></a>
                                </section>
                            </section>
                        </section>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}
export default AboutMe;