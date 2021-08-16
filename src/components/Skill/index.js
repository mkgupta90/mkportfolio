import React from 'react'
import "./style.css";

const Skill = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="content">
            <div>
                <strong>Web FrameWork</strong>
                <li>MICROSOFT ASP.NET</li>
                <li>ASP.NET MVC</li>                       
            </div>
            <div>
                <strong>Language</strong>
                <li>C#</li>
                <li>JAVASCRIPT</li>
                <li>HTML</li>
                <li>CSS</li>                         
            </div>
            <div>
                <strong>Libraries</strong>
                <li>JQUERY</li>
                {/* <li>REACTJS</li>
                <li>EXPRESSJS</li> */}
                <li>BOOTSTRAP</li>
            </div>
            {/* <div>
                <strong>Tools</strong>
                <li>WEBPACK</li>
                <li>GITHUB</li>
            </div> */}
            <div>
                <strong>Data Base</strong>
                {/* <li>MongoDB</li> */}
                <li>Sql(Structured Query Language)</li>
                <li>Sql Server</li>
            </div>
            </div>
        </div>
    )
}

export default Skill
