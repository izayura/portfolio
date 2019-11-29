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
                                <p>For over 10 years I have focused on one of my great passions: creative baking, but now I leave my comfort zone and go into the technology industry, where you can always learn something new and connect you with all world, seeking to contribute more to society and explore other ways to use my creativity. I consider myself a chocoholic from the heart, a lover of teas, to de-stress me I play video games (especially Mario Kart) and I dream of creating a rescue and adoption association of cats.</p>
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