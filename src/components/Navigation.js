import React from 'react';
import { Navbar,Nav, Container,} from 'react-bootstrap';
import { Link } from "react-scroll";
import logo from "../images/mylogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" sticky="top">
                <Navbar.Brand style={{paddingLeft: "30px"}} href="#"><img  className="logo" src={logo} alt="logo..." /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" >
                    <FontAwesomeIcon icon={faBars} style={{color: "#bec1c4"}}/>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                        <ul className="navbar-nav" style={{paddingRight: "30px"}}>
                            <li className="nav-item active">
                               
                                <Link className="nav-link" activeClass="active" to="section1" spy={true} smooth={false} offset={-100} duration={500}>Home</Link>
                            </li>
                            <li className="nav-item">
                                
                                <Link className="nav-link"  to="section2" spy={true} smooth={false} offset={-100} duration>About Me</Link>
                            </li>
                            <li className="nav-item">
                                
                                <Link className="nav-link"  to="section3" spy={true} smooth={false} offset={-100} duration>Resume</Link>
                            </li>
                            <li className="nav-item">
                                
                                <Link className="nav-link"  to="section4" spy={true} smooth={false} offset={-100} duration>Services</Link>
                            </li>
                            <li className="nav-item">
                                
                                <Link className="nav-link"  to="section5" spy={true} smooth={false} offset={-100} duration={500}>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                
                                <Link className="nav-link"  to="section6" spy={true} smooth={false} offset={-100} duration>Contact</Link>
                            </li>
                        </ul>
                    {/* </div> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    </>
    )
}

export default Navigation
