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
                <Link to="">
                  <button className="resume">Resume</button>
                </Link>
            </div>
            <div className="person">
                <img src={mypic} alt="my-pic" />
            </div>
        </div>
    )
}

export default Home
