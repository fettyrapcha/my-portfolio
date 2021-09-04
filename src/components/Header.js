import React from 'react';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab, faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

library.add(fab, faTwitter, faFacebook, faInstagram, faLinkedin)

const Header = () => {
    return (
        
        <div className="header-wraper" id="section1">
            <div className="main-info">
                <h1>Hello,I'm Evans!</h1>
                <h2>I'm a passionate <span>software developer </span> from Ghana</h2>
                <Typed
                    className="typed-text"
                    strings={["Web Development", "IT Support", "UI Design", "Data Analytics", "Graphic Design"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div className="social-links">
                    <a href="#" className="twitter"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="#" className="linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
    
            </div>
        </div>
    )
}

export default Header
