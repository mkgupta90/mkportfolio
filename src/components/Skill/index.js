import React from 'react'
import "./style.css";

const Skill = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="content">
            <div>
                <strong>Language</strong>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>NODEJS</li>
            </div>
            <div>
                <strong>Libraries</strong>
                <li>REACTJS</li>
                <li>EXPRESSJS</li>
                <li>BOOTSTRAP</li>
            </div>
            <div>
                <strong>Tools</strong>
                <li>WEBPACK</li>
                <li>GITHUB</li>
            </div>
            <div>
                <strong>Data Base</strong>
                <li>MongoDB</li>
            </div>
            </div>
        </div>
    )
}

export default Skill
