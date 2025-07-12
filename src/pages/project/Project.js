import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/project/ProjectCards";
import "./../../style/project/project.css"

function Project() {
    return (
        <Container fluid className="project-section">
            <Container>
                <h2> My Recent <span className="primary-color">Works </span></h2>
                <p> Here are a few projects I've worked on recently.</p>
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
    );
}

export default Project;
