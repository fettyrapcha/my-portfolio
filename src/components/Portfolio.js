import React from 'react';
import webdev from "../images/webdev.jpeg";
import auto from "../images/auto.JPG";
import data from "../images/Data.JPG"
import banner from "../images/banner.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink} from '@fortawesome/free-solid-svg-icons';


const Portfolio = () => {
    return (
        <div id="section5">
            <section id="portfolio" class="portfolio">
                <div class="container">
                    <div class="section-title">
                        <h2>Portfolio</h2>
                        <p>My Works</p>
                    </div> 
                    <div class="row">
                        <div class="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" class="filter-active">All</li>
                                <li data-filter=".filter-app">Web Dev</li>
                                <li data-filter=".filter-web">Python Script</li>
                                <li data-filter=".filter-web">Data Analytics</li>
                                <li data-filter=".filter-card">Graphics</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row portfolio-container">
                        
                            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div class="portfolio-wrap">
                                    <img src={webdev} class="img-fluid" alt=""></img>
                                    <div class="portfolio-info">
                                    <p>Web</p>
                                    <div class="portfolio-links">
                                        <a href="https://github.com/fettytech" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details">
                                            <FontAwesomeIcon className="ic" icon={faLink} /></a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div class="portfolio-wrap">
                                    <img src={auto} class="img-fluid" alt=""></img>
                                    <div class="portfolio-info">
                                    <p>Script</p>
                                    <div class="portfolio-links">
                                        <a href="https://github.com/fettytech" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details">
                                            <FontAwesomeIcon className="ic" icon={faLink} /></a>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div class="portfolio-wrap">
                                    <img src={data} class="img-fluid" alt=""></img>
                                    <div class="portfolio-info">
                                    <p>Data Analytics</p>
                                    <div class="portfolio-links">
                                        <a href="https://github.com/fettytech" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details">
                                            <FontAwesomeIcon className="ic" icon={faLink} /></a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
            </section>
        </div>
    )
}

export default Portfolio
