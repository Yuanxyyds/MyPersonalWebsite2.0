import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import campusEats from "../../Assets/Projects/campusEats.png";
import GreatLakes from "../../Assets/Projects/Great-lakes.png";
import DSWsb from "../../Assets/Projects/DS-web.png";
import PersonalWeb from "../../Assets/Projects/personal-web.png";
import DTC from "../../Assets/Projects/dtc.png";
import Button from "react-bootstrap/Button";
import {BsGithub} from "react-icons/bs";
import {CgWebsite} from "react-icons/cg";
import {Link} from "react-router-dom";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="blue">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={campusEats}
                            title="Campus Eats Mobile App"
                            description="As an extension to the UofT FoodTruck Project, we have created a comprehensive mobile food delivery app, catering to users, restaurants, and drivers, with the goal of enhancing campus food services. The app was developed using Flutter and Firebase backend."
                            action={
                                <>
                                    <Button variant="primary"
                                            target="_blank">
                                        <Link to={"/campusEats"} style={{color: "white", textDecoration: "none"}}>
                                            <CgWebsite/> &nbsp; Project Demo
                                        </Link>
                                    </Button>
                                </>}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={PersonalWeb}
                            title="Personal Website"
                            description="My personal website built with Next.js and Tailwind CSS (version 1.0) and React App (version 2.0). Both websites feature detailed project explanations, and videos showcasing each project."
                            action={
                                <>
                                    <Button variant="primary" href={"https://github.com/Yuanxyyds/MyPersonalWebsite2.0"}
                                            target="_blank">
                                        <BsGithub/> &nbsp; Version 2.0
                                    </Button>
                                    {"\n"}
                                    {"\n"}
                                    <Button
                                        variant="primary"
                                        href={"my-personal-website2-0.vercel.app"}
                                        target="_blank"
                                        style={{marginLeft: "10px"}}>
                                        <CgWebsite/> &nbsp; Website
                                    </Button>
                                    {"\n"}
                                    {"\n"}
                                    <Button variant="primary" href={"https://github.com/Yuanxyyds/MyPersonalWebsite"}
                                            target="_blank" style={{marginTop: "10px"}}>
                                        <BsGithub/> &nbsp; Version 1.0
                                    </Button>
                                    {"\n"}
                                    {"\n"}
                                    <Button
                                        variant="primary"
                                        href={"https://liustev6.ca"}
                                        target="_blank"
                                        style={{marginLeft: "10px", marginTop: "10px"}}>
                                        <CgWebsite/> &nbsp; Website
                                    </Button>
                                </>}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={DTC}
                            title="JCI Community (DTC) Mobile App"
                            description="Home Security and Cloud device management mobile app (currently named as Community) developed by Johnson Controls. Participated in Front-end and Back-end development using Flutter and Firebase."
                            action={
                                <>
                                    <Button variant="primary"
                                            target="_blank">
                                        <BsGithub/> &nbsp; Unavailable
                                    </Button>
                                </>}
                        />
                    </Col>


                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={GreatLakes}
                            title="Analyze Great Lakes Pollution"
                            description="This project investigates Great Lakes water quality, focusing on phosphorus levels. Utilizing data from The Canadian Open Data Portal and web-scraped city data. Delivered with time series plots, boxplots, and interactive maps for visualization. "
                            action={
                                <>
                                    <Button variant="primary"
                                            href={"https://github.com/Yuanxyyds/Analyzing-Great-Lakes-Polution"}
                                            target="_blank">
                                        <BsGithub/> &nbsp; Github
                                    </Button>
                                    {"\n"}
                                    {"\n"}
                                    <Button
                                        variant="primary"
                                        href={"https://yuanxyyds.github.io/Analyzing-Great-Lakes-Polution/"}
                                        target="_blank"
                                        style={{marginLeft: "10px"}}>
                                        <CgWebsite/> &nbsp; Website
                                    </Button>
                                </>}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={DSWsb}
                            title="Data Science Projects Collection Website"
                            description="My data science project showcase website written by RMarkdown. Including projects: Predict NBA Player's NBA2K Rating; NLP in Identifying Clash Royale Players' Feeling; Data Visualization for Bike Thefts in Toronto; Analyze Life Expectation versus Alcohol Consumption."
                            action={
                                <>
                                    <Button variant="primary"
                                            href={"https://github.com/Yuanxyyds/Data-Science-Projects"}
                                            target="_blank">
                                        <BsGithub/> &nbsp; Github
                                    </Button>
                                    {"\n"}
                                    {"\n"}
                                    <Button
                                        variant="primary"
                                        href={"https://yuanxyyds.github.io/Data-Science-Projects/"}
                                        target="_blank"
                                        style={{marginLeft: "10px"}}>
                                        <CgWebsite/> &nbsp; Website
                                    </Button>
                                </>}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
