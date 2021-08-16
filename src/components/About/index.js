import React from 'react';
import {Link} from 'react-router-dom'
import "./style.css";

const About = () => {
    return (
        <div className="about">
            <h1>Bio</h1>
            <p className="span">
             I am Munna Kumar and I am a .Net Developer. 
             I have completed my <span>BCA</span> from <span>IGNOU</span> University.
            </p>
            <p>
            Now Im Looking for a <span>job</span> on <span>.Net Developer </span>
            {/* or <span>MERN Full Stack Developer</span> */}
            </p>
            <p>I'm a Good Learner</p>
            <br/>

            <h2 style={{color:'purple'}}>I have done 6 months project based training in asp.net, mvc, jquery, entity framework 
                and sql server under the guidence of Mr. Alok Srivastava Sir (9911522747)</h2>

            <Link to="/contact">
              <button className="button">Hire Me</button>
            </Link>            
        </div>
    )
}

export default About
