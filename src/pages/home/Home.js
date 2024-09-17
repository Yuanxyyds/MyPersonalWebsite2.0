import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import homeLogo from "../../assets/home-animation.gif";
import Particle from "../../components/common/Particle";
import Tilt from "react-parallax-tilt";
import myImg from "../../assets/avatar.gif";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {AiFillGithub, AiFillInstagram, AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import Typewriter from "typewriter-effect";

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
                opacity = Math.pow(ViewTopToElementBottom / transitionDistance, 3);
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
            <Container className="home-content">
                <Particle/>
                <Container fluid id="home">
                    <Row fluid id="home">
                        <Col xl={7}>
                            <h1 className="home-primary-header fade-in">
                                Welcome to my Website!{"  "}
                                <span className="wave" role="img" aria-labelledby="wave"> 👋🏻 </span>
                            </h1>

                            <h1 className="heading-name fade-in">
                                I'M
                                <strong className="primary-color"> Hongyuan (Steven) Liu</strong>
                            </h1>

                            <div className="typewriter-wrapper-home fade-in">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "> Student at University of Toronto",
                                            "> Mobile App Developer",
                                            "> Web Developer",
                                            "> Machine Learning Developer",
                                        ],
                                        cursor: '_',
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 80,
                                    }}
                                />
                            </div>
                        </Col>

                        <Col xl={5}>
                            <Tilt>
                                <img src={homeLogo} className="img-fluid fade-in" style={{maxHeight: "450px"}}
                                     alt="avatar"/>
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
                <Container className={"section-divider"} fluid id="about">
                    <Row>
                        <Col xl={8}>
                            <h1 className="fade-in section-header">
                                LET ME <span className="primary-color"> INTRODUCE </span> MYSELF
                            </h1>
                            <p className="paragraph fade-in">
                                I am a passionate Fifth-year student at University of Toronto, double specialist in
                                Computer Science & Data Science GPA 3.9/4.0. Previously worked as a
                                <i>
                                    <b className="primary-color"> Cloud and Mobile App Co-op developer at Johnson
                                        Controls </b>
                                </i> and currently serve as the Founder of the Campus Eats.
                            </p>
                            <p className="paragraph fade-in">I am expertise in
                                <i>
                                    <b className="primary-color"> Machine Learning, Full Stack Mobile App Development,
                                        Full Stack Web Development, and Data Analysis </b>
                                </i>
                            </p>
                            <p className="paragraph fade-in">
                                Besides, I am actively contributing to a diverse range of 10+ projects, software
                                business
                                startups, over 1000+ contribution on github.
                            </p>
                        </Col>
                        <Col xl={4} className="my-avtar">
                            <img src={myImg} className="fade-in img-fluid" style={{maxHeight: "400px"}}
                                 alt="avatar"/>
                        </Col>
                    </Row>
                </Container>
                <Container className={"section-divider"} fluid id="contact">
                    <h1 className="section-header fade-in">
                        <span className="primary-color"> CONTACT </span> {" "} ME AT
                    </h1>
                    <p className="home-contact-info fade-in">
                        <HiOutlineLocationMarker c style={{
                            width: '40px',
                            height: '40px',
                            fill: "white !important"
                        }}/> {"  "} 65 Saint Mary Street, Toronto ON, M5S 0A6, Canada
                    </p>
                    <p className="home-contact-info fade-in">
                        <AiOutlineMail style={{width: '40px', height: '40px'}}/> {" "} liuhongyuan.liu AT
                        mail.utoronto.ca
                    </p>
                    <p className="home-contact-info fade-in">
                        <AiOutlinePhone style={{width: '40px', height: '40px'}}/> {" "} +1 (647)-309-9649
                    </p>

                    <ul className="social_icon_list fade-in">
                        <div className="social-icons">
                            <a
                                href="https://github.com/Yuanxyyds"
                                target="_blank"
                                rel="noreferrer"
                                className="home-social-icons"
                            >
                                <AiFillGithub/>
                            </a>
                        </div>
                        <div className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/liustev6/"
                                target="_blank"
                                rel="noreferrer"
                                className="home-social-icons"
                            >
                                <FaLinkedinIn/>
                            </a>
                        </div>
                        <div className="social-icons">
                            <a
                                href="https://www.instagram.com/yuanxyyds/"
                                target="_blank"
                                rel="noreferrer"
                                className="home-social-icons"
                            >
                                <AiFillInstagram/>
                            </a>
                        </div>
                    </ul>
                </Container>
            </Container>

        </section>
    );
}

export default Home;
