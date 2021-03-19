import facebook from '../../asserts/Icons/facebook.png';
import github from '../../asserts/Icons/github.png';
import instagram from '../../asserts/Icons/instagram.png';
import linkedin from '../../asserts/Icons/linkedin.png';
import twitter from '../../asserts/Icons/twitter.png';
import './style.css';


const Footer = () => {
    return (
        <footer> 
            <h4> Also, Contact Me With</h4>
                <a href="https://www.facebook.com/munnakumar9050/">
                    <img src={facebook} alt="facebook-icon" />
                </a> 
                <a href="https://www.instagram.com/mk.gupta.9050/">
                    <img src={instagram} alt="instagram-icon" />
                </a>        
                <a href="https://github.com/mkgupta90">
                    <img src={github} alt="github-icon" />
                </a> 
                <a href="https://www.linkedin.com/in/munna-kumar-3a9b90187/">
                    <img src={linkedin} alt="linkedin-icon" />
                </a> 
                <a href="https://twitter.com/mkgupta9050">
                    <img src={twitter} alt="twitter-icon" />
                </a>
        </footer>
    )
}

export default Footer;

