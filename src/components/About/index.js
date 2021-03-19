import React from 'react';
import {Link} from 'react-router-dom'
import "./style.css";

const About = () => {
    return (
        <div className="about">
            <h1>Bio</h1>
            <p className="span">
             I am Munna Kumar and I am a Reactjs Web Developer. 
             I have completed my <span>BCA</span> from <span>IGNOU</span> University.
            </p>
            <p>
            Now Im Looking for a <span>job</span> on <span>React Web Developer </span>
            or <span>MERN Full Stack Developer</span>
            </p>
            <p>I'm a Good Learner</p>

            <Link to="/contact">
              <button className="button">Hire Me</button>
            </Link>            
        </div>
    )
}

export default About
