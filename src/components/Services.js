import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode ,faUser, faAddressBook, faCarAlt, faCamera, faCogs} from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    return (
        <div id="section4">
            <section id="services" class="services">
                <div class="container">

                <div class="section-title">
                    <h2>Services</h2>
                    <p>My Services</p>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div class="icon-box">
                        <div class="icon"><FontAwesomeIcon className="ic" icon={faUser} />
                        </div>
                        <h4><a href="">Web and UI Design</a></h4>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div class="icon-box">
                        <div class="icon"><FontAwesomeIcon className="ic" icon={faFileCode} /></div>
                        <h4><a href="">Web Development</a></h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                    <div class="icon-box">
                        <div class="icon"><FontAwesomeIcon className="ic" icon={faAddressBook} /></div>
                        <h4><a href="">Front-End Development</a></h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                        <div class="icon"><FontAwesomeIcon className="ic" icon={faCarAlt} /></div>
                        <h4><a href="">Back-End Development</a></h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                        <div class="icon"><FontAwesomeIcon className="ic" icon={faCamera} /></div>
                        <h4><a href="">Usability Testing</a></h4>
                        <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                        <div class="icon"><FontAwesomeIcon className="ic" icon={faCogs} /></div>
                        <h4><a href="">IT Automation</a></h4>
                        <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                    </div>
                    </div>

                </div>

                </div>
            </section>
        </div>
    )
}

export default Services
