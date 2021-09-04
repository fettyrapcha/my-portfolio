import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faEnvelope ,faMap, faPhoneAlt, faShareAlt, } from '@fortawesome/free-solid-svg-icons';
import {fab, faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

library.add(fab, faTwitter, faFacebook, faInstagram, faLinkedin)

const Contact = () => {
    return (
        <div id="section6">
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Contact Me</p>
                    </div>

                    <div className="row mt-2">

                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="info-box">
                            <FontAwesomeIcon className="icons" icon={faMap}/>
                                <h3>My Address</h3>
                                <p>Commonwealth Hall, Legon, Accra, Ghana</p>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                            <div className="info-box">
                            <FontAwesomeIcon className="icons" icon={faShareAlt}/>
                                <h3>Social Profiles</h3>
                                <div className="social-links">
                                <a href="#" className="twitter"><FontAwesomeIcon icon={faTwitter}/></a>
                                <a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook}/></a>
                                <a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram}/></a>
                                <a href="#" className="linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4 d-flex align-items-stretch">
                            <div className="info-box">
                            
                                <FontAwesomeIcon className="icons" icon={faEnvelope}/>
                                <h3>Email Me</h3>
                                <p>evansosab@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4 d-flex align-items-stretch">
                            <div className="info-box">
                            <FontAwesomeIcon className="icons" icon={faPhoneAlt}/>
                                <h3>Call Me</h3>
                                <p>+233 244 112 685</p>
                            </div>
                        </div>
                    </div>

                    <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required></input>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required></input>
                            </div>
                        </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required></input>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                            {/* <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div> */}
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>

                </div>
            </section> 
        </div>
    )
}

export default Contact
