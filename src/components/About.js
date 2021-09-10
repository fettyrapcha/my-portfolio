import React from 'react';
import mylogo from "../images/myimage.jpg";
import ProgressBar from 'react-bootstrap/ProgressBar';




 

const About = () => {
    return (
        <div className="about-wrapper" id="section2">
            <section className="section about-section gray-bg" id="about">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="about-text ">
                                <h3 className="dark-color">About Me</h3>
                                <h6 className="theme-color">A Software Developer and Data Analyst </h6>
                                <p>Hello l am Evans. I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, 
                                    web services and automating stuff. My passion is to develop Software to solve business problems and design responsive websites such as blogs, webapps, business websites from user interface and development.
                                    I also aspired to use data to create insight for business decision.</p>
                                <div className="row about-list">
                                    <div className="col-md-6">
                                        <div class="media">
                                            <label>Birthday</label>
                                            <p> 3 July 1997</p>
                                        </div>
                                        <div class="media">
                                            <label>Age</label>
                                            <p> 24 Yrs</p>
                                        </div>
                                        <div class="media">
                                            <label>Residence</label>
                                            <p>Ghana</p>
                                        </div>
                                        <div class="media">
                                            <label>Address</label>
                                            <p> Accra, Ghana</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="media">
                                            <label>E-mail</label>
                                            <p> evansosab@gmail.com</p>
                                        </div>
                                        <div class="media">
                                            <label>Phone</label>
                                            <p> +233241449894</p>
                                        </div>
                                        <div class="media">
                                            <label>Website</label>
                                            <p> www.fettytech.com</p>
                                        </div>
                                        <div class="media">
                                            <label>Freelance</label>
                                            <p> Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-avatar">
                                <img src={mylogo} className="rounded-circle" title="" alt=""></img>
                            </div>
                        </div>
                    </div>
    {/* <!---------------------------- Counts -----------------------> */}
                    <div class="counter">
                        <div class="row">
                            <div class="col-6 col-lg-3">
                                <div class="count-data text-center">
                                    <h6 class="count h2" data-to="25" data-speed="25">25</h6>
                                    <p class="m-0px font-w-600">Happy Clients</p>
                                </div>
                            </div>
                            <div class="col-6 col-lg-3">
                                <div class="count-data text-center">
                                    <h6 class="count h2" data-to="42" data-speed="42">42</h6>
                                    <p class="m-0px font-w-600">Project</p>
                                </div>
                            </div>
                            <div class="col-6 col-lg-3">
                                <div class="count-data text-center">
                                    <h6 class="count h2" data-to="850" data-speed="850">150</h6>
                                    <p class="m-0px font-w-600">Hours of Support</p>
                                </div>
                            </div>
                            <div class="col-6 col-lg-3">
                                <div class="count-data text-center">
                                    <h6 class="count h2" data-to="2" data-speed="2">2</h6>
                                    <p class="m-0px font-w-600">Leadership Role</p>
                                </div>
                            </div>
                        </div>
                    </div>
    {/* <!------------- End Counts ---------------------> */}
    {/* <!-- ======= ----Skills  -------------======= --> */}
                    <div className="skills container">

                    <div className="section-title">
                        <h2>Skills</h2>
                    </div>

                    <div className="row skills-content">

                        <div className="col-lg-6">

                        <div className="progress">
                            <span className="skill">HTML <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                            <ProgressBar  now={80}/>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">CSS <i className="val">60%</i></span>
                            <div className="progress-bar-wrap">
                            <ProgressBar now={60}/>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">JavaScript <i className="val">40%</i></span>
                            <div className="progress-bar-wrap">
                            <ProgressBar now={40}/>
                            </div>
                        </div>

                        </div>

                        <div className="col-lg-6">

                        <div className="progress">
                            <span className="skill">Python <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                            <ProgressBar now={80}/>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">Django <i className="val">50%</i></span>
                            <div className="progress-bar-wrap">
                            <ProgressBar now={50}/>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">CorelDRAW <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                            <ProgressBar now={90}/>
                            </div>
                        </div>

                        </div>

                    </div>

                    </div>
    {/* <!-- End Skills --> */}
                </div>
            </section>
        </div>
       
    )
}

export default About
