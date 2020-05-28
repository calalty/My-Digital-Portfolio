import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Projects from './Projects'

const About = () => {
    return (
        <Router>
        <div>
        <div className='main-content'>
            {/* <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul> */}

            <div className='names'>
            <h1 className='first-name'>Callum</h1>
            <h2 className='second-name'>Alton</h2>
            </div>
            <h3 className='job-title'>Junior Software Developer</h3>
            </div>
        <div className='info'>
            <div className='about-me'><h1>About...</h1>
            <p>Born in Cheshire, I had been a student at Sandbach School for 8 years. Not knowing what i wanted to do for my future career, and studying my A-levels for a year,
                i had become increasingly disillusioned about what i wanted; after much deliberation i decided to take some time out
                to decide what i wanted to do in the future.
                I had realised that an apprenticeship with a Tech bias where i could show some creative flare would be my preffered route. I have a genuine passion for technology, and i seem to have the ability
                to pick up technical subjects quickly and run with them, this is why becoming a Software Developer has become my dream.</p></div>
        </div>
        <Link to='projects'><button className='project-button' onClick>
        <a>My Projects</a>
        </button>
        </Link>
        <Switch>
          <Route path='/projects'>
            <Projects />
            </Route>
        </Switch>
        </div>
        </Router>
    )
}


export default About