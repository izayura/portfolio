import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import English from './Components/English';
import SobreMi from './Components/SobreMi';
import Proyectos from './Components/Proyectos';
import Contacto from './Components/Contacto';
import Espanol from './Components/Espanol';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
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
            </BrowserRouter>
        )
    }
}

export default Routes;