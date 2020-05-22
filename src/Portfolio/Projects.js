import React, {Component} from 'react';

class Projects extends Component { // components are CAPITLISED
    render() {// render method is used inside of Class Based components
    return (
        <div>
             <div className='main-content'>
             <ul className="circles">
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
            </ul>

            <div className='project-title'>
            <h1>Projects</h1>
            </div>
            </div>
            
            <div class="CSSgal">

  <s id="s1"></s> 
  <s id="s2"></s>
  <s id="s3"></s>
  <s id="s4"></s>

  <div class="slider">
    <div>
			<h2>Zen Garden</h2>
            <button className='view-me' onClick>View Me</button>
            </div>
    <div>
			<h2>Dice Game</h2>
            <button className='view-me' onClick>View Me</button>
            </div>
    <div>
			<h2>Cash Machine</h2>
            <button className='view-me' onClick>View Me</button>
            </div>
    <div>
			<h2>Dynamic Box Challenge</h2>
            <button className='view-me' onClick>View Me</button>
            </div>
  </div>


  <div class="bullets">
    <a href="#s1">1</a>
    <a href="#s2">2</a>
    <a href="#s3">3</a>
    <a href="#s4">4</a>
  </div>

</div>
            {/* <ul>
                <li>
                    <ProjectsList name =' Dice Game' />
                </li>
                <li>
                    <ProjectsList name =' Dynamic Box Challenge' />
                </li>
                <li>
                    <ProjectsList name =' Cash Machine' />
                </li>
                <li>
                    <ProjectsList name =' Zen Garden' />
                </li>
            </ul> */}
            </div>
    )
}
}


export default Projects