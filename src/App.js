import React from 'react';
// npm i react-reacter dom
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './Portfolio/Portfolio.css'
import Projects from './Portfolio/Projects'
import About from './Portfolio/About'
import Employment from './Portfolio/Employment'
import Contact from './Portfolio/Contact'
import { render } from '@testing-library/react';

function App() {
  render () 
  return (
    <Router>
      <div>
        <div className = 'nav-bar'>
        <ul>
          <li>
            <Link to='/'><div className="icons8-home"></div></Link>
          </li>
          <li>
          <Link to='projects'><div className="icons8-folder"></div></Link>
          </li>
          <li>
          <Link to='employment'><div className="icons8-contacts"></div></Link>
          </li>
          <li>
          <Link to='contact'><div class="icons8-speech-bubble"></div></Link>
          </li>
        </ul>
        </div>

        <Switch>
          <Route exact path='/'>
            <About />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/employment'>
            <Employment />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          </Switch>
      </div>

    </Router>
  )
}


export default App;
