import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiOutlinePhone,
    AiOutlineMail,
} from "react-icons/ai";

import {FaLinkedinIn} from "react-icons/fa";
import {HiOutlineLocationMarker} from "react-icons/hi";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{fontSize: "2.6em"}}>
                            LET ME <span className="blue"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I am a passionate Fourth-year student at University of Toronto, double specialist in
                            Computer Science & Data Science GPA 3.9/4.0. Currently working as a
                            <i>
                                <b className="blue"> Cloud and Mobile App Co-op developer at Johnson Controls </b>
                            </i> and serving as President of the University of Toronto Tutoring Club.
                            <br/>
                            <br/>I am expertise in
                            <i>
                                <b className="blue"> Mobile App Development, Web Development, and Data Analysis </b>
                            </i>
                            <br/>
                            <br/>
                            Besides, I am actively contributing to a diverse range of 10+ projects, software business
                            startups, over 1000+ contribution on github.
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} style={{width: '300px', height: '300px'}} className="img-fluid"
                                 alt="avatar"/>
                        </Tilt>
                    </Col>
                </Row>

                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{fontSize: "2.6em"}}>
                            <span className="blue"> CONTACT</span> ME AT
                        </h1>
                        <p className="home-about-contact ">
                            <HiOutlineLocationMarker c style={{
                                width: '40px',
                                height: '40px',
                                fill: "white !important"
                            }}/> {" "} 1000 portage
                            pkwy, Concord, ON L4K 0L1, Canada
                            <br/>
                            <br/>
                            <AiOutlineMail style={{width: '40px', height: '40px'}}/> {" "} liuhongyuan.liu AT
                            mail.utoronto.ca
                            <br/>
                            <br/>
                            <AiOutlinePhone style={{width: '40px', height: '40px'}}/> {" "} +1 (647)-309-9649
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="blue">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/Soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/soumyajit4419/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;
