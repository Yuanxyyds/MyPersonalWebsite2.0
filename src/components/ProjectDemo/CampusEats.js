import {Col, Container, Row} from "react-bootstrap";
import Particle from "../Particle";
import React, {useState} from "react";
import campusEats1 from "../../Assets/campusEats1.0.png";
import UTFT from "../../Assets/utft.png";
import {BiCheck} from "react-icons/bi";
import ReactPlayer from "react-player";
import campusEats2 from "../../Assets/Projects/campusEats.png";


function CampusEats() {
    const [activeTab, setActiveTab] = useState('campusEats2');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        window.location.hash = tab;
    };

    React.useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            handleTabChange(hash);
        }
    }, []);
    if (activeTab === 'campusEats2') {
        return (
            <Container fluid className="project-demo-section">
                <Particle/>
                <Container>
                    <Row style={{justifyContent: "center", padding: "10px"}}>
                        <Col>
                            <div className="project-heading">
                                Campus Eats Series Demo
                            </div>
                            <ul className="project-tab-section">
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('campusEats2')}
                                        className="tab-colour project-tab-content"
                                        style={{cursor: "pointer"}}
                                    >
                                        Campus Eats 2.0 <BiCheck/>
                                    </div>
                                </li>
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('campusEats1')}
                                        className="tab-colour  project-tab-content"
                                        style={{cursor: "pointer"}}
                                    >
                                        Campus Eats 1.0
                                    </div>
                                </li>
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('utft')}
                                        className="tab-colour project-tab-content"
                                        style={{cursor: "pointer"}}
                                    >
                                        UofT FoodTruck Group Asoul
                                    </div>
                                </li>
                            </ul>
                            <p style={{textAlign: "justify", paddingTop: 20}}>
                                <strong className="blue">Updated July 13 2023</strong>: This project is under
                                development.

                                Unfortunately, this repository is currently set to private under development. However,
                                below is a project demo based on the current state of the project. Feel free also to
                                checkout
                                <a onClick={() => handleTabChange('campusEats1')}
                                   style={{cursor: "pointer", textDecoration: "none"}}
                                   className="blue"> Version 1.0
                                </a> and
                                <a onClick={() => handleTabChange('utft')}
                                   style={{cursor: "pointer", textDecoration: "none"}}
                                   className="blue"> UofT Food Truck Project
                                </a>
                            </p>
                        </Col>
                        <Col md={5} style={{paddingBottom: 20, textAlign: "center"}}>
                            <img
                                src={campusEats2}
                                alt="Campus Eats"
                                className="img-fluid"
                                style={{maxHeight: "300px"}}
                            />
                        </Col>
                    </Row>
                    <Row style={{justifyContent: "center", padding: "10px"}}>
                        <div className="project-heading">
                            Video <strong className="blue">Demo </strong>
                        </div>
                        <ReactPlayer style={{marginTop: 20}} url='https://www.youtube.com/watch?v=7Bg82R61Dfk'/>

                    </Row>


                </Container>
            </Container>
        );
    } else if (activeTab === 'campusEats1') {
        return (
            <Container fluid className="project-demo-section">
                <Particle/>
                <Container>
                    <Row style={{justifyContent: "center", padding: "10px"}}>
                        <Col>
                            <div className="project-heading">
                                Campus Eats Series Demo
                            </div>
                            <ul className="project-tab-section">
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('campusEats2')}
                                        className="tab-colour project-tab-content"
                                        style={{cursor: "pointer"}}
                                    >
                                        Campus Eats 2.0
                                    </div>
                                </li>
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('campusEats1')}
                                        className="tab-colour  project-tab-content"
                                        style={{cursor: "pointer"}}
                                    >
                                        Campus Eats 1.0 <BiCheck/>
                                    </div>
                                </li>
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('utft')}
                                        className="tab-colour project-tab-content"
                                        style={{cursor: "pointer"}}
                                    >
                                        UofT FoodTruck Group Asoul
                                    </div>
                                </li>
                            </ul>
                            <p style={{textAlign: "justify", paddingTop: 20}}>
                                As an extension to the UofT FoodTruck Project. I have formed a new development team,
                                continued this project's development and made significant enhancements. The project is
                                hosted on GitHub, with separate repositories for the user-end code here and the seller
                                code here.
                                <br/>
                                <br/>
                                This Project was developed with Flutter and Firebase backend, this project expanded my
                                expertise in Kotlin/Swift, Android Gradle building, iOS building with Xcode.
                                Additionally, I
                                gained proficiency in Figma UI design, utilized public Flutter packages, and explored
                                the Google Cloud platform for API integration.
                                <br/>
                                <br/>
                                For user-end functionality, it includes features such as account creation, account
                                editing
                                (image uploading, address autocomplete), viewing restaurant, shopping cart managing, and
                                seamless integration with the backend for communication with the seller-end.
                                <br/>
                                <br/>
                                For the seller-end functionality, it includes additional features such as restaurant
                                creation, food item creation, and backend for communication with the user-end.
                                <br/>
                                <br/>
                                To further enhance functionality and improve the user interface, <strong
                                className="blue">
                                development for this version has been halted.</strong> The latest and updated version
                                can be
                                accessed at the here. Here, you can explore the newest version of the CampusEats project
                                with improved features and a
                                refined user experience.
                            </p>
                        </Col>
                        <Col md={5} style={{paddingBottom: 20, textAlign: "center"}}>
                            <img
                                src={campusEats1}
                                alt="Campus Eats Version 1.0"
                                className="img-fluid"
                                style={{maxHeight: "700px"}}
                            />
                        </Col>

                    </Row>
                    <Row style={{justifyContent: "center", padding: "10px"}}>
                        <div className="project-heading">
                            Video <strong className="blue">Demo </strong>
                        </div>
                        <ReactPlayer style={{marginTop: 20}} url='https://www.youtube.com/watch?v=0pP6WPmZV9M'/>
                    </Row>


                </Container>
            </Container>
        );
    } else if (activeTab === 'utft') {
        return (
            <Container fluid className="project-demo-section">
                <Particle/>
                <Container>
                    <Row style={{justifyContent: "center", padding: "10px"}}>
                        <Col>
                            <div className="project-heading">
                                Campus Eats Series Demo
                            </div>
                            <ul className="project-tab-section">
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('campusEats2')}
                                        className="tab-colour project-tab-content"
                                        style={{cursor: "pointer"}}
                                    >
                                        Campus Eats 2.0
                                    </div>
                                </li>
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('campusEats1')}
                                        className="tab-colour  project-tab-content"
                                        style={{cursor: "pointer"}}
                                    >
                                        Campus Eats 1.0
                                    </div>
                                </li>
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('utft')}
                                        className="tab-colour project-tab-content"
                                        style={{cursor: "pointer"}}
                                    >
                                        UofT FoodTruck Group Asoul <BiCheck/>
                                    </div>
                                </li>
                            </ul>
                            <p style={{textAlign: "justify", paddingTop: 20}}>
                                This project was developed by Group Asoul as the final project for CSC207. The project
                                is hosted on GitHub, and you can access the source code through the this link. It serves
                                as the initial version of the CampusEats series.
                                <br/>
                                <br/>
                                We have developed a FoodTruck ordering program with two main components: the Java
                                backend and the Java/Android frontend. The backend handles user registration, login
                                system, rating system, market sorting, serialization, and various functionalities like
                                managing food trucks and orders. Users can act as both buyers and sellers, and they can
                                edit their food trucks.
                                <br/>
                                <br/>
                                For the frontend, we have implemented a fully-functional command-line interface that can
                                be accessed in Intellij. It includes a help function to display available commands.
                                Additionally, we have partially implemented an Android app, which can perform most of
                                the command-line functions except dynamically viewing the market, order history, and
                                placing orders.
                            </p>
                        </Col>
                        <Col md={5} style={{paddingBottom: 20, textAlign: "center"}}>
                            <img
                                src={UTFT}
                                alt="UofT Food Truck App"
                                className="img-fluid"
                                style={{maxHeight: "550px"}}
                            />
                        </Col>

                    </Row>
                    <Row style={{justifyContent: "center", padding: "10px"}}>
                        <div className="project-heading">
                            Command Line Interface <strong className="blue">Demo </strong>
                        </div>
                        <ReactPlayer style={{marginTop: 20}} url='https://www.youtube.com/watch?v=J3kfU4Ic8Uc'/>
                    </Row>
                    <Row style={{justifyContent: "center", padding: "10px"}}>
                        <div className="project-heading">
                            Android App <strong className="blue">Demo </strong>
                        </div>
                        <ReactPlayer style={{marginTop: 20}} url='https://www.youtube.com/watch?v=RT-l98ZasE4'/>
                    </Row>


                </Container>
            </Container>
        );
    }
}

export default CampusEats;

