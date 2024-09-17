import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import homeLogo from "../../assets/home-animation.gif";
import Particle from "../../components/common/Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import myImg from "../../assets/avatar.png";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {AiFillGithub, AiFillInstagram, AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

document.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTopToViewBottom = windowHeight - position.top;
        const ViewTopToElementBottom = position.bottom;

        let opacity = 0;
        const transitionDistance = windowHeight / 4;

        if (elementTopToViewBottom >= 0 && ViewTopToElementBottom >= 0) {
            if (elementTopToViewBottom <= transitionDistance) {
                opacity = Math.pow(elementTopToViewBottom / transitionDistance, 3);
            } else if (ViewTopToElementBottom <= transitionDistance) {
                opacity = Math.pow(elementTopToViewBottom / transitionDistance, 3);
            } else {
                opacity = 1
            }
        }

        // Set the opacity
        element.style.opacity = opacity;
    });
});

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle/>
                <Container className="home-content">
                    <Row>
                        <Col xl={7}>
                            <h1 className="home-primary-header">
                                Welcome to my Website!{"  "}
                                <span className="wave" role="img" aria-labelledby="wave"> 👋🏻 </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> Hongyuan (Steven) Liu</strong>
                            </h1>

                            <div>
                                <Type/>
                            </div>
                        </Col>

                        <Col xl={5}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{maxHeight: "450px"}}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="home-about-section" id="about">
                <Container>
                    <Row>
                        <Col md={8} className="home-about-description">
                            <h1 className={"fade-in"} style={{fontSize: "2.6em"}}>
                                LET ME <span className="blue"> INTRODUCE </span> MYSELF
                            </h1>
                            <p className="home-about-body fade-in">
                                I am a passionate Fourth-year student at University of Toronto, double specialist in
                                Computer Science & Data Science GPA 3.9/4.0. Currently working as a
                                <i>
                                    <b className="blue"> Cloud and Mobile App Co-op developer at Johnson Controls </b>
                                </i> and serving as the Founder of the Campus Eats.
                            </p>
                            <p className="home-about-body fade-in">I am expertise in
                                <i>
                                    <b className="blue"> Mobile App Development, Web Development, and Data Analysis </b>
                                </i>
                            </p>
                            <p className="home-about-body fade-in">
                                Besides, I am actively contributing to a diverse range of 10+ projects, software
                                business
                                startups, over 1000+ contribution on github.
                            </p>
                        </Col>
                        <Col md={4} className="myAvtar fade-in">
                            <Tilt>
                                <img src={myImg} style={{width: '300px', height: '300px'}} className="img-fluid"
                                     alt="avatar"/>
                            </Tilt>
                        </Col>
                    </Row>

                    <Row className={"fade-in"}>
                        <Col md={12} className="home-about-description">
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

                            <ul className="home-about-social-links">
                                <li className="social-icons">
                                    <a
                                        href="https://github.com/Yuanxyyds"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  home-social-icons"
                                    >
                                        <AiFillGithub/>
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://www.linkedin.com/in/hongyuan-steven-liu/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  home-social-icons"
                                    >
                                        <FaLinkedinIn/>
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://www.instagram.com/yxyyds2001/"
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
        </section>
    );
}

export default Home;
