import {Container, Row, Col} from "react-bootstrap";
import Particle from "../../components/common/Particle";
import Language from "../../components/about/Language";
import Framework from "../../components/about/Framework";
import Tool from "../../components/about/Tool";
import Technical from "../../components/about/Technical";
import laptopImg from "../../assets/about.png";
import {ImPointRight} from "react-icons/im";
import FadeIn from "../../effect/FadeIn";
import React from "react";


function About() {
    document.addEventListener("scroll", FadeIn);
    return (
        <Container fluid className="about-content">
            <Particle/>
            <Container>
                <Row>
                    <Col xl={7}>
                        <div className="section-header fade-in">
                            Know Who <strong className="primary-color">I'M</strong>
                        </div>

                        <p className="paragraph fade-in">
                            Hi everyone! I'm <span className="primary-color">Steven Liu</span> from <span
                            className="primary-color">Toronto, Canada</span>. Originally born in <span
                            className="primary-color">Beijing, China</span>, and moved to Canada in 2016. I
                            completed high school at Semiahmoo Secondary School in <span
                            className="primary-color">Surrey, BC</span> and am currently taking my undergraduate
                            studies at the University of Toronto.
                        </p>
                        <p className="paragraph fade-in">
                            I love my family, my girlfriend, and my two cats, Timi and Chocho. Besides that, I enjoy
                            creating cool things and here are some existing activities I am working on!
                        </p>
                        <ul className="about-activity">
                            <li className="fade-in">
                                <ImPointRight/> Startups - Campus Eats, LockIn (a.k.a aSocial)
                            </li>
                            <li className="fade-in">
                                <ImPointRight/> Academic Research, Web Projects, Server Hosting
                            </li>
                            <li className="fade-in">
                                <ImPointRight/> Sports - Soccer, Hockey, Basketball, Work-out
                            </li>
                            <li className="fade-in">
                                <ImPointRight/> Games - FM24, WuKong, HoK
                            </li>
                        </ul>
                        <div className="primary-color fade-in">
                            <p>
                                "Work hard, be kind, and amazing things will happen."{" "}
                            </p>
                            <footer className="blockquote-footer">Conan O’Brien</footer>
                        </div>


                    </Col>
                    <Col xl={5}>
                        <img src={laptopImg} className="about-image img-fluid fade-in" style={{maxHeight: "400px"}}
                             alt="about"/>
                    </Col>
                </Row>
            </Container>
            {/*<Container className="section-divider">*/}
            {/*    <h1 className="section-header fade-in" style={{paddingBottom: "20px"}}>*/}
            {/*        Days I <strong className="primary-color">Code</strong>*/}
            {/*    </h1>*/}

            {/*    <GitHubCalendar*/}
            {/*        username="Yuanxyyds"*/}
            {/*        blockSize={20}*/}
            {/*        blockMargin={5}*/}
            {/*        color="#0b5dd0"*/}
            {/*        fontSize={16}*/}
            {/*    />*/}
            {/*</Container>*/}
            <Container className="about-skill-divider">
                <h1 className="section-header fade-in">
                    Programming Language <strong className="primary-color">Skill </strong>
                </h1>

                <Language/>
            </Container>
            <Container className="about-skill-divider">
                <h1 className="section-header fade-in">
                    Framework <strong className="primary-color">Skill </strong>
                </h1>
                <Framework/>
            </Container>
            <Container className="about-skill-divider">
                <h1 className="section-header fade-in">
                    Service and Tool <strong className="primary-color">Skill </strong>
                </h1>
                <Tool/>
            </Container>
            <Container className="about-skill-divider">
                <h1 className="section-header fade-in">
                    Technical <strong className="primary-color">Skill </strong>
                </h1>
                <Technical/>

            </Container>
        </Container>
    );
}

export default About;
