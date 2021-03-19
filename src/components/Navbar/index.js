import "./style.css";
import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom';
import logo from '../../asserts/Icons/logo.png';
import hamburger from '../../asserts/Icons/hamburger.png';
import cross from '../../asserts/Icons/cross.png';

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [screenWidth, setScreenWidth] =useState(0);
    const location = useLocation();

    const windowScreen = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if(width > 800) {
            setOpen(true);
        }
    }

    const closeCross = () => {
        if(screenWidth < 800) {
            setOpen(false);
        }
    }

    useEffect( () => {
        windowScreen();
        window.addEventListener("resize", windowScreen);
        return () => window.removeEventListener("resize", windowScreen );
    }, []);

    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <Link to="/">
                    <img src={logo} alt="brand" />
                    </Link>
                </div>
                <div className="list-wrapper">
                    <img src={hamburger} 
                         alt="Menu bars"
                            style={{ opacity : !open ? 1 : 0}}
                            onClick={ () => {
                            setOpen(!open);
                            }} 
                            />
                      
                    <img src={cross} 
                         alt="Menu cross"
                            style={{ opacity : open ? 1 : 0}}
                            onClick={ () => {
                            setOpen(!open);
                            }} 
                            />

                    <ul style={{ left: open ? "0" : "-100vw"}}>
                        <li>
                            <Link 
                               onClick={closeCross}
                               style={{ color: location.pathname === "/" && "#00af91"}} to="/">
                               Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                               onClick={closeCross}
                               style={{ color: location.pathname === "/about" && "#00af91"}} to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                               onClick={closeCross}
                               style={{ color: location.pathname === "/skills" && "#00af91"}} to="/skills">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link 
                              onClick={closeCross}
                              style={{ color: location.pathname === "/works" && "#00af91"}} to="/works">
                                Works
                            </Link>
                        </li>
                        <li>
                            <Link 
                              onClick={closeCross}
                              style={{ color: location.pathname === "/contact" && "#00af91"}} to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
