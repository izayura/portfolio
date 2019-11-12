import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import AboutMe from './Components/English/AboutMe';
import Projects from './Components/English/Projects';
import Contact from './Components/English/Contact';
import English from './Components/English/English';
import SobreMi from './Components/Español/SobreMi';
import Proyectos from './Components/Español/Proyectos';
import Contacto from './Components/Español/Contacto';
import Espanol from './Components/Español/Espanol';

class Routes extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/english' component={English} />
                    <Route exact path='/english/aboutMe' component={AboutMe} />
                    <Route exact path='/english/projects' component={Projects} />
                    <Route exact path='/english/contact' component={Contact} />
                    <Route exact path='/espanol' component={Espanol} />
                    <Route exact path='/espanol/sobreMi' component={SobreMi} />
                    <Route exact path='/espanol/proyectos' component={Proyectos} />
                    <Route exact path='/espanol/contacto' component={Contacto} />
                    <Route exact path='/' component={Home} />
                    <Route path='*' component={() => '404 NOT FOUND'} />
                </Switch>
            </HashRouter>
        )
    }
}

export default Routes;