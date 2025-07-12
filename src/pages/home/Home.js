import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillGithub, AiFillInstagram, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import ProgressCard from "../../components/home/ProgressCard";
import CodeCard from "../../components/home/CodeCard";
import { Framework, Language, Topics, Tool } from "../../components/home/StackCard";
import "./../../style/home/home.css"


function Home() {
    useEffect(() => {
        const elements = [
            { headerId: 'whoami', lineId: 'whoami-line' },
            { headerId: 'fullstack', lineId: 'fullstack-line' },
            { headerId: 'github', lineId: 'github-line' },
            // Add more pairs as needed
        ];

        function handleScroll() {
            const viewportHeight = window.innerHeight;

            elements.forEach(({ headerId, lineId }) => {
                const header = document.getElementById(headerId);
                const line = document.getElementById(lineId);

                if (!header || !line) return;

                const rect = header.getBoundingClientRect();
                const distanceFromBottom = viewportHeight - rect.top;
                const scrollRatio = distanceFromBottom / viewportHeight;

                let widthPercent = 0;
                if (scrollRatio < 0.2) {
                    widthPercent = 0;
                } else if (scrollRatio >= 0.5) {
                    widthPercent = 100;
                } else {
                    widthPercent = ((scrollRatio - 0.2) / (0.5 - 0.2)) * 100;
                }

                widthPercent = Math.min(Math.max(widthPercent, 0), 100);
                line.style.width = `${widthPercent}%`;
            });
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <section>
            <Container fluid id="home" className="home-content">
                <Container fluid className="home-landing-page">
                    <video className="home-bg-desktop" src="/home/bg.mp4" autoPlay muted loop playsInline />
                    <Container fluid className="one-column-content-padding">
                        <Row>
                            <Col xs={10} md={6} lg={5}>
                                <h1 className="thin fade-in mb-0 with-line delay-in delay-0">
                                    MAKE IT
                                </h1>
                                <h1 className="fade-in">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "INNOVATIVE",
                                                "IMPACTFUL",
                                            ],
                                            cursor: '|',
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 80,
                                        }}
                                    />
                                </h1>

                                <h5 className="fade-in ms-1 delay-in delay-2 bold">
                                    I'm Steven, a Master's student at the University of Pennsylvania, specializing in Machine Learning, Software Engineering and UI/UX Design.
                                </h5>
                            </Col>
                        </Row>
                    </Container>
                </Container>


                <Container fluid className="two-column-content-padding" id="about">
                    <Row>
                        <Col xl={8}>
                            <div className="text-with-animated-underline">
                                <h2 id="whoami" className="fade-in mb-0">WHO AM I</h2>
                                <div id="whoami-line" className="animated-underline"></div>
                            </div>

                            <p className="fade-in mt-5">
                                I'm Hongyuan (Steven) Liu. I recently graduated from University of Toronto (June 2025), where I completed
                                my Bachelor of Science in Computer Science with a GPA 3.90/4.0. Starting Fall 2025, I will pursue a Master
                                of Engineering in AI at the University of Pennsylvania. I previously worked as a
                                <i> <b className="primary-color"> Full-Stack Mobile Developer at Johnson Controls </b> </i> and served
                                as the  <i> <b className="primary-color">  Founder of the Campus Eats. </b> </i>
                            </p>

                            <p className="fade-in mt-4">I am expertise in
                                <i>
                                    <b className="primary-color"> Machine Learning, Full-Stack Mobile/Web Development, Software Business, and UI/UX Design. </b>
                                </i>
                                Besides, I am actively contributing to a diverse range of 10+ projects, software
                                business startups, over 1000+ contribution on github.
                            </p>
                        </Col>
                        <Col xl={4} className="my-avtar">
                            <video src='/home/avatar.mp4' autoPlay muted loop playsInline style={{ maxHeight: "400px" }} />
                        </Col>
                    </Row>
                </Container>


                <Container fluid className="two-column-content-padding" id="about">
                    <Row className="align-items-stretch">
                        <Col xs={12} md={10} lg={8} xl={6}>
                            <div className="text-with-animated-underline mb-4">
                                <h2 id="fullstack" className="fade-in mb-0">WHAT I DO</h2>
                                <div id="fullstack-line" className="animated-underline"></div>
                            </div>
                            <h5 className="fade-in mb-4">I am expertise in
                                I create engaging, interactive software powered by cutting-edge technologies.
                            </h5>
                            <div className="fade-in"> <ProgressCard /> </div>

                        </Col>
                        <Col xs={12} md={10} lg={8} xl={6} style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="my-life fade-in">
                                <CodeCard />
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* <Container fluid className="two-column-content-padding">
                    <Container fluid className="">
                        <h2 className="fade-in">
                            Programming Language <strong className="primary-color">Skill </strong>
                        </h2>
                        <Language className="fade-in" />
                    </Container>
                    <Container className="">
                        <h2 className="fade-in">
                            Framework and System <strong className="primary-color">Skill </strong>
                        </h2>
                        <Framework className="fade-in" />
                    </Container>
                    <Container className="">
                        <h2 className="fade-in">
                            Service and Tool <strong className="primary-color">Skill </strong>
                        </h2>
                        <Tool className="fade-in" />
                    </Container>
                    <Container className="">
                        <h2 className="fade-in">
                            Learning <strong className="primary-color">Topics </strong>
                        </h2>
                        <Topics className="fade-in" />

                    </Container>
                </Container> */}


                <Container className={"section-divider"} fluid id="contact">
                    <h1 className="section-header fade-in">
                        <span className="primary-color"> CONTACT </span> {" "} ME AT
                    </h1>
                    <p className="home-contact-info fade-in">
                        <HiOutlineLocationMarker c style={{
                            width: '40px',
                            height: '40px',
                            fill: "white !important"
                        }} /> {"  "} 65 Saint Mary Street, Toronto ON, M5S 0A6, Canada
                    </p>
                    <p className="home-contact-info fade-in">
                        <AiOutlineMail style={{ width: '40px', height: '40px' }} /> {" "} liuhongyuan.liu AT
                        mail.utoronto.ca
                    </p>
                    <p className="home-contact-info fade-in">
                        <AiOutlinePhone style={{ width: '40px', height: '40px' }} /> {" "} +1 (647)-309-9649
                    </p>

                    <ul className="social_icon_list fade-in">
                        <div className="social-icons">
                            <a
                                href="https://github.com/Yuanxyyds"
                                target="_blank"
                                rel="noreferrer"
                                className="home-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </div>
                        <div className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/liustev6/"
                                target="_blank"
                                rel="noreferrer"
                                className="home-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <div className="social-icons">
                            <a
                                href="https://www.instagram.com/yuanxyyds/"
                                target="_blank"
                                rel="noreferrer"
                                className="home-social-icons"
                            >
                                <AiFillInstagram />
                            </a>
                        </div>
                    </ul>
                </Container>
            </Container>

        </section>
    );
}

export default Home;
