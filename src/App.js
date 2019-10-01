import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Header</Link>
          </li>
          <li>
            <Link to='/AboutMe'>About me</Link>
          </li>
          <li>
            <Link to='/Projects'>Projects</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>

        <Switch>
          <Route path='/'>
            <Header />
          </Route>
          <Route path='/AboutMe'>
            <AboutMe />
          </Route>
          <Route path='/Projects'>
            <Projects />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
