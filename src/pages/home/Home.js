import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import ProgressCard from "../../components/home/ProgressCard";
import CodeCard from "../../components/home/CodeCard";
import "./../../style/home/home.css"
import { ScrollImage, StickyText } from "../../components/home/Gallery";


function Home() {
    useEffect(() => {
        const elements = [
            { headerId: 'whoami', lineId: 'whoami-line' },
            { headerId: 'fullstack', lineId: 'fullstack-line' },
            { headerId: 'contact', lineId: 'contact-line' },
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
                            <h5 className="fade-in mb-4">
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


                <StickyText text="There are many of other things I do" />
                <Container fluid className="two-column-content-padding" id="gallery">
                    <Container fluid className="gallery-section">
                        <Row className="m-0 p-0">
                            <Col xs={12} md={6} id="first-image" className="m-0 p-0 text-center">
                                <ScrollImage src="/home/lake.JPG" speed={1} z={0} />
                                <p style={{ width: '70%', margin: '2px auto', marginTop: '15%',  marginBottom: '15%' }}>
                                    Photography is one of my creative outlets — here’s a glimpse into my gallery.
                                </p>
                            </Col>
                            <Col xs={12} md={6} className="m-0 p-0">
                                <ScrollImage src="/home/winnie.JPG" speed={0.8} wrapperWidth="70%"
                                    initialOffset={-20} />
                            </Col>
                        </Row>
                        <Row className="m-0 p-0">
                            <Col xs={12} md={6} className="m-0 p-0">
                                <ScrollImage src="/home/light.JPG" speed={1.1} initialOffset={10} />
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container fluid id="about" className="contact-section" style={{ marginBottom: '10vh' }}>
                    <Container fluid className="two-column-content-padding">
                        <Row>
                            <Col xl={8}>
                                <div className="text-with-animated-underline">
                                    <h2 id="contact" className="fade-in mb-0">CONTACT ME AT</h2>
                                    <div id="contact-line" className="animated-underline"></div>
                                </div>

                                <Container fluid id="contact" className="p-0">
                                    <h4 className="fade-in mt-5">
                                        <strong className="primary-color">Location:</strong> Toronto ON, Vancouver BC
                                    </h4>
                                    <h4 className="fade-in mt-3">
                                        <strong className="primary-color">Email:</strong> liuhongyuan2001 AT
                                        gmail.com
                                    </h4>
                                    <h4 className="fade-in mt-3">
                                        <strong className="primary-color">Phone:</strong> +1 (647)-309-9649
                                    </h4>

                                    <ul className="social-icon-list fade-in mt-3">
                                        <li className="me-4">
                                            <a href="https://github.com/Yuanxyyds" target="_blank" rel="noreferrer" className="social-icon">
                                                <AiFillGithub />
                                            </a>
                                        </li>
                                        <li className="me-4">
                                            <a href="https://www.linkedin.com/in/liustev6/" target="_blank" rel="noreferrer" className="social-icon">
                                                <FaLinkedinIn />
                                            </a>
                                        </li>
                                        <li className="me-4">
                                            <a href="https://www.instagram.com/yuanxyyds/" target="_blank" rel="noreferrer" className="social-icon">
                                                <AiFillInstagram />
                                            </a>
                                        </li>
                                    </ul>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>

        </section >
    );
}

export default Home;
