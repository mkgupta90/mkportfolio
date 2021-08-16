import './style.css';
import { Link } from "react-router-dom";
import mypic from '../../asserts/Images/mypic.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi,</p>
                    <p>I am Munna Kumar</p>
                    <p>Software Developer</p>
                </h1>
                <Link to="/about">
                  <button>More Info</button>
                </Link>
                {/* <a href="https://github.com/mkgupta90/resume/blob/master/Resume_Munna_Reactjs.pdf">
                  <button className="resume">Download Resume</button>
                </a> */}
            </div>
            <div className="person">
                <img src={mypic} alt="my-pic" />
            </div>
        </div>
    )
}

export default Home
