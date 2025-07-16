import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/project/ProjectCards";
import { useIsVerticalLayout } from "../../components/effects/IsVertical";
import { Framework, Language, Topics, Tool } from "../../components/home/StackCard";
import "./../../style/project/project.css"
import { useEffect } from "react";

function Project() {
    const isVertical = useIsVerticalLayout();
    useEffect(() => {
        const elements = [
            { headerId: 'project', lineId: 'project-line' },
            { headerId: 'skill', lineId: 'skill-line' },
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
            {isVertical ?
                <Container fluid className="project-vertical-section">
                    <Container fluid id="landing" style={{ paddingTop: '20vh', paddingLeft: '5vw', paddingRight: '5vw' }}>
                        <Row>
                            <Col lg={11} xl={8}>
                                <h1 className="thin with-line fade-in mb-0 delay-in delay-0">
                                    EXPLORE MY
                                </h1>
                                <h1 className="fade-in mb-2 delay-in delay-1 primary-color">
                                    PROJECTS, SKILLS
                                </h1>
                                <h5 className="fade-in mb-4 delay-in delay-2 bold">
                                    A curated collection of what I’ve designed, built, and deployed — from backend systems to interactive UIs.
                                </h5>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid className="project-video-wrapper delay-in delay-3">
                        <video src="/project/project.mp4" style={{ width: '100%' }} autoPlay muted loop playsInline />
                    </Container>
                    <Container fluid id="landing" style={{ paddingTop: '16px', paddingLeft: '5vw', paddingRight: '5vw' }}>
                        <Row>
                            <h4 className="fade-in delay-in delay-3" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                                Let's Go
                            </h4>
                        </Row>
                    </Container>
                </Container>
                :
                <Container fluid className="project-horizontal-section">
                    <video className="project-bg-desktop" src="/project/project.mp4" autoPlay muted loop playsInline />
                    <Container fluid id="landing" className="one-column-content-padding">
                        <Row>
                            <Col xs={11} md={8} lg={7} xl={6}>
                                <h1 className="with-line fade-in mb-0 delay-in delay-0">
                                    EXPLORE MY
                                </h1>
                                <h2 className="fade-in mb-2 delay-in delay-1 primary-color" style={{ fontWeight: '700' }}>
                                    WORKS & SKILLS
                                </h2>
                                <p className="fade-in mb-0 delay-in delay-2 bold">
                                    A curated collection of what I’ve designed, built, and deployed — from backend systems to interactive UIs.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            }

            <Container fluid className="two-column-content-padding" style={{ color: 'white' }} id="project">
                <Container>
                    <div className="text-with-animated-underline">
                        <h2 id="project" className="fade-in mb-0">PROJECTS</h2>
                        <div id="project-line" className="animated-underline"></div>
                    </div>

                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} className="project-card">
                            <ProjectCard
                                imgPath="/project/campus-eats.png"
                                title="Campus Eats"
                                description="To tackle challenges in campus dining, our startup team developed an all-encompassing mobile app for campus food service. This app serves students, restaurants, and drivers, aiming to improve the campus food service ecosystem. It was built with Flutter and a Firebase backend."
                                action={
                                    <Row style={{
                                        justifyContent: "center",
                                        padding: "10px",
                                        display: "flex",
                                        flexWrap: "wrap"
                                    }} className="g-0">
                                        <Col xs={5} sm={5} md={10} lg={5} xl={10} xxl={6}
                                            style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button variant="primary" target="_blank">
                                                <Link to={"/campusEats"} style={{
                                                    color: "white",
                                                    textDecoration: "none",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    <CgWebsite /> &nbsp; Project Demo
                                                </Link>
                                            </Button>
                                        </Col>
                                        <Col xs={5} sm={5} md={10} lg={5} xl={10} xxl={6}
                                            style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button variant="primary" href={"https://github.com/CampusEatsUofT"}
                                                target="_blank">
                                                <BsGithub /> &nbsp; Organization
                                            </Button>
                                        </Col>
                                    </Row>}
                            />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={4} className="project-card">
                            <ProjectCard
                                imgPath="/project/steven-ai.png"
                                title="Steven AI"
                                description="This personal project aims to develop an AI chatbot that can answer any questions about me. The chatbot is created by fine-tuning the LLaMA 3.2 model (with 3 billion parameters) using approximately 1,000 Q&A pairs related to my personal background and experience. To optimize resources, I utilized a LoRA adapter for parameter-efficient fine-tuning, allowing the model to be trained efficiently in my home lab setup."
                                action={
                                    <Row style={{
                                        justifyContent: "center",
                                        padding: "10px",
                                        display: "flex",
                                        flexWrap: "wrap"
                                    }} className="g-0">
                                        <Col xs={5} sm={5} md={10} lg={5} xl={10} xxl={6}
                                            style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button variant="primary" target="_blank">
                                                <Link to={"/stevenAi"} style={{
                                                    color: "white",
                                                    textDecoration: "none",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    <CgWebsite /> &nbsp; Project Demo
                                                </Link>
                                            </Button>
                                        </Col>
                                        <Col xs={5} sm={5} md={10} lg={5} xl={10} xxl={6}
                                            style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button variant="primary" href={"https://github.com/Yuanxyyds/machine-learning"}
                                                target="_blank">
                                                <BsGithub /> &nbsp; Github
                                            </Button>
                                        </Col>
                                    </Row>}
                            />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={4} className="project-card">
                            <ProjectCard
                                imgPath="/project/mentor-ai.png"
                                title="Mentor AI"
                                description="MentorAI is a research project that automates the creation of an LLM pipeline using only YouTube links to generate personalized mentorship advice. It leverages NLP mentorship videos, transcripts, and user-specific data to guide aspiring researchers in finding mentors, conducting literature reviews, and preparing for PhD applications with tailored, actionable suggestions."
                                action={
                                    <Row style={{
                                        justifyContent: "center",
                                        padding: "10px",
                                        display: "flex",
                                        flexWrap: "wrap"
                                    }} className="g-0">
                                        <Col xs={5} sm={5} md={10} lg={5} xl={10} xxl={6}
                                            style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button variant="primary" target="_blank">
                                                <Link to={"/mentorAi"} style={{
                                                    color: "white",
                                                    textDecoration: "none",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    <CgWebsite /> &nbsp; Project Demo
                                                </Link>
                                            </Button>
                                        </Col>
                                        {/*<Col xs={5} sm={5} md={10} lg={5} xl={10} xxl={6}*/}
                                        {/*     style={{display: "flex", justifyContent: "center", paddingBottom: "10px"}}>*/}
                                        {/*    <Button variant="primary" href={"https://github.com/Yuanxyyds/machine-learning"}*/}
                                        {/*            target="_blank">*/}
                                        {/*        <BsGithub/> &nbsp; Github*/}
                                        {/*    </Button>*/}
                                        {/*</Col>*/}
                                    </Row>}
                            />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={4} className="project-card">
                            <ProjectCard
                                imgPath="/project/food-101.png"
                                title="Food-101 Classification"
                                description="This project focuses on developing a deep learning model to classify food images using the Food-101 dataset. It includes data processing, model training, fine-tuning, and performance optimization through transfer learning and hyperparameter tuning. It compares VGG, Inception, ResNet with a baseline model aiming to create an efficient and accurate food classification solution."
                                action={
                                    <Row style={{
                                        justifyContent: "center",
                                        padding: "10px",
                                        display: "flex",
                                        flexWrap: "wrap"
                                    }} className="g-0">
                                        <Col xs={5} sm={5} md={10} lg={5} xl={10} xxl={6}
                                            style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button variant="primary" target="_blank">
                                                <Link to={"/foodImageClassify"} style={{
                                                    color: "white",
                                                    textDecoration: "none",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    <CgWebsite /> &nbsp; Project Demo
                                                </Link>
                                            </Button>
                                        </Col>
                                        <Col xs={5} sm={5} md={10} lg={5} xl={10} xxl={6}
                                            style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button variant="primary" href={"https://github.com/Yuanxyyds/machine-learning"}
                                                target="_blank">
                                                <BsGithub /> &nbsp; Github
                                            </Button>
                                        </Col>
                                    </Row>}
                            />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={4} className="project-card">
                            <ProjectCard
                                imgPath="/project/personal-web.png"
                                title="Personal Website"
                                description="My personal website built with frontend using Next.js & Tailwind CSS (version 1), React (version 2). And backend using Django with AWS hosting. Both websites feature detailed project explanations, and videos showcasing each project."
                                action={
                                    <Row style={{ justifyContent: "center", padding: "10px", display: "flex" }}
                                        className="g-0">
                                        <Col xs={5} sm={5} md={6} lg={5} xl={6}
                                            style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button variant="primary"
                                                href={"https://github.com/Yuanxyyds/MyPersonalWebsite2.0"}
                                                target="_blank">
                                                <BsGithub /> &nbsp; Github
                                            </Button>
                                        </Col>
                                        <Col xs={5} sm={5} md={6} lg={5} xl={6}
                                            style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button variant="primary" href={"https://liustev6.ca"} target="_blank">
                                                <CgWebsite /> &nbsp; Website
                                            </Button>
                                        </Col>
                                    </Row>
                                }
                            />
                        </Col>


                        <Col xs={12} sm={12} md={6} lg={6} xl={4} className="project-card">
                            <ProjectCard
                                imgPath="/project/dtc.png"
                                title="JCI Community (DTC) Mobile App"
                                description="Home Security and Cloud device management mobile app (currently named as Community) developed by Johnson Controls. Participated in Front-end and Back-end development using Flutter and Firebase."
                                action={
                                    <Row style={{
                                        justifyContent: "center",
                                        padding: "10px",
                                        display: "flex",
                                        flexWrap: "wrap"
                                    }} className="g-0">
                                        <Col style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button variant="primary"
                                                target="_blank">
                                                <BsGithub /> &nbsp; Unavailable
                                            </Button>
                                        </Col>
                                    </Row>
                                }
                            />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={4} className="project-card">
                            <ProjectCard
                                imgPath="/project/fdl.png"
                                title="Accelerated Data Management"
                                description="As Dennard scaling ends and Moore's law slows, enhancing general-purpose processor performance becomes harder. This research explores optimizing data management systems with cloud hardware accelerators to boost data task efficiency and reduce costs at scale."
                                action={
                                    <Row style={{
                                        justifyContent: "center",
                                        padding: "10px",
                                        display: "flex",
                                        flexWrap: "wrap"
                                    }} className="g-0">
                                        <Col style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button variant="primary"
                                                href={"https://fardatalab.org/research.html"}
                                                target="_blank">
                                                <CgWebsite /> &nbsp; FarDataLab Website
                                            </Button>
                                        </Col>

                                    </Row>
                                }
                            />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={4} className="project-card">
                            <ProjectCard
                                imgPath="/project/lockin.png"
                                title="aSocial Mobile App"
                                description="aSocial is an iOS app designed to help users reduce screen time by blocking apps, competing with friends, and earning real-life rewards. It utilizes the screen time API to limit phone usage and to encourage more offline activities. The app was developed using Flutter, Swift and Firebase backend."
                                action={
                                    <Row style={{
                                        justifyContent: "center",
                                        padding: "10px",
                                        display: "flex",
                                        flexWrap: "wrap"
                                    }} className="g-0">
                                        <Col style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button variant="primary"
                                                href={"https://github.com/aSocial-Technologies"}
                                                target="_blank">
                                                <BsGithub /> &nbsp; Github Organization Page
                                            </Button>
                                        </Col>
                                    </Row>
                                }
                            />
                        </Col>


                        <Col xs={12} sm={12} md={6} lg={6} xl={4} className="project-card">
                            <ProjectCard
                                imgPath="/project/great-lake.png"
                                title="Analyze Great Lakes Pollution"
                                description="This project investigates Great Lakes water quality, focusing on phosphorus levels. Utilizing data from The Canadian Open Data Portal and web-scraped city data. Delivered with time series plots, boxplots, and interactive maps for visualization. "
                                action={
                                    <Row style={{
                                        justifyContent: "center",
                                        padding: "10px",
                                        display: "flex",
                                        flexWrap: "wrap"
                                    }} className="g-0">
                                        <Col xs={5} sm={5} md={6} lg={5} xl={6} xxl={5}
                                            style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button variant="primary"
                                                href={"https://github.com/Yuanxyyds/Analyzing-Great-Lakes-Polution"}
                                                target="_blank">
                                                <BsGithub /> &nbsp; Github
                                            </Button>
                                        </Col>
                                        <Col xs={5} sm={5} md={6} lg={5} xl={6} xxl={5}
                                            style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button variant="primary"
                                                href={"https://yuanxyyds.github.io/Analyzing-Great-Lakes-Polution/"}
                                                target="_blank">
                                                <CgWebsite /> &nbsp; Website
                                            </Button>
                                        </Col>
                                    </Row>
                                }
                            />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={4} className="project-card">
                            <ProjectCard
                                imgPath="/project/ds-web.png"
                                title="Data Science Projects Collection Website"
                                description="My data science project showcase website written by RMarkdown. Including projects: Predict NBA Player's NBA2K Rating; NLP in Identifying Clash Royale Players' Feeling; Data Visualization for Bike Thefts in Toronto; Analyze Life Expectation versus Alcohol Consumption."
                                action={
                                    <Row style={{
                                        justifyContent: "center",
                                        padding: "10px",
                                        display: "flex",
                                        flexWrap: "wrap"
                                    }} className="g-0">
                                        <Col xs={5} sm={5} md={6} lg={5} xl={6} xxl={5}
                                            style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button variant="primary"
                                                href={"https://github.com/Yuanxyyds/Data-Science-Projects"}
                                                target="_blank">
                                                <BsGithub /> &nbsp; Github
                                            </Button>
                                        </Col>
                                        <Col xs={5} sm={5} md={6} lg={5} xl={6} xxl={5}
                                            style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                                            <Button
                                                variant="primary"
                                                href={"https://yuanxyyds.github.io/Data-Science-Projects/"}
                                                target="_blank">
                                                <CgWebsite /> &nbsp; Website
                                            </Button>
                                        </Col>
                                    </Row>
                                }
                            />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={4} className="project-card">
                            <ProjectCard
                                imgPath="/project/land-sink.png"
                                title="Estimate LandSink Percentage"
                                description="CSC110 Final Project. We trained a model using Python to estimate temperature and land sink percentage for a given year. As an extension, I developed a Django Backend server, which is now hosted on AWS. This server enhances interactivity and allows users to access and interact with the project through the web."
                                action={
                                    <Row style={{
                                        justifyContent: "center",
                                        padding: "10px",
                                        display: "flex",
                                        flexWrap: "wrap"
                                    }} className="g-0">
                                        <Col style={{ display: "flex", justifyContent: "center", paddingBottom: "10px", }}>
                                            <Button variant="primary"
                                                target="_blank">
                                                <Link to={"/landSink"} style={{ color: "white", textDecoration: "none" }}>
                                                    <CgWebsite /> &nbsp; Project Demo
                                                </Link>
                                            </Button>
                                        </Col>
                                    </Row>
                                }
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="two-column-content-padding mb-5" style={{ color: 'white' }}>
                <div className="text-with-animated-underline">
                    <h2 id="skill" className="fade-in mb-0">SKILLS</h2>
                    <div id="skill-line" className="animated-underline"></div>
                </div>

                <Container fluid className="p-0 pt-4">
                    <h3 className="fade-in">
                        Programming Language <strong className="primary-color">Skill </strong>
                    </h3>
                    <Language className="fade-in text-center" />
                </Container>
                <Container fluid className="p-0 pt-4">
                    <h3 className="fade-in">
                        Framework and System <strong className="primary-color">Skill </strong>
                    </h3>
                    <Framework className="fade-in text-center" />
                </Container>
                <Container fluid className="p-0 pt-4">
                    <h3 className="fade-in">
                        Service and Tool <strong className="primary-color">Skill </strong>
                    </h3>
                    <Tool className="fade-in text-center" />
                </Container>
                <Container fluid className="p-0 pt-4">
                    <h3 className="fade-in">
                        Learning <strong className="primary-color">Topics </strong>
                    </h3>
                    <Topics className="fade-in text-center" />
                </Container>
            </Container>
        </section>
    );
}

export default Project;
