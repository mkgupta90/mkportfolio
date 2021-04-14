import React from 'react'
import "./style.css";

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <iframe title="my location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.485694882124!2d77.41819911542902!3d28.61520199161504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefb469861afd%3A0xc1cb3d197f6c40fa!2sState%20Bank%20of%20India!5e0!3m2!1sen!2sin!4v1616133529125!5m2!1sen!2sin" 
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    >
                    </iframe>

            <h4>Name</h4>
            <p>Munna Kumar</p>

            <h4>Email Address</h4>
            <p>munnakumar727798@gmail.com</p>

            <h4>Phone</h4>
            <p>9311232182</p>

            <h4>Address</h4>
            <p>Greater Noida</p>
        </div>
    )
}

export default Contact
